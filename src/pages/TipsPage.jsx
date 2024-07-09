import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import Gallery from "react-image-gallery";
import ApoyoAmigos from "../img/ApoyoAmigos.png";
import Respirar from "../img/Respirar.png";
import Terapeuta from "../img/Terapeuta.png";
import Tiempos from "../img/trello.png";
import Dibujo from "../img/dibujo.png";

function TipsPage() {

    const backgroundStyle = {
        backgroundColor: "rgba(21, 94, 117,0.5) ", // Gris con 50% de opacidad
    };

    const tips = [
        {
            id: 1,
            original: ApoyoAmigos,
            title: "Apoyo de Amigos",
            description:
                "Busca el apoyo de amigos cercanos o familiares en momentos difíciles. Hablar con alguien de confianza puede ayudarte a sentirte mejor.",
            buttonLabel: "Contacta a un amigo",
            buttonLink: "https://web.whatsapp.com/",
        },
        {
            id: 2,
            original: Respirar,
            title: "Respiración Profunda",
            description:
                "Practica la respiración profunda para reducir el estrés y mejorar tu bienestar. En Xhalr puedes programar un metodo de respiración personalizado.",
            buttonLabel: "xhalr",
            buttonLink: "https://www.xhalr.com/",
        },
        {
            id: 3,
            original: Terapeuta,
            title: "Terapia Profesional",
            description:
                "Habla con un terapeuta profesional sobre tus preocupaciones y sentimientos.",
            buttonLabel: "Ayuda Profesional",
            buttonLink: "https://porquequieroestarbien.com/psicologos-en-linea-gratis",
        },
        {
            id: 4,
            original: Tiempos,
            title: "Rutina Diaria",
            description:
                "Establece una rutina diaria para reducir la ansiedad y mejorar tu calidad de vida. Puedes ayudarte de herramientas como Trello",
            buttonLabel: "Trello",
            buttonLink: "https://trello.com/es",
        },
        {
            id: 5,
            original: Dibujo,
            title: "Dibuja y Colorea",
            description:
                "Dibuja y colorea para expresar tus emociones y liberar el estrés de forma creativa.",
            buttonLabel: "Quick, Draw!",
            buttonLink: "https://quickdraw.withgoogle.com/#",
        },
    ];

    return (
        <div>
            <div style={backgroundStyle} className="container mt-4 bg-black rounded-lg">
                <h1 className="text-center text-2xl md:text-4xl font-bold mb-4 pt-6 pb-6">
                    CONSEJOS PARA MEJORAR TU SALUD MENTAL
                </h1>
                <div className="flex flex-wrap justify-center">
                    {tips.map((tip) => (
                        <div key={tip.id} className="relative flex flex-col rounded-xl background-text-input bg-clip-border background-text-green shadow-md m-4 w-full sm:w-80">
                            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r">
                                <img src={tip.original} alt={tip.title} className="object-cover w-full h-full" />
                            </div>
                            <div className="p-6">
                                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    {tip.title}
                                </h5>
                                <p className="block font-sans text-base font-medium leading-relaxed text-inherit antialiased">
                                    {tip.description}
                                </p>
                            </div>
                            <div className="p-6 pt-2 flex-grow flex items-center justify-center">
                                <a
                                    target="_blank"
                                    href={tip.buttonLink}
                                    className="select-none rounded-lg background-button-green py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    style={{ alignSelf: 'flex-end' }}
                                >
                                    {tip.buttonLabel}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
    
}

export default TipsPage;
