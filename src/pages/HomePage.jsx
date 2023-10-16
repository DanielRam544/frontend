import React from 'react';

const backgroundStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.8)", // Gris con 50% de opacidad
};

function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-homepage'> {/* Aplica la clase 'bg-homepage' aquí */}
      <div style={backgroundStyle} className='bg-gray-800 max-w-lg w-full p-6 rounded-xl shadow-lg text-white text-center'>
        <h1 className='text-3xl font-semibold mb-4'>Aplicación para el Trastorno de Ansiedad Generalizada (TAG)</h1>
        <h2 className='text-xl font-semibold text-gray-400 mb-4'>Apoyo y Gestión</h2>

        <div className="mb-4">
          <p className='text-gray-300 mb-2'>
            Bienvenido a la aplicación diseñada para brindar apoyo a personas que enfrentan el Trastorno de Ansiedad Generalizada (TAG).
          </p>
          <p className='text-gray-300 mb-2'>
            Inicia sesión o regístrate para acceder a todas las funcionalidades y recursos diseñados para ayudarte a manejar y comprender el TAG.
          </p>
          <p className='text-gray-300'>
            Esta aplicación te proporciona herramientas y consejos para enfrentar el TAG de manera efectiva y mejorar tu bienestar emocional.
          </p>
        </div>

        <hr className='my-4 border-t border-gray-600' />

        <p className='text-sm text-gray-500'>
          © 2023 Derechos Reservados GDRH
        </p>
      </div>
    </div>
  );
}

export default HomePage;
