import React from 'react';

function HomePage() {
  return (
    <div
      className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12"
    >
      <div className="w-full items-center mx-auto max-w-screen-lg">
        <div className="group grid w-full grid-cols-2">
          <div className="pl-16 relative flex items-end flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-blue-500 before:bottom-0 before:left-0 before:rounded-lg  before:transition-all group-hover:before:bg-blue-300 overflow-hidden">
            <div className="absolute top-0 left-0 bg-blue-500 w-4/6 px-12 py-14 flex flex-col justify-center rounded-xl group-hover:bg-blue-600 transition-all ">
              <span className="block mb-10 font-bold group-hover:text-blue-300">AQUÍ ESTAMOS</span>
              <h2 className="text-white font-bold text-3xl">
                "Encuentra calma en cada clic: Juntos contra la ansiedad."
              </h2>
            </div>
            <a className="font-bold text-sm flex mt-2 mb-8 items-center gap-2" href="/register">
              <span>MÁS AQUI</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <div className="rounded-xl overflow-hidden">
              <img src="https://picsum.photos/800/800" alt="" />
            </div>
          </div>
          <div>
            <div className="pl-12">
              <h1 className='mb-4 font-bold'>
                Bienvenido a nuestra página web de apoyo para el Trastorno de Ansiedad Generalizada (TAG)
              </h1>
              <p className="peer mb-6 text-white">
                En esta plataforma, nos dedicamos a proporcionar recursos, información y apoyo para aquellos que viven con el Trastorno de Ansiedad Generalizada (TAG). Creemos que nadie debería enfrentar esta condición solo, y estamos aquí para ofrecerte herramientas que te ayudarán a manejar tus síntomas y vivir una vida más plena y tranquila.
              </p>
              <p className="mb-6 text-white">
                ¿Necesitas hablar con alguien que entienda lo que estás pasando? Nuestro web es el lugar perfecto para conectarte con otras personas que pueden apoyar con el TAG.
              </p>
              <h3 className="mb-4 font-semibold text-xl text-white">Se cuenta con:</h3>
              <ul role="list" className="marker:text-white list-disc pl-5 space-y-3 text-white">
                <li>Herramientas de autoayuda</li>
                <li>Ayuda via telefonica de instituciones gubernamentales</li>
                <li>Sugerencias</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
