"use client";

import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { useEffect } from "react";

export default function Home() {
  return (
    <div>
      <Header />

      <section id="home">
        <HeroSection />
      </section>

      <section id="pro">
        <ProjectsSection />
      </section>

      <TapeSection />

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </div>
  );
}
