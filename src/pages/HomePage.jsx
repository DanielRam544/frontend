import React from 'react';

function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center py-6 sm:py-12">
      <div className="container mx-auto max-w-screen-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative flex items-end flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-green-50 before:bottom-0 before:left-0 before:rounded-lg before:transition-all">
            <div className="absolute top-0 left-0 background-fount w-4/6 px-12 py-14 flex flex-col justify-center rounded-xl">
              <span className="block mb-4 font-bold">AQUÍ ESTAMOS</span>
              <h2 className="text-white font-bold text-3xl">
                "Encuentra calma en cada click: Juntos contra la ansiedad."
              </h2>
            </div>
            <a className="font-bold text-sm flex mt-2 mb-8 items-center gap-2" href="/register">
              {/* Agrega contenido aquí si es necesario */}
            </a>
            <div className="rounded-xl overflow-hidden">
              <img src="https://picsum.photos/800/800" alt="" className="w-full h-auto" />
            </div>
          </div>
          <div className="background-fount rounded-xl px-10 py-10">
            <h1 className="mb-4 text-black">
              Bienvenido a nuestra página web de apoyo para el Trastorno de Ansiedad Generalizada (TAG)
            </h1>
            <p className="mb-6 text-white">
              En esta plataforma, nos dedicamos a proporcionar recursos, información y apoyo para aquellos que viven con el Trastorno de Ansiedad Generalizada (TAG). Creemos que nadie debería enfrentar esta condición solo, y estamos aquí para ofrecerte herramientas que te ayudarán a manejar tus síntomas y vivir una vida más plena y tranquila.
            </p>
            <p className="mb-6 text-white">
              ¿Necesitas hablar con alguien que entienda lo que estás pasando? Nuestro web es el lugar perfecto para conectarte con otras personas que pueden apoyar con el TAG.
            </p>
            <h3 className="mb-4 font-semibold text-xl text-white">Se cuenta con:</h3>
            <ul role="list" className="marker:text-white list-disc pl-5 space-y-3 text-white">
              <li>Herramientas de autoayuda</li>
              <li>Ayuda telefónica de instituciones gubernamentales</li>
              <li>Sugerencias</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
