import React from "react";

function Sugerencias() {
    const backgroundStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Gris con 50% de opacidad
    };

    // Aquí es donde agregas las sugerencias
    const suggestions = [
        {
            id: 1,
            title: "Practicar la meditación diaria",
            description: "Dedica tiempo cada día para meditar y enfocarte en la relajación. La meditación puede ayudar a reducir los niveles de ansiedad.",
            buttonLabel: "Explora la meditación",
            buttonLink: "https://www.youtube.com/watch?v=meditation-example",
        },
        {
            id: 2,
            title: "Realizar ejercicio regularmente",
            description: "El ejercicio físico es una excelente manera de liberar tensiones y reducir la ansiedad. Intenta incorporar una rutina de ejercicios en tu vida diaria.",
            buttonLabel: "Conoce más sobre ejercicios",
            buttonLink: "/ejercicios-para-ansiedad",
        },
        {
            id: 3,
            title: "Mantener un diario de gratitud",
            description: "Escribir regularmente las cosas por las que te sientes agradecido puede promover pensamientos positivos y reducir la ansiedad. Empieza tu diario de gratitud hoy mismo.",
            buttonLabel: "Comienza tu diario",
            buttonLink: "/diario-de-gratitud",
        },
        {
            id: 4,
            title: "Explorar la terapia de exposición",
            description: "La terapia de exposición puede ayudar a enfrentar tus miedos y ansiedades de manera controlada. Consulta a un profesional de salud mental para obtener orientación.",
            buttonLabel: "Más información sobre terapia de exposición",
            buttonLink: "/terapia-de-exposicion",
        },
        // Agrega más sugerencias específicas para TAG aquí
    ];

    return (
        <div style={backgroundStyle} className="container mt-4 bg-black rounded-lg border-4 border-stone-800">
            <h1 className="text-center text-4xl font-bold mb-4">
                SUGERENCIAS PARA EL TRASTORNO DE ANSIEDAD GENERALIZADA
            </h1>
            <div className="flex flex-wrap">
                {suggestions.map((suggestion) => (
                    <div key={suggestion.id} className="w-full md:w-1/2 lg-w-1/3 p-4">
                        <div className="flex flex-col h-full">
                            <div className="p-4 flex-grow">
                                <h2 className="text-xl font-semibold">{suggestion.title}</h2>
                                <p className="description text-lg mt-2">{suggestion.description}</p>
                            </div>
                            <div className="text-center mt-4">
                                <a
                                    href={suggestion.buttonLink}
                                    target="_blank" // Abre en una nueva pestaña
                                    className="px-4 py-2 bg-cyan-900 text-white text-lg font-semibold rounded-md hover-bg-cyan-700 focus-outline-none focus-bg-blue-600 transition duration-300 ease-in-out"
                                >
                                    {suggestion.buttonLabel}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sugerencias;
