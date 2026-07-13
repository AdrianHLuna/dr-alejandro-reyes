"use client";

import { doctor } from "@/data/doctor";
import { services } from "@/data/services";
import { symptoms } from "@/data/symptoms";
import { diseases } from "@/data/diseases";
import { FaCalendarCheck, FaWhatsapp, FaUniversity, FaCertificate, FaNotesMedical, FaMoneyBillWave, FaExchangeAlt, FaCreditCard, FaShieldAlt, FaCheckCircle, FaStar } from "react-icons/fa";
import StructuredData from "@/components/StructuredData";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ClinicalImage from "@/components/ClinicalImage";

export default function Home() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  // Refs for Parallax background elements
  const bioRef = useRef(null);
  const insuranceRef = useRef(null);
  const diseasesRef = useRef(null);

  // Parallax calculations for Bio section
  const { scrollYProgress: bioScroll } = useScroll({
    target: bioRef,
    offset: ["start end", "end start"]
  });
  const bioY = useTransform(bioScroll, [0, 1], [-80, 80]);
  const bioRotate = useTransform(bioScroll, [0, 1], [0, 140]);

  // Parallax calculations for Insurance section
  const { scrollYProgress: insuranceScroll } = useScroll({
    target: insuranceRef,
    offset: ["start end", "end start"]
  });
  const insuranceY = useTransform(insuranceScroll, [0, 1], [-70, 70]);
  const insuranceRotate = useTransform(insuranceScroll, [0, 1], [360, 0]);

  // Parallax calculations for Diseases section
  const { scrollYProgress: diseasesScroll } = useScroll({
    target: diseasesRef,
    offset: ["start end", "end start"]
  });
  const diseasesY = useTransform(diseasesScroll, [0, 1], [-40, 40]);

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: `${doctor.title} ${doctor.name}`,
    description: doctor.bio,
    medicalSpecialty: doctor.specialty,
    telephone: doctor.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address,
      addressLocality: doctor.city,
      addressRegion: doctor.state,
    },
    priceRange: `$${doctor.consultationPrice} MXN`,
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  } as const;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  } as const;

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 relative overflow-hidden">
      <StructuredData data={homeSchema} />

      {/* 1. HERO SECTION - Elegant Typographic Centered Layout with Masked Image */}
      <section className="relative min-h-[calc(100vh-112px)] flex items-center pt-8 pb-20 overflow-hidden bg-background">
        {/* Soft background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#4c243c_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.03]" />
        
        {/* Background Decorative Blurs */}
        <div className="absolute top-10 left-[-10%] w-[35rem] h-[35rem] rounded-full bg-accent/5 blur-3xl animate-pulse-delicate pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-primary/3 blur-3xl animate-pulse-delicate pointer-events-none" />
        
        {/* Floating Line SVG 1 (Top-Left) */}
        <div className="absolute top-[10%] left-[5%] opacity-[0.12] animate-spin-slow pointer-events-none">
          <svg width="180" height="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 5 C30 20 20 40 50 95 C70 80 80 60 50 5 Z" stroke="#4c243c" strokeWidth="0.75" />
            <circle cx="50" cy="50" r="10" stroke="#c48b9f" strokeWidth="1" />
          </svg>
        </div>

        {/* Floating Line SVG 2 (Right) */}
        <div className="absolute top-[20%] right-[10%] opacity-15 animate-spin-slow pointer-events-none">
          <svg width="250" height="250" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="#4c243c" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="30" stroke="#4c243c" strokeWidth="0.5" strokeDasharray="3 3" />
            <path d="M50 5 L50 95" stroke="#c48b9f" strokeWidth="0.5" />
            <path d="M5 50 L95 50" stroke="#c48b9f" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left: Magazine Copy */}
            <motion.div 
              className="flex-1 text-center lg:text-left space-y-8"
              initial="hidden" 
              animate="visible" 
              variants={fadeUp}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-warm-light border border-border text-[10px] font-bold tracking-widest text-primary uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {doctor.specialistTitle}
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-serif-elegant font-bold text-foreground leading-[1.15] tracking-tight">
                Cuidado ginecológico <br/>
                <span className="text-primary italic">con calidez y rigor científico.</span>
              </h1>
              
              <p className="text-base lg:text-lg text-muted font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                {doctor.philosophy} Alta especialización en fertilidad, reproducción asistida, control prenatal y colposcopia en Ixtlahuaca de Rayón.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-3 hover:opacity-95 transition-all duration-300 shadow-lg shadow-primary/20"
                >
                  <FaCalendarCheck size={14} className="group-hover:translate-x-0.5 transition-transform" /> Agendar Consulta Especializada
                </a>
                <Link 
                  href="/servicios" 
                  className="px-8 py-4 rounded-full bg-white border border-border text-foreground font-semibold text-xs uppercase tracking-wider flex items-center justify-center hover:bg-warm-light transition-all duration-300"
                >
                  Ver Tratamientos
                </Link>
              </div>
            </motion.div>

            {/* Right: Premium Circular Masked Image Grid */}
            <motion.div 
              className="flex-1 w-full flex items-center justify-center relative"
              initial={{ opacity: 0, scale: 0.96 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {/* Organic circular frames with slow float */}
              <div className="w-[300px] h-[300px] lg:w-[420px] lg:h-[420px] rounded-full border border-primary/10 flex items-center justify-center relative animate-float-slow">
                <div className="absolute inset-4 rounded-full border border-accent/20 animate-pulse-delicate" />
                <div className="absolute inset-8 rounded-full bg-warm-light/80 backdrop-blur-md flex items-center justify-center overflow-hidden border border-border">
                  <div className="absolute inset-0 bg-primary/5 flex flex-col items-center justify-center p-8 text-center select-none">
                    <div className="w-16 h-16 rounded-full bg-white/40 flex items-center justify-center border border-accent/10 mb-4 animate-float-slow">
                      <FaStar className="text-accent text-2xl" />
                    </div>
                    <p className="font-serif-elegant text-primary text-2xl font-bold leading-tight">
                      Dr. Alejandro Reyes
                    </p>
                    <p className="text-[9px] text-muted font-bold uppercase tracking-widest mt-2">
                      UNAM Subespecialista
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating clinic badge */}
              <motion.div 
                className="absolute bottom-4 -left-4 bg-white/95 backdrop-blur-md py-4 px-5 rounded-[2rem] border border-border shadow-xl flex items-center gap-3 hover:scale-105 transition-all duration-300"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <FaStar size={16} />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-bold text-muted uppercase tracking-widest leading-none">Certificada por el</p>
                  <p className="font-serif-elegant font-bold text-primary text-sm mt-0.5">CMGO</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. BIOGRAPHY & CREDENTIALS (With Parallax Background Vector) */}
      <section ref={bioRef} className="py-24 border-t border-border bg-warm-light/45 relative overflow-hidden">
        
        {/* Parallax Background Shape */}
        <motion.div 
          style={{ y: bioY, rotate: bioRotate }}
          className="absolute right-[-4%] top-[10%] opacity-[0.14] pointer-events-none hidden md:block"
        >
          <svg width="280" height="280" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="#4c243c" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="32" stroke="#c48b9f" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M50 5 L50 95" stroke="#4c243c" strokeWidth="0.5" />
            <path d="M5 50 L95 50" stroke="#4c243c" strokeWidth="0.5" />
          </svg>
        </motion.div>

        {/* Floating line pattern left */}
        <div className="absolute left-[3%] bottom-[10%] opacity-10 animate-float-slow pointer-events-none">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 50 Q 30 10, 50 50 T 90 50" stroke="#4c243c" strokeWidth="0.75" />
            <circle cx="50" cy="50" r="6" fill="#c48b9f" />
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            className="flex flex-col lg:flex-row gap-16 max-w-5xl mx-auto"
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={staggerContainer}
          >
            {/* Left Col: Photo Frame with Organic Layout */}
            <motion.div className="lg:w-2/5 space-y-8" variants={fadeUp}>
              <div className="aspect-[4/5] bg-white border border-border p-5 rounded-[3rem_1rem_3rem_1rem] shadow-sm flex items-center justify-center relative overflow-hidden group hover:rounded-[1rem_3rem_1rem_3rem] hover:border-accent/35 transition-all duration-700">
                <div className="absolute inset-0 bg-warm-light/40 flex flex-col items-center justify-center p-8 text-center border border-border/50 rounded-[2.5rem_0.8rem_2.5rem_0.8rem] group-hover:rounded-[0.8rem_2.5rem_0.8rem_2.5rem] transition-all duration-700">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 animate-float-slow">
                    <FaNotesMedical size={28} />
                  </div>
                  <h3 className="font-serif-elegant font-bold text-2xl text-primary mb-2">Dr. Alejandro Reyes</h3>
                  <p className="text-[10px] uppercase tracking-widest text-accent font-semibold mb-6">Ginecólogo y Obstetra</p>
                  
                  <div className="w-full border-t border-border/60 pt-6 space-y-4 text-left text-xs font-light text-muted">
                    <p className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Egresado de la UNAM</p>
                    <p className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Subespecialidad en la UNAM</p>
                    <p className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Consultorio Ixtlahuaca</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Col: Bio Content */}
            <div className="lg:w-3/5 flex flex-col justify-center space-y-8">
              <motion.div variants={fadeUp} className="space-y-3">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Sobre la Especialista</span>
                <h2 className="text-3xl lg:text-4xl font-serif-elegant font-bold text-foreground">Dr. Jose Alejandro Reyes Torres</h2>
              </motion.div>
              
              <motion.p variants={fadeUp} className="text-lg text-primary/80 font-serif-elegant leading-relaxed italic border-l-2 border-accent pl-6">
                "{doctor.bio}"
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <motion.div variants={fadeUp} className="bg-white p-6 border border-border rounded-[2rem] hover:border-accent/40 hover:shadow-lg transition-all duration-300">
                  <FaUniversity className="text-accent text-3xl mb-4" />
                  <h4 className="font-serif-elegant font-bold text-primary text-base mb-2">Educación Médica</h4>
                  <p className="text-xs font-light text-muted">Estudios profesionales en la UNAM, especialización en la UAEM y subespecialización de alta exigencia clínica en la UNAM.</p>
                </motion.div>
                
                <motion.div variants={fadeUp} className="bg-white p-6 border border-border rounded-[2rem] hover:border-accent/40 hover:shadow-lg transition-all duration-300">
                  <FaCertificate className="text-accent text-3xl mb-4" />
                  <h4 className="font-serif-elegant font-bold text-primary text-base mb-2">Asociaciones</h4>
                  <p className="text-xs font-light text-muted">Miembro activo del Consejo Mexicano de Ginecología y Obstetricia y de la Asociación Mexicana de Medicina de la Reproducción.</p>
                </motion.div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 3. DISEASES SECTION (Padecimientos Tratados with organic card shapes & floating shapes) */}
      <section ref={diseasesRef} className="py-24 border-t border-border bg-background relative overflow-hidden">
        
        {/* Parallax Background Shape */}
        <motion.div 
          style={{ y: diseasesY }}
          className="absolute left-[-3%] top-[30%] opacity-10 pointer-events-none hidden md:block"
        >
          <svg width="240" height="240" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 5 L50 95 M5 50 L95 50" stroke="#4c243c" strokeWidth="0.5" />
            <path d="M15 15 L85 85 M15 85 L85 15" stroke="#c48b9f" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
        </motion.div>

        {/* Floating line right */}
        <div className="absolute right-[2%] bottom-[15%] opacity-15 animate-spin-slow pointer-events-none">
          <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="#c48b9f" strokeWidth="0.75" />
            <path d="M50 10 C30 30 30 70 50 90 C70 70 70 30 50 10 Z" stroke="#4c243c" strokeWidth="1" />
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div className="text-center mb-16 space-y-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Tratamiento Clínico</span>
            <h2 className="text-3xl lg:text-4xl font-serif-elegant font-bold text-foreground">Padecimientos Ginecológicos Frecuentes</h2>
            <p className="text-sm text-muted max-w-xl mx-auto font-light">Diagnóstico certero y tratamientos conservadores y reproductivos de alta precisión.</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          >
            {diseases.slice(0, 5).map((disease, idx) => {
              const cardShape = idx % 2 === 0
                ? "organic-card"
                : "border border-border bg-white rounded-[2rem_2rem_1rem_1rem] hover:rounded-[1rem_1rem_2rem_2rem] hover:shadow-xl hover:border-accent/30 transition-all duration-500";

              return (
                <motion.div key={disease.id} variants={fadeUp} className="h-full">
                  <Link 
                    href={`/enfermedades/${disease.slug}`} 
                    className={`flex flex-col h-full group p-8 justify-between ${cardShape}`}
                  >
                    <div className="space-y-4">
                      <div className="w-full aspect-[16/10] relative rounded-[1.5rem] overflow-hidden bg-primary/5 border border-border/50">
                        <ClinicalImage 
                          src={disease.image} 
                          alt={disease.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 mt-1 bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 rounded-full flex-shrink-0">
                          <FaNotesMedical size={12} />
                        </div>
                        <h3 className="text-xl font-serif-elegant font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">{disease.name}</h3>
                      </div>
                      <p className="text-muted text-sm font-light leading-relaxed line-clamp-3">{disease.description}</p>
                    </div>
                    <div className="pt-6 border-t border-border/60 mt-6 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-accent group-hover:text-primary transition-colors">
                      <span>Protocolo Médico</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 4. SERVICES SECTION (Estudios de Diagnóstico with staggered heights and rotating shape) */}
      <section className="py-24 border-t border-border bg-warm-light/45 relative overflow-hidden">
        
        {/* Floating background shape left */}
        <div className="absolute left-[2%] top-[10%] opacity-15 animate-spin-slow pointer-events-none">
          <svg width="180" height="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="#4c243c" strokeWidth="0.5" />
            <path d="M50 5 A45 45 0 0 1 95 50" stroke="#c48b9f" strokeWidth="1" />
            <path d="M50 95 A45 45 0 0 1 5 50" stroke="#c48b9f" strokeWidth="1" />
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div className="text-center mb-16 space-y-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Servicios Médicos</span>
            <h2 className="text-3xl lg:text-4xl font-serif-elegant font-bold text-foreground">Servicios y Estudios de Ginecología</h2>
            <p className="text-sm text-muted max-w-xl mx-auto font-light">Tecnología diagnóstica reproductiva y técnicas de microcirugía mínimamente invasivas.</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          >
            {services.slice(0, 5).map((service, idx) => {
              const staggerClass = idx === 1 ? "md:translate-y-6" : ""; // Height stagger to break grid symmetry
              const cardShape = idx % 2 === 0
                ? "border border-border bg-white rounded-[1rem_3rem_1rem_3rem] hover:rounded-[3rem_1rem_3rem_1rem] hover:shadow-xl hover:border-accent/30 transition-all duration-500"
                : "organic-card";

              return (
                <motion.div key={service.id} variants={fadeUp} className={`h-full ${staggerClass}`}>
                  <Link 
                    href={`/servicios/${service.slug}`} 
                    className={`flex flex-col justify-between h-full group p-8 ${cardShape}`}
                  >
                    <div className="space-y-4">
                      <div className="w-full aspect-[16/10] relative rounded-[1.5rem] overflow-hidden bg-primary/5 border border-border/50">
                        <ClinicalImage 
                          src={service.image} 
                          alt={service.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-bold text-primary uppercase tracking-widest border border-primary/20 px-2.5 py-0.5 rounded-full">{service.type}</span>
                      </div>
                      <h3 className="text-xl font-serif-elegant font-bold text-foreground group-hover:text-primary transition-colors duration-300">{service.name}</h3>
                      <p className="text-muted text-sm font-light leading-relaxed line-clamp-3">{service.description}</p>
                    </div>
                    <div className="pt-6 border-t border-border/60 mt-6 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-accent group-hover:text-primary transition-colors">
                      <span>Ver Detalles del Servicio</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 5. SYMPTOMS SECTION (Síntomas de Alerta with rotating floral) */}
      <section className="py-24 border-t border-border bg-background relative overflow-hidden">
        
        {/* Floating background spiral right */}
        <div className="absolute right-[5%] top-[10%] opacity-[0.12] animate-spin-slow pointer-events-none">
          <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="#4c243c" strokeWidth="0.5" />
            <path d="M50 5 C40 25 25 40 5 50 C25 60 40 75 50 95 C60 75 75 60 95 50 C75 40 60 25 50 5 Z" stroke="#c48b9f" strokeWidth="0.75" />
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div className="text-center mb-16 space-y-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Guía Preventiva</span>
            <h2 className="text-3xl lg:text-4xl font-serif-elegant font-bold text-foreground">Síntomas y Señales de Alerta</h2>
            <p className="text-sm text-muted max-w-xl mx-auto font-light">Identificar las pautas y factores críticos requiere una valoración de especialidad oportuna.</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          >
            {symptoms.slice(0, 5).map((sym, idx) => {
              const cardShape = idx % 2 === 0
                ? "organic-card"
                : "border border-border bg-white rounded-[1rem_1rem_3rem_3rem] hover:rounded-[3rem_3rem_1rem_1rem] hover:shadow-xl hover:border-accent/30 transition-all duration-500";

              return (
                <motion.div key={sym.id} variants={fadeUp} className="h-full">
                  <Link 
                    href={`/sintomas/${sym.slug}`} 
                    className={`flex flex-col justify-between h-full p-8 group ${cardShape}`}
                  >
                    <div className="space-y-4">
                      <div className="w-full aspect-[16/10] relative rounded-[1.5rem] overflow-hidden bg-primary/5 border border-border/50">
                        <ClinicalImage 
                          src={sym.image} 
                          alt={sym.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <span className="text-[9px] font-mono text-accent font-bold uppercase tracking-widest block">Síntoma Crítico</span>
                      <h3 className="text-lg font-serif-elegant font-bold text-foreground group-hover:text-primary transition-colors duration-300">{sym.name}</h3>
                      <p className="text-muted text-xs font-light leading-relaxed line-clamp-3">{sym.description}</p>
                    </div>
                    <div className="pt-4 border-t border-border/40 mt-6 text-[10px] font-bold uppercase tracking-widest text-muted group-hover:text-accent transition-colors flex items-center justify-between">
                      <span>Ver Criterios de Alarma</span>
                      <span>&rarr;</span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 6. INVERSION Y SEGUROS (Unique layouts, shapes & Parallax background) */}
      <section ref={insuranceRef} className="py-24 border-t border-border bg-warm-light/45 relative overflow-hidden">
        
        {/* Parallax Background Shape */}
        <motion.div 
          style={{ y: insuranceY, rotate: insuranceRotate }}
          className="absolute left-[-5%] top-[10%] opacity-[0.14] pointer-events-none hidden md:block"
        >
          <svg width="320" height="320" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 50 C 30 15, 70 15, 90 50 C 70 85, 30 85, 10 50 Z" stroke="#4c243c" strokeWidth="0.5" />
            <path d="M50 10 C 20 30, 20 70, 50 90 C 80 70, 80 30, 50 10 Z" stroke="#c48b9f" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="10" stroke="#4c243c" strokeWidth="0.5" />
          </svg>
        </motion.div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div className="text-center mb-16 space-y-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Costos y Seguros</span>
            <h2 className="text-3xl lg:text-4xl font-serif-elegant font-bold text-foreground">Inversión en tu Salud Íntima y Reproductiva</h2>
            <p className="text-sm text-muted max-w-xl mx-auto font-light">Transparencia en honorarios, facilidades de pago y esquemas con aseguradoras.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          >
            {/* Left Block: Consulta & Formas de Pago */}
            <motion.div variants={fadeUp} className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Cost Box */}
              <div className="bg-white border border-border p-8 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-accent/30 hover:shadow-lg transition-all rounded-[2rem]">
                <div>
                  <h3 className="font-serif-elegant font-bold text-xl text-foreground">Consulta de Ginecología</h3>
                  <p className="text-xs font-light text-muted mt-1">Valoración obstétrica, ginecológica y reproductiva completa.</p>
                </div>
                <div className="flex items-baseline gap-2 bg-warm-light border border-border px-6 py-4 rounded-full">
                  <span className="text-3xl font-serif-elegant font-bold text-primary">${doctor.consultationPrice}</span>
                  <span className="text-muted font-bold text-[9px] uppercase tracking-widest">MXN</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-white border border-border p-8 space-y-6 rounded-[2rem] hover:border-accent/20 transition-all">
                <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest">Métodos de Pago Autorizados</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-warm-light/40 p-4 text-center border border-border rounded-[1.5rem] hover:border-accent/25 hover:bg-white transition-all duration-300">
                    <FaMoneyBillWave className="text-primary text-2xl mx-auto mb-2" />
                    <span className="text-xs font-bold text-foreground">Efectivo</span>
                  </div>
                  <div className="bg-warm-light/40 p-4 text-center border border-border rounded-[1.5rem] hover:border-accent/25 hover:bg-white transition-all duration-300">
                    <FaExchangeAlt className="text-primary text-2xl mx-auto mb-2" />
                    <span className="text-xs font-bold text-foreground">Transferencia</span>
                  </div>
                  <div className="bg-warm-light/40 p-4 text-center border border-border rounded-[1.5rem] hover:border-accent/25 hover:bg-white transition-all duration-300">
                    <FaCreditCard className="text-primary text-2xl mx-auto mb-2" />
                    <span className="text-xs font-bold text-foreground">Tarjetas</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Block: Aseguradoras with organic design shape */}
            <motion.div variants={fadeUp} className="lg:col-span-5 bg-primary text-primary-foreground p-8 flex flex-col justify-between border border-primary relative overflow-hidden group rounded-[3rem_1rem_3rem_1rem] hover:rounded-[1rem_3rem_1rem_3rem] hover:shadow-xl transition-all duration-700">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 border border-white/15 text-[9px] font-bold uppercase tracking-widest rounded-full">
                  <FaShieldAlt className="text-accent" />
                  <span>Seguro de Gastos Médicos</span>
                </div>
                <h3 className="text-2xl font-serif-elegant font-bold">Convenios y Aseguradoras</h3>
                <p className="text-xs font-light text-primary-foreground/75 leading-relaxed">
                  Colaboramos con las principales instituciones aseguradoras del país para facilitar el reembolso de tus tratamientos y cirugías ginecológicas.
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs font-semibold pt-2">
                  <div className="flex items-center gap-2"><FaCheckCircle className="text-accent flex-shrink-0" /> GNP Seguros</div>
                  <div className="flex items-center gap-2"><FaCheckCircle className="text-accent flex-shrink-0" /> AXA Seguros</div>
                  <div className="flex items-center gap-2"><FaCheckCircle className="text-accent flex-shrink-0" /> MetLife</div>
                  <div className="flex items-center gap-2"><FaCheckCircle className="text-accent flex-shrink-0" /> Mapfre</div>
                </div>
              </div>

              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="relative z-10 w-full bg-accent text-accent-foreground text-center py-4 text-xs font-bold uppercase tracking-widest mt-8 hover:opacity-90 transition rounded-full shadow-lg shadow-accent/15">
                Consultar Cobertura
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
