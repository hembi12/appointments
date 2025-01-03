"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Autoplay } from "swiper/modules"; // Importamos los módulos Scrollbar y Autoplay

const testimonials = [
    {
        name: "Ana G.",
        opinion: "El mejor dentista al que he ido. Siempre me siento bienvenida y cuidada.",
        photo: "/images/testimonial2.webp",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        platform: "Google",
        date: "15 de diciembre de 2024",
    },
    {
        name: "Carlos R.",
        opinion: "Un servicio excepcional y resultados impresionantes. Mi sonrisa nunca ha estado mejor.",
        photo: "/images/testimonial1.webp",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        platform: "Facebook",
        date: "20 de noviembre de 2024",
    },
    {
        name: "María P.",
        opinion: "El equipo es muy profesional y amable. Recomiendo esta clínica a todos.",
        photo: "/images/testimonial3.webp",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        platform: "Google",
        date: "10 de octubre de 2024",
    },
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold bg-gradient-to-b from-red-700 via-red-600 to-red-400 bg-clip-text text-transparent text-center mb-8">
                    Lo que dicen nuestros pacientes
                </h2>

                {/* Grid para Desktop */}
                <div className="hidden md:grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
                        >
                            {testimonial.photo && (
                                <img
                                    src={testimonial.photo}
                                    alt={testimonial.name}
                                    className="w-24 h-24 rounded-full shadow-md mb-4"
                                />
                            )}
                            <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                            <p className="text-gray-800 mt-2 mb-4 italic">{testimonial.opinion}</p>
                            <p className="text-blue-600 font-semibold">{testimonial.rating}</p>
                            <p className="text-gray-800 text-sm mt-2">Reseña en {testimonial.platform}</p>
                            <p className="text-gray-600 text-xs mt-1">Fecha: {testimonial.date}</p>
                        </div>
                    ))}
                </div>

                {/* Slider para Mobile */}
                <div className="md:hidden">
                    <Swiper
                        modules={[Scrollbar, Autoplay]} // Usamos Scrollbar y Autoplay
                        autoplay={{
                            delay: 3000, // Avanza cada 3 segundos
                            disableOnInteraction: false, // Continúa el autoplay tras la interacción
                        }}
                        scrollbar={{ draggable: true }} // Scrollbar activado
                        spaceBetween={16}
                        slidesPerView={1}
                        className="py-4"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                                    {testimonial.photo && (
                                        <img
                                            src={testimonial.photo}
                                            alt={testimonial.name}
                                            className="w-24 h-24 rounded-full shadow-md mb-4"
                                        />
                                    )}
                                    <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                                    <p className="text-gray-800 mt-2 mb-4 italic">{testimonial.opinion}</p>
                                    <p className="text-blue-600 font-semibold">{testimonial.rating}</p>
                                    <p className="text-gray-800 text-sm mt-2">Reseña en {testimonial.platform}</p>
                                    <p className="text-gray-600 text-xs mt-1">Fecha: {testimonial.date}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
