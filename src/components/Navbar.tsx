"use client";

import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>("inicio");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target.id) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: "-50px 0px -50px 0px",
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setIsMenuOpen(false); // Cierra el menú al seleccionar una sección
    };

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            const menu = document.getElementById("mobile-menu");
            const button = document.getElementById("menu-button");

            if (
                isMenuOpen &&
                menu &&
                button &&
                !menu.contains(e.target as Node) &&
                !button.contains(e.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [isMenuOpen]);

    const sections = [
        { id: "inicio", label: "Inicio" },
        { id: "servicios", label: "Servicios" },
        { id: "acerca", label: "Acerca de" },
        { id: "testimonios", label: "Testimonios" },
        { id: "citas", label: "Citas" },
        { id: "galeria", label: "Galería" },
        { id: "blog", label: "Blog" },
        { id: "contacto", label: "Contacto" },
    ];

    return (
        <header className="bg-[#F8F9FA] shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                <button
                    onClick={() => scrollToSection("inicio")}
                    className="text-red-600 font-bold text-xl flex items-center focus:outline-none"
                >
                    <span className="text-2xl mr-2">🦷</span> DentistaPro
                </button>

                <nav className="hidden md:flex space-x-6">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`${
                                activeSection === section.id
                                    ? "text-red-600 font-bold border-b-2 border-red-600"
                                    : "text-gray-800"
                            } hover:text-red-600 focus:outline-none`}
                            aria-current={activeSection === section.id ? "true" : undefined}
                        >
                            {section.label}
                        </button>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    id="menu-button"
                    className="md:hidden text-gray-800 hover:text-red-600 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    {isMenuOpen ? (
                        // Close icon (X)
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        // Hamburger icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
                    <nav className="space-y-2 px-4 py-4">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`block w-full text-left ${
                                    activeSection === section.id
                                        ? "text-red-600 font-bold border-l-4 border-red-600 pl-2"
                                        : "text-gray-800"
                                } hover:text-red-600 focus:outline-none`}
                                aria-current={activeSection === section.id ? "true" : undefined}
                            >
                                {section.label}
                            </button>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
