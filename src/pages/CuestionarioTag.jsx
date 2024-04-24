import React, { Component } from 'react';

class CuestionarioTAG extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestionIndex: 0,    // Índice de la pregunta actual
            score: 0,                   // Puntaje acumulado
            questions: [                // Matriz de preguntas y opciones
                {
                    question: 'Me preocupo demasiado por cosas sin importancia.',
                    options: ['Nada = 0', 'Algo = 1', 'Bastante = 2', 'Mucho = 3'],
                    scores: [0, 1, 2, 3],  // Puntajes correspondientes a las opciones
                },
                {
                    question: 'Me rondan y molestan pensamientos normalmente negativos que no puedo controlar.',
                    options: ['Nada = 0', 'Algo = 1', 'Bastante = 2', 'Mucho = 3'],
                    scores: [0, 1, 2, 3],
                },
                {
                    question: 'Me afectan los desengaños tanto que no puedo olvidarlos.',
                    options: ['Nada = 0', 'Algo = 1', 'Bastante = 2', 'Mucho = 3'],
                    scores: [0, 1, 2, 3],
                },
                {
                    question: 'Suelo tomar las cosas demasiado seriamente.',
                    options: ['Nada = 0', 'Algo = 1', 'Bastante = 2', 'Mucho = 3'],
                    scores: [0, 1, 2, 3],
                },
                {
                    question: 'Me siento tenso o alterado la mayor parte del tiempo.',
                    options: ['Nada = 0', 'Algo = 1', 'Bastante = 2', 'Mucho = 3'],
                    scores: [0, 1, 2, 3],
                },
                {
                    question: 'Me preocupo ahora por desgracias futuras que pienso que es posible que pasen',
                    options: ['Nada = 0', 'Algo = 1', 'Bastante = 2', 'Mucho = 3'],
                    scores: [0, 1, 2, 3],
                },
                {
                    question: 'Me siento contrariado porque realizo cosas que no me gustan.',
                    options: ['Nada = 0', 'Algo = 1', 'Bastante = 2', 'Mucho = 3'],
                    scores: [0, 1, 2, 3],
                },
                {
                    question: 'Me siento normalmente atado u oprimido.',
                    options: ['Nada = 0', 'Algo = 1', 'Bastante = 2', 'Mucho = 3'],
                    scores: [0, 1, 2, 3],
                },
            ],
            finished: false,             // Indica si el cuestionario está terminado
        };
    }

    // Maneja la selección de una respuesta
    handleAnswer = (selectedAnswerIndex) => {
        const { currentQuestionIndex, questions, score } = this.state;

        if (currentQuestionIndex < questions.length - 1) {
            this.setState({ currentQuestionIndex: currentQuestionIndex + 1 });
            this.updateScore(selectedAnswerIndex);
        } else {
            // Si es la última pregunta, calcula la fase del TAG
            this.updateScore(selectedAnswerIndex);
            this.setState({ finished: true });
        }
    }

    // Actualiza el puntaje en función de la respuesta seleccionada
    updateScore = (selectedAnswerIndex) => {
        const { questions, score } = this.state;
        const currentQuestion = questions[this.state.currentQuestionIndex]; // Debe ser currentQuestion, no questions[questions.length - 1]
        const scoreIncrement = currentQuestion.scores[selectedAnswerIndex];
        this.setState({ score: score + scoreIncrement });
    }

    // Calcula la fase del TAG en función del puntaje
    calculateTagPhase = () => {
        const { score } = this.state;
        if (score >= 17) {
            return 'Fase grave del TAG';
        } else if (score >= 10) {
            return 'Fase moderada del TAG';
        } else {
            return 'Fase leve del TAG';
        }
    }

    // Muestra una alerta con la puntuación y la fase del TAG
    finishQuiz = () => {
        const { score } = this.state;
        const tagPhase = this.calculateTagPhase();

        alert(`Puntuación: ${score} / 21\nUsted se encuentra en la ${tagPhase}.`);
    }

    render() {
        const { currentQuestionIndex, questions, finished } = this.state;

        return (
            <div className="flex items-center justify-center h-screen">
                <div className="max-w-md p-4 rounded shadow-lg bg-slate-600">
                    <h1 className="text-2xl font-semibold mb-4">Cuestionario sobre el TAG</h1>
                    {finished ? (
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">¡Cuestionario completado!</h2>
                            <p className="text-lg">
                                Haga clic en el botón "Finalizar" para ver su puntuación.
                            </p>
                            <button
                                onClick={this.finishQuiz}
                                className="bg-blue-600 text-white py-2 px-4 rounded hover-bg-blue-700 mt-4"
                            >
                                Finalizar
                            </button>
                        </div>
                    ) : (
                        <div>
                            <p className="text-sm">Pregunta {currentQuestionIndex + 1} de 7</p>
                            <h3 className="text-xl font-semibold mb-2">{questions[currentQuestionIndex].question}</h3>
                            <ul>
                                {questions[currentQuestionIndex].options.map((option, index) => (
                                    <li key={index} className="mb-2">
                                        <button
                                            onClick={() => this.handleAnswer(index)}
                                            className="bg-blue-600 text-white py-2 px-4 rounded hover-bg-blue-700"
                                        >
                                            {option}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default CuestionarioTAG;
