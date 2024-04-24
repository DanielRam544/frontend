import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { IoAddCircle, IoLogIn, IoLogOut, IoPerson, IoPersonAdd, IoFilter, IoFilterCircle, IoHomeOutline, IoSearch, IoCall } from "react-icons/io5";
import { useState } from "react";
import logo from "../img/serenity 2.png";

function Navbar() {
    const { isAuthenticated, logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const backgroundStyle = {
        backgroundColor: "rgba(21, 94, 117,0.5)",
    };

    return (
        <nav style={backgroundStyle} className="rounded-lg bg-primary py-4 px-4 md:px-8 lg:px-12 ">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className=" mb-4 md:mb-0">
                    <Link to={isAuthenticated ? "/CuestionarioTag" : "/"} className="text-white text-2xl font-bold flex items-center">
                        <img src={logo} alt="SerenityNow Logo" className="w-12 h-auto mr-2" />
                        SerenityNow
                    </Link>

                </div>

                <button onClick={toggleMenu} className="md:hidden text-white text-3xl focus:outline-none">
                    {menuOpen ? <IoFilter /> : <IoFilterCircle />}
                </button>

                <ul className={`${menuOpen ? "block" : "hidden"} md:flex md:flex-row md:space-x-4 md:space-y-0 mt-4 md:mt-0 md:ml-4`}>
                    <NavItem to={isAuthenticated ? "/" : "/"} icon={<IoHomeOutline className="text-lg" />} label="Inicio" />



                    {isAuthenticated ? (
                        <>
                            <NavItem to="/Sugerencias" icon={<IoAddCircle />} label="Sugerencias" />
                            <NavItem to={isAuthenticated ? "/Especialistas" : "/"} icon={<IoCall />} label="Líneas telefónicas" />
                            <NavItem to={isAuthenticated ? "/TipsPage" : "/"} icon={<IoSearch />} label="Consejos TAG" />
                            <LogoutButton onLogout={logout} />
                        </>
                    ) : (
                        <>
                            <NavItem to="/login" icon={<IoLogIn className="text-2xl" />} label="Iniciar Sesión" />
                            <NavItem to="/register" icon={<IoPersonAdd className="text-lg" />} label="Registrarse" />
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

// Componente para elementos del menú
function NavItem({ to, icon, label, color }) {
    const itemStyle = {
        color: color,
    };

    return (
        <li>
            <Link to={to} className="text-lg font-semibold flex items-center" style={itemStyle}>
                {icon && <span className="text-lg mr-2">{icon}</span>}
                {label}
            </Link>
        </li>
    );
}

// Componente para el botón de cierre de sesión
function LogoutButton({ onLogout, color }) {
    const buttonStyle = {
        color: color,
    };

    return (
        <li>
            <button onClick={onLogout} className="text-lg font-semibold flex items-center" style={buttonStyle}>
                <IoLogOut className="text-2xl mr-2" /> Salir
            </button>
        </li>
    );
}

export default Navbar;
