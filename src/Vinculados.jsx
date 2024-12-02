import Avvvatars from "avvvatars-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "./api/coneccion";

export default function Vinculados() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [vinculados, setVinculados] = useState([]); // Estado para almacenar los vinculados

    // Cargar datos desde localStorage al montar el componente
    useEffect(() => {
        // Obtener los datos de "vinculados" del localStorage
        const storedVinculados = localStorage.getItem("vinculados");
        console.log(JSON.parse(storedVinculados))
        if (storedVinculados) {
            setVinculados(JSON.parse(storedVinculados)); // Convertir la cadena JSON en un objeto
        }
    }, []); // Este efecto solo se ejecuta una vez, al montar el componente

    return (
        <div className="min-h-screen text-gray-800 bg-black">
            <header className="flex justify-between items-center mb-6 bg-black border border-[#4D4D4D] px-2 ">
                <button
                    className="md:hidden p-2 rounded-md transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-x stroke-white"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2 stroke-white"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 6l16 0" />
                            <path d="M4 12l16 0" />
                            <path d="M4 18l16 0" />
                        </svg>
                    )}
                </button>
                <nav className="hidden md:flex space-x-4">
                    <Link
                        to="/login"
                        className="px-3 py-2 rounded-md hover:bg-[#3836FE] transition-colors text-white"
                    >
                        Login
                    </Link>
                    <Link
                        to="/"
                        className="px-3 py-2 rounded-md hover:bg-[#3836FE] transition-colors text-white"
                    >
                        Alumnos
                    </Link>
                    <Link
                        to="/empresas"
                        className="px-3 py-2 rounded-md hover:bg-[#3836FE] transition-colors text-white"
                    >
                        Empresas
                    </Link>
                    <Link
                        to="/vincular"
                        className="px-3 py-2 rounded-md hover:bg-[#3836FE] transition-colors text-white"
                    >
                        Vincular
                    </Link>
                    <Link
                        to="/vinculados"
                        className="px-3 py-2 rounded-md hover:bg-[#3836FE] transition-colors text-white"
                    >
                        Vinculados
                    </Link>
                </nav>
                {menuOpen && (
                    <div
                        className="z-10 fixed top-0 left-0 right-0 bg-black flex flex-col justify-center items-center w-full h-screen"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <Link
                            to="/login"
                            className="px-3 py-2 rounded-md hover:bg-[#3836FE] transition-colors text-white"
                        >
                            Login
                        </Link>
                        <Link
                            to="/"
                            className="px-3 py-2 rounded-md hover:bg-[#3836FE] transition-colors text-white"
                        >
                            Alumnos
                        </Link>
                        <Link
                            to="/empresas"
                            className="px-3 py-2 rounded-md hover:bg-[#3836FE] transition-colors text-white"
                        >
                            Empresas
                        </Link>
                        <Link
                            to="/vincular"
                            className="px-3 py-2 rounded-md hover:bg-[#3836FE] transition-colors text-white"
                        >
                            Vincular
                        </Link>
                        <Link
                            to="/vinculados"
                            className="px-3 py-2 rounded-md hover:bg-[#3836FE] transition-colors text-white"
                        >
                            Vinculados
                        </Link>
                    </div>
                )}
                <button className="p-2 rounded-md transition-colors">
                    <Avvvatars value="tim@apple.com" size={45} />
                </button>
            </header>

            <div className="p-4 max-w-[1200px] m-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
                    <div className="flex w-full gap-2">
                        <div className="relative flex-1 max-w-xl w-full">
                            <p className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-search"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                    <path d="M21 21l-6 -6" />
                                </svg>
                            </p>
                            <input
                                type="text"
                                placeholder="Buscar Alumno Por Correo o Nombre"
                                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
                            />
                        </div>
                        <button className="px-2 py-2 border border-gray-300 rounded-md text-white hover:bg-white hover:text-black transition-colors">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-reload"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" />
                                <path d="M20 4v5h-5" />
                            </svg>
                        </button>
                    </div>

                    <div className="space-x-2 flex">
                        <button className="px-4 py-2 border border-gray-300 rounded-md text-white hover:bg-white hover:text-black transition-colors">
                            Exportar
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {vinculados.length > 0 ? (
                        vinculados.map((vinculado, index) => (
                            <div key={index} className="text-white bg-black border border-[#4D4D4D] rounded-lg p-4 flex justify-end items-center space-x-4 shadow-sm hover:shadow-md transition-shadow hover:bg-[#4D4D4D]/10">
                                <div className="relative">
                                    <Avvvatars value={vinculado.alumno["Nombres Completos"]} size={45} />
                                </div>
                                <div className="w-full flex flex-col gap-2">
                                    <h3 className="font-semibold">{vinculado.alumno["Nombres Completos"]}</h3>
                                    <p className="text-gray-600">{vinculado.alumno["Correo Institucional"]}</p>
                                    
                                    <a href={vinculado.url_convenio}>Descargar CCM</a> 
                                    <input type="text" value={vinculado.url_convenio} className="text-black p-1"/>
                                </div>
                                <button
                                    className="px-4 py-2 border border-[#4D4D4D] rounded-md text-white hover:bg-white hover:text-black transition-colors"
                                    // onClick={() => addAlumnoVincular(student)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-eye">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                    </svg>
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-white">No hay vinculados para mostrar</p>
                    )}
                </div>
            </div>
        </div>
    );
}
