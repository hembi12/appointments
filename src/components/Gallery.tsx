"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Autoplay } from "swiper/modules";

const categories = {
    clínica: [
        { src: "/images/clinic1.webp", alt: "Recepción de la clínica" },
        { src: "/images/clinic2.webp", alt: "Sala de espera moderna" },
        { src: "/images/clinic3.webp", alt: "Consultorio dental equipado" },
    ],
    equipo: [
        { src: "/images/team1.webp", alt: "Equipo dental en acción" },
        { src: "/images/team2.webp", alt: "Dentistas trabajando" },
        { src: "/images/team3.webp", alt: "Equipo celebrando en la clínica" },
    ],
    resultados: [
        { src: "/images/result1.webp", alt: "Antes y después del blanqueamiento" },
        { src: "/images/result2.webp", alt: "Transformación ortodoncia" },
        { src: "/images/result3.webp", alt: "Resultados después de carillas" },
    ],
};

const Gallery: React.FC = () => {
    return (
        <section className="py-20 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold bg-gradient-to-b from-red-700 via-red-600 to-red-400 bg-clip-text text-transparent text-center mb-8">
                    Galería
                </h2>

                {/* Clínica */}
                <div className="mb-12">
                    <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-4">Clínica</h3>
                    <Swiper
                        modules={[Scrollbar, Autoplay]}
                        scrollbar={{ draggable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 16 },
                            1024: { slidesPerView: 3, spaceBetween: 24 },
                        }}
                        className="py-4"
                    >
                        {categories.clínica.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="rounded-xl shadow-lg w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Equipo */}
                <div className="mb-12">
                    <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-4">Equipo</h3>
                    <Swiper
                        modules={[Scrollbar, Autoplay]}
                        scrollbar={{ draggable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 16 },
                            1024: { slidesPerView: 3, spaceBetween: 24 },
                        }}
                        className="py-4"
                    >
                        {categories.equipo.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="rounded-xl shadow-lg w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Resultados */}
                <div>
                    <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-4">Resultados</h3>
                    <Swiper
                        modules={[Scrollbar, Autoplay]}
                        scrollbar={{ draggable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 16 },
                            1024: { slidesPerView: 3, spaceBetween: 24 },
                        }}
                        className="py-4"
                    >
                        {categories.resultados.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="rounded-xl shadow-lg w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
