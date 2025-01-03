import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
    return (
        <div className="relative bg-[#F8F9FA] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-16 sm:py-24 lg:py-32 flex flex-col items-center text-center">
                    {/* Headline */}
                    <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-b from-red-700 via-red-600 to-red-400 bg-clip-text text-transparent leading-tight">
                        Cuida tu sonrisa, cuida tu salud
                    </h1>

                    {/* Subheadline */}
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-900 max-w-3xl">
                        Especialistas en odontología con tratamientos avanzados, atención personalizada y un enfoque en tu bienestar integral.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row sm:justify-center sm:space-x-4 gap-4">
                        <Link
                            href="/agendar"
                            className="px-6 py-3 text-white bg-red-600 hover:bg-red-500 rounded-full text-base md:text-lg font-bold shadow-lg transition duration-200"
                        >
                            Reserva tu cita
                        </Link>
                        <Link
                            href="/servicios"
                            className="px-6 py-3 text-red-600 border border-red-600 bg-white hover:bg-red-600 hover:text-white rounded-full text-base md:text-lg font-bold shadow-lg transition duration-200"
                        >
                            Nuestros servicios
                        </Link>
                    </div>

                    {/* Additional Features */}
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-4xl">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center">
                                <span className="text-red-600 text-2xl font-bold">🦷</span>
                            </div>
                            <span className="text-gray-900 text-sm sm:text-base lg:text-lg font-medium">
                                Instalaciones modernas
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center">
                                <span className="text-red-600 text-2xl font-bold">👨‍⚕️</span>
                            </div>
                            <span className="text-gray-900 text-sm sm:text-base lg:text-lg font-medium">
                                Profesionales certificados
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center">
                                <span className="text-red-600 text-2xl font-bold">😁</span>
                            </div>
                            <span className="text-gray-900 text-sm sm:text-base lg:text-lg font-medium">
                                Resultados garantizados
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
