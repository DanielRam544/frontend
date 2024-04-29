import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoLogIn, IoPersonAdd, IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";

// Importa la imagen que desees utilizar
import logo from "../img/serenity.png";

function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signin, isAuthenticated, errors: signInErrors } = useAuth();
    const [passwordShown, setPasswordShown] = useState(false);
    const [loading, setLoading] = useState(false); // Estado para controlar la animación de carga

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    }

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        } else {
            console.log("No está autenticado.");
        }
    }, [isAuthenticated])

    const onSubmit = async (data) => {
        setLoading(true); // Inicia la animación de carga
        await signin(data);
        setLoading(false); // Detiene la animación de carga después del inicio de sesión
    }

    const backgroundStyle = {
        backgroundColor: "rgba(21, 94, 117,0.5)", // Gris con 50% de opacidad
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen mt-0">
            <div style={backgroundStyle} className="bg-zinc-800 max-w-md p-5 rounded-md w-full md:w-1/2 text-center">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                {
                    signInErrors.map((error, i) => (
                        <div className="bg-red-500 p-2 my-2 text-white" key={i}>
                            {error}
                        </div>
                    ))
                }
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <img src={logo} alt="Logo" className="w-60 h-auto mx-auto mb-4" />
                    <div>
                        <label htmlFor="email">Correo electrónico</label>
                        <input
                            type="text" id="email" name="email"
                            className="w-full background-text-input text-black px-4 py-2 rounded-md my-2"
                            placeholder="Correo electrónico"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <p className="text-red-500">Correo electrónico requerido.</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <div className="flex items-center relative">
                            <input
                                type={passwordShown ? "text" : "password"}
                                id="password" name="password"
                                className="w-full background-text-input text-black px-4 py-2 rounded-md my-2"
                                placeholder="Contraseña"
                                {...register("password", { required: true, minLength: 6 })}
                            />
                            <span
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordShown ? <IoEyeOffSharp className="text-2xl background-text-green" /> : <IoEyeSharp className="text-2xl background-text-green" />}
                            </span>
                        </div>
                        {errors.password?.type === "required" && (
                            <p className="text-red-500">Contraseña requerida.</p>
                        )}
                        {errors.password?.type === "minLength" && (
                            <p className="text-red-500">Contraseña debe tener al menos 6 caracteres.</p>
                        )}

                    </div>

                    {/* Boton de Inicio de sesion */}
                    <div className="w-full flex items-center justify-center">
                        <button
                            type="submit"
                            className={`relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow background-button-gre transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-cyan-100 dark:text-black dark:hover:text-gray-200 dark:shadow-none group ${loading ? 'pointer-events-none' : ''}`}
                            disabled={loading} // Deshabilita el botón mientras está cargando
                        >
                            <div className="absolute inset-0 flex items-center justify-center">

                            </div>
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out background-button-gre group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-5 h-5 text-green-700">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                                </svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-5 h-5 text-green-700">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                                </svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black dark:group-hover:text-black">{loading ? 'Cargando...' : 'Iniciar Sesión'}</span>
                        </button>
                    </div>

                    {/* Fin del boton de inicio de sesion */}

                    {/* Registro de usuario */}
                    <div className="w-full flex items-center justify-center">
                        <Link to="/register" className="text-white font-semibold hover:underline">¡Crea una cuenta!</Link>
                    </div>
                    {/* Fin del boton de registro de usuario */}
                </form>
            </div>
        </div>
    )
}

export default LoginPage;
