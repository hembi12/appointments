"use client";

import React, { useState } from "react";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Mensaje enviado. Nos pondremos en contacto contigo pronto.");
    };

    return (
        <section className="py-16 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
                <h2 className="text-5xl font-extrabold text-center mb-10">
                    <span className="bg-gradient-to-b from-red-700 via-red-600 to-red-400 bg-clip-text text-transparent">
                        Ubicación y Contacto
                    </span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left Column: Map and Info */}
                    <div>
                        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg lg:h-[450px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345094286!2d-122.41941548468105!3d37.77492977975906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d2f03d29%3A0x3a2b3f3e6cbd8d!2sSan+Francisco!5e0!3m2!1sen!2sus!4v1234567890123"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                className="w-full h-full"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div className="mt-6 space-y-4">
                            <p className="text-gray-900 font-medium">
                                <strong>Dirección:</strong> Calle Salud, 123, Ciudad Dental, País.
                            </p>
                            <p className="text-gray-900 font-medium">
                                <strong>Teléfono:</strong>{" "}
                                <a
                                    href="tel:+1234567890"
                                    className="text-gray-900 hover:text-red-600"
                                >
                                    +1 234 567 890
                                </a>
                            </p>
                            <p className="text-gray-900 font-medium">
                                <strong>Horarios:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Quick Contact Form */}
                    <div className="bg-white shadow-lg rounded-3xl p-10 space-y-8">
                        <h3 className="text-3xl font-bold text-center mb-4">
                            Contáctanos
                        </h3>
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-8"
                        >
                            {/* Nombre */}
                            <div className="relative">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-semibold text-gray-900"
                                >
                                    Nombre Completo:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="peer w-full mt-2 px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-500 opacity-0 peer-focus:opacity-100 transition-opacity duration-200">
                                    *
                                </span>
                            </div>

                            {/* Correo Electrónico */}
                            <div className="relative">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-gray-900"
                                >
                                    Correo Electrónico:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="peer w-full mt-2 px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-500 opacity-0 peer-focus:opacity-100 transition-opacity duration-200">
                                    *
                                </span>
                            </div>

                            {/* Mensaje */}
                            <div className="relative">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold text-gray-900"
                                >
                                    Mensaje:
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="peer w-full mt-2 px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                                ></textarea>
                                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-500 opacity-0 peer-focus:opacity-100 transition-opacity duration-200">
                                    *
                                </span>
                            </div>

                            {/* Botón de Enviar */}
                            <button
                                type="submit"
                                className="w-full py-3 bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-500"
                            >
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
