"use client";

import React from "react";

const Footer: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-[#F8F9FA] py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo or Clinic Name */}
                    <div>
                        <h2 className="text-red-600 font-bold text-xl flex items-center">
                            <span className="text-2xl mr-2">🦷</span> DentistaPro
                        </h2>
                        <p className="mt-2 text-gray-600">Cuida tu sonrisa, cuida tu salud.</p>
                    </div>

                    {/* Quick Links - Dividido en dos columnas */}
                    <div>
                        <h3 className="text-gray-800 font-bold text-lg">Secciones</h3>
                        <div className="mt-4 grid grid-cols-2 gap-x-4">
                            <ul className="space-y-2">
                                <li>
                                    <button
                                        onClick={() => scrollToSection("inicio")}
                                        className="text-gray-600 hover:text-red-600 focus:outline-none"
                                    >
                                        Inicio
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection("servicios")}
                                        className="text-gray-600 hover:text-red-600 focus:outline-none"
                                    >
                                        Servicios
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection("acerca")}
                                        className="text-gray-600 hover:text-red-600 focus:outline-none"
                                    >
                                        Acerca de
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection("testimonios")}
                                        className="text-gray-600 hover:text-red-600 focus:outline-none"
                                    >
                                        Testimonios
                                    </button>
                                </li>
                            </ul>
                            <ul className="space-y-2">
                                <li>
                                    <button
                                        onClick={() => scrollToSection("citas")}
                                        className="text-gray-600 hover:text-red-600 focus:outline-none"
                                    >
                                        Citas
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection("galeria")}
                                        className="text-gray-600 hover:text-red-600 focus:outline-none"
                                    >
                                        Galería
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection("blog")}
                                        className="text-gray-600 hover:text-red-600 focus:outline-none"
                                    >
                                        Blog
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection("contacto")}
                                        className="text-gray-600 hover:text-red-600 focus:outline-none"
                                    >
                                        Contacto
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-gray-800 font-bold text-lg">Contacto</h3>
                        <ul className="mt-4 space-y-2">
                            <li className="text-gray-600">
                                Teléfono:{" "}
                                <a href="tel:+1234567890" className="hover:text-red-600">
                                    +1 234 567 890
                                </a>
                            </li>
                            <li className="text-gray-600">
                                Correo:{" "}
                                <a href="mailto:info@dentistapro.com" className="hover:text-red-600">
                                    info@dentistapro.com
                                </a>
                            </li>
                            <li className="text-gray-600">Dirección: Calle Salud, 123, Ciudad Dental</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-gray-800 font-bold text-lg">Síguenos</h3>
                        <div className="flex space-x-4 mt-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-600 hover:text-red-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M22 12a10 10 0 1 0-11.69 9.9v-7H8v-2.9h2.31V9.1c0-2.3 1.4-3.6 3.53-3.6 1 0 2 .18 2 .18v2.32h-1.12c-1.11 0-1.45.69-1.45 1.39v1.62h2.46l-.39 2.9h-2.07v7A10 10 0 0 0 22 12z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-600 hover:text-red-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.23 4.23 0 0 0 1.88-2.33 8.5 8.5 0 0 1-2.69 1.02 4.22 4.22 0 0 0-7.19 3.86A12 12 0 0 1 3.18 5a4.2 4.2 0 0 0-.57 2.13c0 1.47.74 2.77 1.86 3.53a4.16 4.16 0 0 1-1.92-.53v.05c0 2.05 1.45 3.75 3.36 4.14a4.23 4.23 0 0 1-1.91.07 4.22 4.22 0 0 0 3.94 2.93A8.46 8.46 0 0 1 2 19.54a11.9 11.9 0 0 0 6.29 1.84c7.55 0 11.67-6.26 11.67-11.67v-.53A8.4 8.4 0 0 0 22.46 6z" />
                                </svg>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-600 hover:text-red-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M12 2.2c3.2 0 3.6.01 4.85.07 1.17.05 1.97.22 2.65.47.73.27 1.34.63 1.93 1.22s.95 1.2 1.22 1.93c.25.68.42 1.48.47 2.65.06 1.25.07 1.65.07 4.85s-.01 3.6-.07 4.85c-.05 1.17-.22 1.97-.47 2.65-.27.73-.63 1.34-1.22 1.93s-1.2.95-1.93 1.22c-.68.25-1.48.42-2.65.47-1.25.06-1.65.07-4.85.07s-3.6-.01-4.85-.07c-1.17-.05-1.97-.22-2.65-.47-.73-.27-1.34-.63-1.93-1.22s-.95-1.2-1.22-1.93c-.25-.68-.42-1.48-.47-2.65C2.21 15.6 2.2 15.2 2.2 12s.01-3.6.07-4.85c.05-1.17.22-1.97.47-2.65.27-.73.63-1.34 1.22-1.93S5.4 2.82 6.13 2.55c.68-.25 1.48-.42 2.65-.47 1.25-.06 1.65-.07 4.85-.07m0-2.2c-3.24 0-3.65.01-4.93.07-1.29.06-2.18.27-2.95.57A6.38 6.38 0 0 0 1.8 2.8a6.38 6.38 0 0 0-1.36 1.36c-.3.77-.51 1.66-.57 2.95-.06 1.28-.07 1.69-.07 4.93s.01 3.65.07 4.93c.06 1.29.27 2.18.57 2.95a6.38 6.38 0 0 0 1.36 1.36c.77.3 1.66.51 2.95.57 1.28.06 1.69.07 4.93.07s3.65-.01 4.93-.07c1.29-.06 2.18-.27 2.95-.57a6.38 6.38 0 0 0 1.36-1.36c.3-.77.51-1.66.57-2.95.06-1.28.07-1.69.07-4.93s-.01-3.65-.07-4.93c-.06-1.29-.27-2.18-.57-2.95a6.38 6.38 0 0 0-1.36-1.36c-.77-.3-1.66-.51-2.95-.57-1.28-.06-1.69-.07-4.93-.07zM12 5.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm0 10.8a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6zm6.5-10.3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-600 text-sm">
                    <p>© {new Date().getFullYear()} Héctor Martil. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
