import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoPersonAdd } from "react-icons/io5";
import { useState } from "react";
import ReCaptcha from "react-google-recaptcha";

import logo1 from "../img/Logo1.png";

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    const [captchaValue, setCaptchaValue] = useState(null);

    useEffect(() => {
        if (isAuthenticated) navigate('/products');
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    const backgroundStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Gris con 50% de opacidad
    };

    return (
        <div className="flex items-center justify-center h-screen mt-8">
            <div style={backgroundStyle} className="bg-zinc-800 max-w-md p-10 rounded-md w-full md:w-1/2 text-center">
                <h1 className="text-2xl font-bold mb-4">Registro</h1>
                <img src={logo1} alt="Logo" className="w-1/2 h-auto mx-auto mb-4" />
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
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Username"
                        {...register("username", { required: true, minLength: 5 })}
                    />
                    {errors.username?.type === "required" && (
                        <p className="text-red-500">Nombre de usuario requerido.</p>
                    )}
                    {errors.username?.type === "minLength" && (
                        <p className="text-red-500">La longitud mínima es de 5 caracteres.</p>
                    )}
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Email"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <p className="text-red-500">Email es requerido.</p>}
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Password"
                        {...register("password", { required: true, minLength: 6 })}
                    />
                    {errors.password?.type === "required" && (
                        <p className="text-red-500">Password requerido.</p>
                    )}
                    {errors.username?.type === "minLength" && (
                        <p className="text-red-500">La longitud mínima es de 6 caracteres.</p>
                    )}
                    <div className="mb-4">
                        <button
                            className="w-full bg-transparent hover:bg-slate-600 text-sky-500 font-semibold hover:text-white py-2 px-4 border border-sky-500 hover:border-transparent flex items-center justify-center filter grayscale"
                            type="submit"
                            disabled={!captchaValue}
                        >
                            Registrar
                            <IoPersonAdd size={30} className="ml-2" />
                        </button>
                    </div>
                    <ReCaptcha
                        sitekey="6Lfc4agoAAAAABV-RAumbJd_7o2oHUAGN9fFBphH"
                        onChange={(value) => setCaptchaValue(value)}
                        style={{ maxWidth: "100%" }}
                    />

                </form>
                <p className="flex gap-x-2 justify-between pt-5 mt-5 font-bold">
                    ¿Ya tienes una cuenta?
                    <Link to="/login" className=" text-white text-2xl font-bold hover:text-slate-400">
                        ¡Inicia sesión!
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default RegisterPage;
