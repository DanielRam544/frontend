import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoLogIn, IoPersonAdd, IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import ReCaptcha from "react-google-recaptcha";

// Importa la imagen que desees utilizar
import logo1 from "../img/Logo1.png";

function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signin, isAuthenticated, errors: signInErrors } = useAuth();
    const [passwordShown, setPasswordShown] = useState(false);
    const [capchaValue, setCapchaValue] = useState(null);

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    }

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/products');
        } else {
            console.log("No está autenticado.");
        }
    }, [isAuthenticated])

    const onSubmit = handleSubmit((data) => {
        signin(data);
    })

    const backgroundStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Gris con 50% de opacidad
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen mt-8">
            <div style={backgroundStyle} className="bg-zinc-800 max-w-md p-10 rounded-md w-full md:w-1/2 text-center">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                {
                    signInErrors.map((error, i) => (
                        <div className="bg-red-500 p-2 my-2 text-white" key={i}>
                            {error}
                        </div>
                    ))
                }
                <form onSubmit={onSubmit} className="space-y-4">
                    <img src={logo1} alt="Logo" className="w-1/2 h-auto mx-auto mb-4" />
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text" id="email" name="email"
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                            placeholder="Email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <p className="text-red-500">Email es requerido.</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <div className="flex items-center relative">
                            <input
                                type={passwordShown ? "text" : "password"}
                                id="password" name="password"
                                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                                placeholder="Password"
                                {...register("password", { required: true, minLength: 6 })}
                            />
                            <span
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordShown ? <IoEyeOffSharp className="text-2xl" /> : <IoEyeSharp className="text-2xl" />}
                            </span>
                        </div>
                        {errors.password?.type === "required" && (
                            <p className="text-red-500">Password requerido.</p>
                        )}
                    </div>
                    <div>
                        <button
                            className="w-full bg-transparent hover:bg-slate-600 text-sky-500 font-semibold hover:text-white py-2 px-4 border border-sky-500 hover:border-transparent flex items-center justify-center filter grayscale"
                            type="submit" disabled={!capchaValue}>
                            <IoLogIn size={30} className="ml-2" />
                            <span>Iniciar Sesión</span>
                        </button>
                    </div>
                    <ReCaptcha
                        sitekey="6Lfc4agoAAAAABV-RAumbJd_7o2oHUAGN9fFBphH"
                        onChange={(value) => setCapchaValue(value)}
                        style={{ maxWidth: "100%" }}
                    />
                </form>
                <div className="text-center">
                    <p className="flex gap-x-2 justify-between pt-5 mt-5 font-bold">¿No tienes una cuenta?
                        <Link to="/register" className="text-white text-2xl font-bold hover:text-slate-400 flex items-center">
                            ¡Crea una!
                            <IoPersonAdd size={30} className="ml-2" />
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
