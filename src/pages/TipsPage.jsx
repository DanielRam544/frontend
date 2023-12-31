import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import Gallery from "react-image-gallery";
import Meditacion from "../img/Meditacion.png";
import Respiracion from "../img/Respiracion.png";
import Respirar from "../img/Respirar.png";
import Terapeuta from "../img/Terapeuta.png";
import Tiempos from "../img/Tiempos.png";

function TipsPage() {

    const backgroundStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Gris con 50% de opacidad
    };

    //Aqui es donde agrego las imagenes y la descriocion de cada una de ellas
    const tips = [
        {
            id: 1,
            original: Meditacion,
            title: "Meditación",
            description:
                "Practica la meditación para reducir la ansiedad y encontrar la paz interior.",
            buttonLabel: "Ver más",
            buttonLink: "/meditacion",
        },
        {
            id: 2,
            original: Respiracion,
            title: "Ejercicios de Respiración",
            description:
                "Realiza ejercicios de respiración para relajarte y controlar la ansiedad.",
            buttonLabel: "Ver más",
            buttonLink: "/respiracion",
        },
        {
            id: 3,
            original: Respirar,
            title: "Respiración Profunda",
            description:
                "Practica la respiración profunda para reducir el estrés y mejorar tu bienestar.",
            buttonLabel: "Ver más",
            buttonLink: "/respiracion-profunda",
        },
        {
            id: 4,
            original: Terapeuta,
            title: "Terapia Profesional",
            description:
                "Habla con un terapeuta profesional sobre tus preocupaciones y sentimientos.",
            buttonLabel: "Ver más",
            buttonLink: "/terapia",
        },
        {
            id: 5,
            original: Tiempos,
            title: "Rutina Diaria",
            description:
                "Establece una rutina diaria para reducir la ansiedad y mejorar tu calidad de vida.",
            buttonLabel: "Ver más",
            buttonLink: "/rutina-diaria",
        },
        // Agrega más consejos aquí
    ];

    return (
        <div style={backgroundStyle} className="container mt-4 bg-black rounded-lg  border-4 border-stone-800">
            <h1 className="text-center text-4xl font-bold mb-4">
                Consejos para manejar el TAG
            </h1>
            <div className="flex flex-wrap">
                {tips.map((tip) => (
                    <div key={tip.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="flex flex-col h-full">
                            <div>
                                <img src={tip.original} alt={tip.title} />
                            </div>
                            <div className="p-4 flex-grow">
                                <h2 className="text-xl font-semibold">{tip.title}</h2>
                                <p className="description text-lg mt-2">{tip.description}</p>
                            </div>
                            <div className="text-center mt-4">
                                <a
                                    href={tip.buttonLink}
                                    className="px-4 py-2 bg-cyan-900 text-white text-lg font-semibold rounded-md hover:bg-cyan-700 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out"
                                >
                                    {tip.buttonLabel}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TipsPage;
