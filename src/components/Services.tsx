"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Autoplay } from "swiper/modules"; // Importamos el módulo Autoplay

const Services: React.FC = () => {
    const services = [
        {
            icon: "🦷",
            title: "Blanqueamiento Dental",
            description: "Devuelve el brillo y la blancura a tu sonrisa con nuestros tratamientos especializados.",
            link: "/servicios/blanqueamiento",
        },
        {
            icon: "🪥",
            title: "Limpieza Dental",
            description: "Elimina la placa y sarro para mantener una salud bucal óptima.",
            link: "/servicios/limpieza",
        },
        {
            icon: "🩺",
            title: "Revisión Dental",
            description: "Consulta integral para diagnosticar y tratar problemas dentales a tiempo.",
            link: "/servicios/revision",
        },
        {
            icon: "🛠️",
            title: "Ortodoncia",
            description: "Alinea tus dientes y mejora tu mordida con nuestros tratamientos de ortodoncia.",
            link: "/servicios/ortodoncia",
        },
        {
            icon: "🧑‍⚕️",
            title: "Implantes Dentales",
            description: "Recupera la funcionalidad y estética con implantes dentales de alta calidad.",
            link: "/servicios/implantes",
        },
        {
            icon: "💎",
            title: "Carillas Dentales",
            description: "Mejora la apariencia de tus dientes con carillas de alta calidad y diseño natural.",
            link: "/servicios/carillas",
        },
    ];

    return (
        <section className="py-20 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold bg-gradient-to-b from-red-700 via-red-600 to-red-400 bg-clip-text text-transparent text-center mb-8">
                    Nuestros Servicios
                </h2>

                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                            <p className="text-gray-800 mt-2 mb-4">{service.description}</p>
                            <a
                                href={service.link}
                                className="px-4 py-2 text-white font-bold bg-red-600 hover:bg-red-500 rounded-full"
                            >
                                Más información
                            </a>
                        </div>
                    ))}
                </div>

                {/* Mobile Slider */}
                <div className="md:hidden">
                    <Swiper
                        modules={[Scrollbar, Autoplay]} // Añadimos el módulo de Autoplay
                        autoplay={{
                            delay: 3000, // Tiempo entre diapositivas (en milisegundos)
                            disableOnInteraction: false, // El autoplay continúa incluso si el usuario interactúa
                        }}
                        scrollbar={{ draggable: true }}
                        spaceBetween={16}
                        slidesPerView={1}
                        className="pb-12"
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                                    <p className="text-gray-800 mt-2 mb-4">{service.description}</p>
                                    <a
                                        href={service.link}
                                        className="px-4 py-2 text-white bg-red-600 hover:bg-red-500 rounded-md"
                                    >
                                        Más información
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Services;
