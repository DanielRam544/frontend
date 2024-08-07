import React from "react";

function Sugerencias() {
    const backgroundStyle = {
        backgroundColor: "rgba(21, 94, 117,0.5)", // Gris con 50% de opacidad
    };

    // Aquí es donde agregas las sugerencias
    const suggestions = [
        {
            id: 1,
            title: "Practicar la meditación diaria",
            description: "Dedica tiempo cada día para meditar y enfocarte en la relajación. La meditación puede ayudar a reducir los niveles de ansiedad. En la siguiente pagina coloca aquello que te causa estres y observa como se aleja de ti.",
            buttonLabel: "Explora la meditación",
            buttonLink: "https://www.pixelthoughts.co/",
        },
        {
            id: 2,
            title: "Realizar ejercicio regularmente",
            description: "El ejercicio físico es una excelente manera de liberar tensiones y reducir la ansiedad. Intenta incorporar una rutina de ejercicios en tu vida diaria.",
            buttonLabel: "Conoce más sobre ejercicios",
            buttonLink: "https://musclewiki.com/",
        },
        {
            id: 3,
            title: "Mantener un diario de gratitud",
            description: "Escribir regularmente las cosas por las que te sientes agradecido puede promover pensamientos positivos y reducir la ansiedad. Empieza tu diario de gratitud hoy mismo.",
            buttonLabel: "Comienza tu diario",
            buttonLink: "https://daylio.net/",
        },
        {
            id: 4,
            title: "Explorar la terapia de exposición",
            description: "La terapia de exposición puede ayudar a enfrentar tus miedos y ansiedades de manera controlada. Consulta a un profesional de salud mental para obtener orientación.",
            buttonLabel: "Más información sobre terapia de exposición",
            buttonLink: "https://psicologia.uaz.edu.mx/atencion-psicologica/",
        },
        // Agrega más sugerencias específicas para TAG aquí
    ];

    return (
        <div style={backgroundStyle} className="container mt-4 rounded-lg bg-gray-100 p-6">
            <h1 className="text-center text-2xl md:text-4xl font-bold mb-4 text-white">
                SUGERENCIAS PARA EL TRASTORNO DE ANSIEDAD GENERALIZADA
            </h1>
            <div className="flex flex-wrap justify-center">
                {suggestions.map((suggestion) => (
                    <div key={suggestion.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="p-4 flex-grow">
                                <h2 className="text-xl font-semibold background-text-green">{suggestion.title}</h2>
                                <p className="description text-lg mt-2 background-text-green">{suggestion.description}</p>
                            </div>
                            <div className="p-6 pt-2 flex-grow flex items-center justify-center">
                                <a
                                    href={suggestion.buttonLink}
                                    target="_blank"
                                    className="select-none rounded-lg background-button-green py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    style={{ alignSelf: 'flex-end' }}
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
