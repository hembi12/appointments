"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Autoplay } from "swiper/modules";

const articles = [
    {
        title: "5 Consejos para Mantener tu Sonrisa Brillante",
        image: "/images/smile-tips.webp",
        link: "/blog/5-consejos-para-mantener-tu-sonrisa-brillante",
        excerpt: "Descubre los mejores hábitos para cuidar tu sonrisa y mantenerla saludable todos los días.",
    },
    {
        title: "¿Por Qué es Importante una Limpieza Dental Regular?",
        image: "/images/dental-cleaning.webp",
        link: "/blog/importancia-limpieza-dental-regular",
        excerpt: "La limpieza dental no solo mejora tu salud bucal, sino que también previene enfermedades graves.",
    },
    {
        title: "Los Beneficios de los Implantes Dentales",
        image: "/images/dental-implants.webp",
        link: "/blog/beneficios-de-implantes-dentales",
        excerpt: "Recupera tu sonrisa con implantes dentales y mejora tu calidad de vida.",
    },
];

const Blog: React.FC = () => {
    return (
        <section className="py-20 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold bg-gradient-to-b from-red-700 via-red-600 to-red-400 bg-clip-text text-transparent text-center mb-8">
                    Consejos Dentales
                </h2>

                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
                        >
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-lg font-bold text-gray-800 mb-2">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 flex-1">{article.excerpt}</p>
                                <a
                                    href={article.link}
                                    className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
                                >
                                    Leer más →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Slider */}
                <div className="md:hidden">
                    <Swiper
                        modules={[Scrollbar, Autoplay]}
                        scrollbar={{ draggable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        spaceBetween={16}
                        slidesPerView={1}
                        className="py-4"
                    >
                        {articles.map((article, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-600 flex-1">{article.excerpt}</p>
                                        <a
                                            href={article.link}
                                            className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            Leer más →
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Blog;
