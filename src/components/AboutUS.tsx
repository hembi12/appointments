"use client";

import React from "react";

const AboutUs: React.FC = () => {
    return (
        <section className="py-20 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Image and Bio */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <img
                        src="/images/dentist-team.webp"
                        alt="Equipo dental"
                        className="w-full max-w-md rounded-lg shadow-lg"
                    />
                    <h3 className="text-2xl font-bold text-gray-900 mt-6">
                        Dr. Juan Pérez
                    </h3>
                    <p className="text-gray-800 mt-4">
                        Con más de 10 años de experiencia en odontología, el Dr. Juan Pérez y su
                        equipo se dedican a brindar atención dental de calidad en un ambiente cómodo y profesional.
                    </p>
                </div>

                {/* Right Column: Clinic Info */}
                <div className="self-start">
                    <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold bg-gradient-to-b from-red-700 via-red-600 to-red-400 bg-clip-text text-transparent mb-6">Acerca de Nosotros</h2>
                    <p className="text-gray-800 mb-4">
                        En nuestra clínica dental, creemos que una sonrisa saludable no solo mejora
                        tu apariencia, sino también tu confianza y bienestar general. Por eso,
                        trabajamos con dedicación para ofrecer tratamientos personalizados de alta
                        calidad.
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-6">Nuestra Misión</h3>
                    <p className="text-gray-800 mt-2">
                        Proporcionar servicios dentales excepcionales con un enfoque en el
                        bienestar del paciente y la atención personalizada.
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-6">Nuestros Valores</h3>
                    <ul className="list-disc list-inside text-gray-800 mt-2 space-y-2">
                        <li>Compromiso con la excelencia.</li>
                        <li>Empatía y cuidado humano.</li>
                        <li>Ambiente moderno y profesional.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
