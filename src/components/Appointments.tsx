"use client";

import React, { useState } from "react";

const Appointments: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        service: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Solicitud enviada. Nos pondremos en contacto contigo pronto.");
    };

    return (
        <section className="py-16 bg-[#F8F9FA]">
            <div className="max-w-4xl mx-auto px-6 sm:px-10">
                <h2 className="text-5xl font-extrabold text-center mb-10">
                    <span className="bg-gradient-to-b from-red-700 via-red-600 to-red-400 bg-clip-text text-transparent">
                        Reserva tu Cita
                    </span>
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-lg rounded-3xl p-10 space-y-8"
                >
                    {/* Name */}
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

                    {/* Email */}
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

                    {/* Phone */}
                    <div className="relative">
                        <label
                            htmlFor="phone"
                            className="block text-sm font-semibold text-gray-900"
                        >
                            Teléfono:
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="peer w-full mt-2 px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-500 opacity-0 peer-focus:opacity-100 transition-opacity duration-200">
                            *
                        </span>
                    </div>

                    {/* Date */}
                    <div className="relative">
                        <label
                            htmlFor="date"
                            className="block text-sm font-semibold text-gray-900"
                        >
                            Fecha Deseada:
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="peer w-full mt-2 px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-500 opacity-0 peer-focus:opacity-100 transition-opacity duration-200">
                            *
                        </span>
                    </div>

                    {/* Service */}
                    <div className="relative">
                        <label
                            htmlFor="service"
                            className="block text-sm font-semibold text-gray-900"
                        >
                            Tipo de Servicio:
                        </label>
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="peer w-full mt-2 px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            <option value="">Selecciona un servicio</option>
                            <option value="Blanqueamiento Dental">Blanqueamiento Dental</option>
                            <option value="Limpieza Dental">Limpieza Dental</option>
                            <option value="Revisión Dental">Revisión Dental</option>
                            <option value="Ortodoncia">Ortodoncia</option>
                            <option value="Implantes Dentales">Implantes Dentales</option>
                            <option value="Otro Servicio">Otro Servicio</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-500"
                    >
                        Enviar Solicitud
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Appointments;
