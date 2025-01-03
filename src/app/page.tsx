import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutUs from "@/components/AboutUS";
import Testimonials from "@/components/Testimonials";
import Appointments from "@/components/Appointments";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";

export default function Home() {
    return (
        <main>
            <section id="inicio">
                <Hero />
            </section>
            <section id="servicios">
                <Services />
            </section>
            <section id="acerca">
                <AboutUs />
            </section>
            <section id="testimonios">
                <Testimonials />
            </section>
            <section id="citas">
                <Appointments />
            </section>
            <section id="galeria">
                <Gallery />
            </section>
            <section id="blog">
                <Blog />
            </section>
            <section id="contacto">
                <Contact />
            </section>
        </main>
    );
}
