import React, { Component } from 'react';

// Constantes para los puntajes y las fases del TAG
const backgroundStyle = {
    backgroundColor: "rgba(21, 94, 117, 0.5)", // Gris con 50% de opacidad
};

const SCORES = [1, 2, 3, 4];
const TAG_PHASES = ['sin síntomas', 'en la fase leve', 'en fase moderada', 'en fase grave y necesita ayuda profesional'];

// Definición de las preguntas y opciones para diferentes tests
const QUESTIONS = {
    'TAG': [
        'Me preocupo demasiado por cosas sin importancia.',
        'Me rondan y molestan pensamientos normalmente negativos que no puedo controlar.',
        'Me afectan los desengaños tanto que no puedo olvidarlos.',
        'Suelo tomar las cosas demasiado seriamente.',
        'Me siento tenso o alterado la mayor parte del tiempo.',
        'Me preocupo ahora por desgracias futuras que pienso que es posible que pasen.',
        'Me siento contrariado porque realizo cosas que no me gustan.',
        'Me siento normalmente atado u oprimido.'
    ],
    'DEPRESSION': [
        '¿Te has sentido cansado(a) o con poca energía?',
        '¿Has tenido dificultad para concentrarte en ciertas actividades, tales como leer el periódico o ver la televisión?',
        '¿Te has sentido decaído(a), deprimido(a) o sin esperanzas?',
        '¿Has experimentado poco interés o placer en hacer cosas?',
        '¿Has tenido dificultad para quedarte, permanecer dormido(a), o has dormido demasiado?',
        '¿Has estado sin apetito o has comido en exceso?',
        '¿Te has sentido mal contigo mismo(a), piensas que eres un fracaso, que has quedado mal contigo mismo(a) o con tu familia?',
        '¿Te has movido o hablado tan lento que otras personas podrían haberlo notado o, por el contrario, has estado tan inquieto(a) o agitado(a) que has estado moviéndote mucho más de lo normal?',
        'Pensamientos de que estarías mejor muerto(a) o de lastimarte de alguna manera, ¿han pasado por tu mente?',
    ]
};

class CuestionarioMultiTest extends Component {
    state = {
        currentQuestionIndex: 0,
        score: 0,
        finished: false,
        currentTest: 'TAG',
    };

    // Maneja la selección de una respuesta
    handleAnswer = (selectedAnswerIndex) => {
        this.setState(prevState => {
            const currentTestQuestions = QUESTIONS[prevState.currentTest];
            const isLastQuestion = prevState.currentQuestionIndex === currentTestQuestions.length - 1;
            
            return {
                currentQuestionIndex: isLastQuestion ? prevState.currentQuestionIndex : prevState.currentQuestionIndex + 1,
                score: prevState.score + SCORES[selectedAnswerIndex],
                finished: isLastQuestion
            };
        }, () => {
            if (this.state.finished) {
                this.finishQuiz();
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
        } else {
            return TAG_PHASES[0];
        }
    }

    // Muestra una alerta con la puntuación y la fase del TAG
    finishQuiz = () => {
        const { score, currentTest } = this.state;
        const tagPhase = this.calculateTagPhase();
        const questionsCount = QUESTIONS[currentTest].length;
        alert(`Puntuación: ${score} / ${SCORES.length * questionsCount}\nUsted está ${tagPhase}.`);
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
        const { currentQuestionIndex, finished, currentTest } = this.state;
        const currentTestQuestions = QUESTIONS[currentTest];
        const questionsCount = currentTestQuestions.length;
        const progress = Math.round((currentQuestionIndex / questionsCount) * 100);

        return (
            <div className="flex items-center justify-center min-h-screen">
                <div style={backgroundStyle} className="max-w-md w-full p-6 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold mb-6 text-center text-white">Cuestionario</h1>
                    <div className="mb-4">
                        {Object.keys(QUESTIONS).map(testName => (
                            <button
                                key={testName}
                                onClick={() => this.changeTest(testName)}
                                className={`mr-2 py-2 px-4 rounded hover:bg-blue-700 transition duration-300 text-white ${currentTest === testName ? 'bg-blue-700 font-semibold' : 'background-button-green'}`}
                            >
                                {testName === 'TAG' ? 'TAG (Ansiedad)' : 'DEPRESSION (Depresión)'}
                            </button>
                        ))}
                    </div>
                    <div className="mb-4">
                        <div className="bg-gray-300 h-2 rounded-full">
                            <div className="bg-blue-500 h-2 rounded-full transition-width duration-500" style={{ width: `${progress}%` }}></div>
                        </div>
                        <p className="text-sm text-center mt-2 text-white">{`Pregunta ${currentQuestionIndex + 1} de ${questionsCount}`}</p>
                    </div>
                    <div className="bg-white background-text-green p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">{currentTestQuestions[currentQuestionIndex]}</h3>
                        <ul>
                            {SCORES.map((score, index) => (
                                <li key={index} className="mb-2">
                                    <button
                                        onClick={() => this.handleAnswer(index)}
                                        className="py-2 px-4 rounded hover:bg-blue-700 transition duration-300 w-full text-left background-button-green text-white"
                                    >
                                        {score === 1 ? 'Ningún día' : score === 2 ? 'Varios días' : score === 3 ? 'Más de la mitad de los días' : 'Todos los días'}
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
