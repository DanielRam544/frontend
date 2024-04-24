import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import SAPTEL from "../img/SAPTEL.png";
import Vivetel from "../img/vivetel.png";
import HFray from "../img/HFray.png";
import EMA from "../img/EMA.png";
import Locatel from "../img/locatel.png";
import UNAM from "../img/UNAM3.png";
import UIES from "../img/UIES.png";
import INPRF from "../img/inprf.png";

function Especialistas() {
    const backgroundStyle = {
        backgroundColor: "rgba(13, 55, 140,0.4)", // Gris con 50% de opacidad
    };

    const tips = [
        {
            id: 1,
            original: SAPTEL,
            title: "Consejería SAPTEL",
            description:
                "El Sistema Nacional de Apoyo, Consejo Psicológico e Intervención en Crisis por Teléfono, ofrece un servicio de terapia psicológica gratuita facilitada por psicólogos certificados.",
            telefono: "55-5259-8121",
            buttonLabel: "Ver más",
            buttonLink: "https://www.saptel.org.mx/",
        },
        {
            id: 2,
            original: Vivetel,
            title: "Vivetel Salud Mental",
            description:
                "Servicio de atención psicológica gratuita vía telefónica, los psicólogos que la atienden se especializan en brindar intervención en crisis y orientar acerca de la prevención del suicidio.",
            telefono: "800-232-8432",
            buttonLabel: "Ver más",
            buttonLink: "https://psiconversando.com/Terapia/GetDirectorio#:~:text=L%C3%ADnea%20telef%C3%B3nica%20VIVETEL%20C4%2C%20para,citas%20para%20los%20servicios%20presenciales.&text=55%205132%200909%2024%20horas%20los%20365%20d%C3%ADas.",
        },
        {
            id: 3,
            original: HFray,
            title: "Hospital Psiquiátrico Fray Bernardino",
            description:
                "Urgencias de salud mental para personal de salud y primeros respondientes.",
            telefono: "55-5487-4278",
            buttonLabel: "Ver más",
            buttonLink: "https://www.gob.mx/salud/sap/acciones-y-programas/hospital-psiquiatrico-fray-bernardino-alvarez",
        },
        {
            id: 4,
            original: EMA,
            title: "Clínica de Emergencias Mentales para el Adolescente (EMA)",
            description:
                "Unidad de atención de crisis y suicidio para jóvenes del estado de Chiapas.",
            telefono: "961-236-7238 961-236-7239 961-236-7240",
            buttonLabel: "Ver más",
            buttonLink: "https://saludchiapas.gob.mx/noticias/post/clinica-ema-ha-transformado-la-atencion-del-adolescente-con-conductas-de-riesgo-suicida-dr-pepe-cruz",
        },
        {
            id: 5,
            original: Locatel,
            title: "Línea de Ayuda LOCATEL ",
            description:
                "Ofrece atención psicológica gratuita por teléfono, apoyo en contingencias y casos de desastres. El sistema de “Chat psicológico” brinda orientación, consejería y apoyo emocional en crisis.",
            telefono: "555 658 1111",
            buttonLabel: "Ver más",
            buttonLink: "https://311locatel.cdmx.gob.mx/",
        },
        {
            id: 6,
            original: UNAM,
            title: "Call Center UNAMe",
            description:
                "Se trata de un servicio gratuito donde especialistas atienden de manera breve y directa a quienes estén pasando por una crisis o un momento difícil.",
            telefono: "(55) 5025 0855",
            buttonLabel: "Ver más",
            buttonLink: "https://www.psico.mx/psicologos/call-center-unam",
        },
        {
            id: 7,
            original: UIES,
            title: "Unidad de Inteligencia Epidemiológica Sanitaria",
            description:
                "Público en general, atención en violencia; riesgo suicida, violencias.",
            telefono: "800 0044 800",
            buttonLabel: "Ver más",
            buttonLink: "https://www.gob.mx/salud/acciones-y-programas/unidad-de-inteligencia-epidemiologica-y-sanitaria-uies",
        },
        {
            id: 8,
            original: INPRF,
            title: "Instituto Nacional de Psiquiatría",
            description:
                "Urgencias de salud mental para personal de salud y primeros respondientes.",
            telefono: "800 953 1705",
            buttonLabel: "Ver más",
            buttonLink: "https://www.inprf.gob.mx/",
        }
    ];

    return (
        <div style={backgroundStyle} className="container mt-4 bg-black rounded-lg">
            <h1 className="text-center text-4xl font-bold mb-4 pt-6 pb-6">
                LÍNEAS TELEFÓNICAS DE ATENCIÓN PSICOLÓGICA
            </h1>
            <div className="flex flex-wrap">
                {tips.map((tip) => (
                    <div key={tip.id} className="relative flex w-80 flex-col rounded-xl bg-teal-600 bg-clip-border text-gray-800 shadow-md m-4">
                        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                            <img src={tip.original} alt={tip.title} className="object-cover w-full h-full" />
                        </div>
                        <div className="p-6">
                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {tip.title}
                            </h5>
                            <p className="block font-sans text-base font-medium leading-relaxed text-inherit antialiased">
                                {tip.description}
                            </p>
                            <p className="block font-sans text-base font-semibold leading-relaxed text-inherit antialiased">
                                Teléfono: {tip.telefono}
                            </p>
                        </div>
                        <div className="p-6 pt-2">
                            <a
                                target="_blank"
                                href={tip.buttonLink}
                                className="select-none rounded-lg bg-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            >
                                {tip.buttonLabel}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Especialistas;
