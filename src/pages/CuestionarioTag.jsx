import React, { Component } from 'react';

// Constantes para los puntajes y las fases del TAG
const backgroundStyle = {
    backgroundColor: "rgba(21, 94, 117,0.5)", // Gris con 50% de opacidad
};

const SCORES = [0, 1, 2, 3];
const TAG_PHASES = ['sin sintomas', 'en la fase leve', 'en fase moderada', 'en fase grave y necesita ayuda profesional'];

// Definición de las preguntas y opciones para el Test de Ansiedad Generalizada (TAG)
const TAG_QUESTIONS = [
    'Me preocupo demasiado por cosas sin importancia.',
    'Me rondan y molestan pensamientos normalmente negativos que no puedo controlar.',
    'Me afectan los desengaños tanto que no puedo olvidarlos.',
    'Suelo tomar las cosas demasiado seriamente.',
    'Me siento tenso o alterado la mayor parte del tiempo.',
    'Me preocupo ahora por desgracias futuras que pienso que es posible que pasen.',
    'Me siento contrariado porque realizo cosas que no me gustan.',
    'Me siento normalmente atado u oprimido.'
];

// Definición de las preguntas y opciones para otro test (por ejemplo, Test de Depresión)
const DEPRESSION_QUESTIONS = [
    '¿Te has sentido cansado(a) o con poca energía?',
    '¿Has tenido dificultad para concentrarte en ciertas actividades, tales como leer el periódico o ver la televisión?',
    '¿Te has sentido decaído(a), deprimido(a) o sin esperanzas?',
    '¿Has experimentado poco interés o placer en hacer cosas?',
    '¿Has tenido dificultad para quedarte, permanecer dormido(a), o has dormido demasiado?',
    '¿Has estado sin apetito o has comido en exceso?',
    '¿Te has sentido mal contigo mismo(a), piensas que eres un fracaso, que has quedado mal contigo mismo(a) o con tu familia?',
    '¿Te has movido o hablado tan lento que otras personas podrían haberlo notado o, por el contrario, has estado tan inquieto(a) o agitado(a) que has estado moviéndote mucho más de lo normal?',
    'Pensamientos de que estarías mejor muerto(a) o de lastimarte de alguna manera, ¿han pasado por tu mente?',
];

class CuestionarioMultiTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestionIndex: 0,
            score: 0,
            finished: false,
            currentTest: 'TAG',
            tests: {
                'TAG': {
                    questions: TAG_QUESTIONS,
                },
                'DEPRESSION': {
                    questions: DEPRESSION_QUESTIONS,
                },
            }
        };
    }

    // Maneja la selección de una respuesta
    handleAnswer = (selectedAnswerIndex) => {
        const { currentQuestionIndex, currentTest, tests, score } = this.state;
        const currentTestQuestions = tests[currentTest].questions;

        // Calcular el puntaje máximo posible para las preguntas restantes
        const remainingQuestions = currentTestQuestions.length - currentQuestionIndex;
        const remainingMaxScore = remainingQuestions * 3;

        // Calcular el incremento del puntaje para la respuesta seleccionada
        const scoreIncrement = Math.min(3, remainingMaxScore);

        const isLastQuestion = currentQuestionIndex === currentTestQuestions.length - 1;

        this.setState(prevState => ({
            currentQuestionIndex: isLastQuestion ? prevState.currentQuestionIndex : prevState.currentQuestionIndex + 1,
            score: prevState.score + scoreIncrement,
            finished: isLastQuestion
        }), () => {
            if (isLastQuestion) {
                this.finishQuiz(); // Llama a finishQuiz si es la última pregunta
            }
        });
    }

    // Calcula la fase del TAG en función del puntaje
    calculateTagPhase = () => {
        const { score } = this.state;
        if (score >= 20) {
            return TAG_PHASES[3];
        } else if (score >= 15) {
            return TAG_PHASES[2];
        } else if (score >= 10) {
            return TAG_PHASES[1];
        } else if (score >= 0) {
            return TAG_PHASES[0];
        }
    }


    // Muestra una alerta con la puntuación y la fase del TAG
    finishQuiz = () => {
        const { score, currentTest, tests } = this.state;
        const tagPhase = this.calculateTagPhase();
        const questionsCount = tests[currentTest].questions.length;
        alert(`Puntuación: ${score} / ${SCORES.length * questionsCount}\nUsted esta ${tagPhase}.`);
    }

    // Cambia entre diferentes tests
    changeTest = (testName) => {
        this.setState({
            currentTest: testName,
            currentQuestionIndex: 0,
            score: 0,
            finished: false
        });
    }

    render() {
        const { currentQuestionIndex, finished, currentTest, tests } = this.state;
        const currentTestQuestions = tests[currentTest].questions;
        const questionsCount = currentTestQuestions.length;
        const progress = Math.round((currentQuestionIndex / questionsCount) * 100);

        return (
            <div className="flex items-center justify-center h-screen">
                <div style={backgroundStyle} className="max-w-md p-4 rounded shadow-lg ">
                    <h1 className="text-2xl font-semibold mb-4">Cuestionario</h1>
                    <div>
                        {Object.keys(tests).map(testName => (
                            <button
                                key={testName}
                                onClick={() => this.changeTest(testName)}
                                className={`mr-2 background-button-green text-white py-2 px-4 rounded hover-bg-blue-700 ${currentTest === testName ? 'font-semibold' : ''}`}
                            >
                                {testName === 'TAG' ? 'TAG (Ansiedad)' : 'DEPRESSION (Depresión)'}
                            </button>
                        ))}
                    </div>
                    <div>
                        <div className="mb-2">
                            <div className="bg-gray-300 h-2 rounded-full">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
                            </div>
                            <p className="text-sm text-center">{`Pregunta ${currentQuestionIndex + 1} de ${questionsCount}`}</p>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{currentTestQuestions[currentQuestionIndex]}</h3>
                        <ul>
                            {SCORES.map((score, index) => (
                                <li key={index} className="mb-2">
                                    <button
                                        onClick={() => this.handleAnswer(index)}
                                        className="background-button-green text-white py-2 px-4 rounded hover-bg-blue-700"
                                    >
                                        {score === 0 ? 'Ningún día' : score === 1 ? 'Varios días' : score === 2 ? 'Más de la mitad de los días' : score === 3 ? 'Todos los días' : score}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default CuestionarioMultiTest;
