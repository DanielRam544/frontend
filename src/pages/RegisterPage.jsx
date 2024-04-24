import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { IoPersonAdd } from "react-icons/io5";
import ReCaptcha from "react-google-recaptcha";
import logo from "../img/serenity.png";

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    const [captchaValue, setCaptchaValue] = useState(null);
    const [captchaFilled, setCaptchaFilled] = useState(false);

    useEffect(() => {
        if (isAuthenticated) navigate('/');
    }, [isAuthenticated, navigate]);

    const onSubmit = handleSubmit(async (values) => {
        if (!captchaValue) {
            alert("Por favor, completa el captcha.");
            return;
        }
        signup(values);
    });

    const backgroundStyle = {
        backgroundColor: "rgba(21, 94, 117,0.5)", // Gris con 50% de opacidad
    };

    return (
        <div className="mt-8 mb-8">
            <div className="flex items-center justify-center">
                <div style={backgroundStyle} className="bg-zinc-800 max-w-md p-5 rounded-md w-full md:w-1/2 text-center">
                    <h1 className="text-2xl font-bold mb-4">Registro</h1>
                    <img src={logo} alt="Logo" className="w-60 h-auto mx-auto mb-0" />
                    {registerErrors.map((error, i) => (
                        <div className="bg-red-500 p-2 my-2 text-white" key={i}>
                            {error}
                        </div>
                    ))}
                    <form onSubmit={onSubmit}>
                        <label htmlFor="username">Nombre de usuario</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full background-text-input text-black px-4 py-2 rounded-md my-2"
                            placeholder="Usuario"
                            {...register("username", { required: true, minLength: 5 })}
                        />
                        {errors.username?.type === "required" && (
                            <p className="text-red-500">Nombre de usuario requerido.</p>
                        )}
                        {errors.username?.type === "minLength" && (
                            <p className="text-red-500">La longitud mínima es de 5 caracteres.</p>
                        )}
                        <label htmlFor="email">Correo electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full background-text-input text-black px-4 py-2 rounded-md my-2"
                            placeholder="Correo electrónico"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <p className="text-red-500">El correo es requerido.</p>}
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full background-text-input text-black px-4 py-2 rounded-md my-2"
                            placeholder="Contraseña"
                            {...register("password", { required: true, minLength: 6 })}
                        />
                        {errors.password?.type === "required" && (
                            <p className="text-red-500">La contraseña es requerida.</p>
                        )}
                        {errors.password?.type === "minLength" && (
                            <p className="text-red-500">La longitud mínima es de 6 caracteres.</p>
                        )}

                        <div className="flex items-center justify-center mt-4">
                            <ReCaptcha
                                sitekey="6Lfc4agoAAAAABV-RAumbJd_7o2oHUAGN9fFBphH"
                                onChange={(value) => {
                                    setCaptchaValue(value);
                                    if (value) {
                                        setCaptchaFilled(true);
                                    } else {
                                        setCaptchaFilled(false);
                                    }
                                }}
                                style={{ maxWidth: "100%" }}
                            />
                        </div>
                        {/* Mensaje de captcha no llenado */}
                        {!captchaFilled && (
                            <p className="text-red-500 mt-2 text-lg">Por favor, completa el captcha.</p>
                        )}

                        {/* Boton de registro */}
                        <div className="w-full flex items-center justify-center mt-4">
                            <button
                                type="submit"
                                disabled={!captchaValue}
                                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow background-button-gre transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-cyan-100 dark:text-black dark:hover:text-gray-200 dark:shadow-none group"
                            >
                                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out background-button-gre group-hover:h-full"></span>
                                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                    <IoPersonAdd className="w-5 h-5 background-text-green" />
                                </span>
                                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                    <IoPersonAdd className="w-5 h-5 background-text-green" />
                                </span>
                                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black dark:group-hover:text-black">
                                    Registrarte ahora
                                </span>
                            </button>
                        </div>
                        {/* Fin del boton de registro */}

                    </form>
                    {/* Enlace de inicio de sesión */}
                    <div className="w-full flex items-center justify-center mt-4">
                        <Link to="/login" className="text-white font-semibold hover:underline">¡Ya tengo una cuenta!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
