"use client";

import Link from "next/link";
import { doctor } from "@/data/doctor";
import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <>
      {/* Professional Credentials Floating Top Bar */}
      <div className="fixed top-2 left-1/2 -translate-x-1/2 max-w-5xl w-[92%] z-50 flex items-center justify-between px-6 text-[7px] md:text-[8px] font-mono tracking-widest text-muted/80 uppercase pointer-events-none">
        <div className="flex gap-2">
          <span>ced. prof: {doctor.cedula} (UNAM)</span>
          <span>|</span>
          <span>ced. esp: {doctor.cedulaEspecialidad} (INPer)</span>
        </div>
        <div>
          <span>COFEPRIS: {doctor.cofepris}</span>
        </div>
      </div>

      {/* Floating Pill Navigation Bar (Desktop & Mobile) - shifted to top-8 */}
      <header className="fixed top-8 left-1/2 -translate-x-1/2 max-w-5xl w-[92%] z-50 glass-pill-nav rounded-full px-6 lg:px-8 py-3.5 shadow-lg flex items-center justify-between transition-all duration-300">
        
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center select-none">
          <img 
            src="/images/logo-horizontal.png" 
            alt={`Logo ${doctor.title} ${doctor.name}`}
            className="h-16 w-auto object-contain hidden sm:block hover:opacity-95 transition"
          />
          <img 
            src="/images/logo-vertical.png" 
            alt={`Logo Icon ${doctor.title} ${doctor.name}`}
            className="h-12 w-auto object-contain sm:hidden hover:opacity-95 transition"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold text-[11px] uppercase tracking-widest text-foreground/80">
          <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
          <Link href="/enfermedades" className="hover:text-primary transition-colors">Enfermedades</Link>
          <Link href="/servicios" className="hover:text-primary transition-colors">Servicios</Link>
          <Link href="/sintomas" className="hover:text-primary transition-colors">Síntomas</Link>
          <Link href="/contacto" className="hover:text-primary transition-colors">Contacto</Link>
        </nav>

        {/* Right Action CTA */}
        <div className="flex items-center gap-4">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="hidden lg:flex items-center gap-2 bg-primary text-white text-[10px] uppercase font-bold tracking-wider px-5 py-2.5 rounded-full hover:opacity-95 transition shadow-md shadow-primary/10"
          >
            <FaWhatsapp size={14} /> Agendar Cita
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            aria-label="Menu" 
            className="md:hidden text-primary p-2 border border-primary/10 rounded-full hover:bg-primary/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={14} /> : <FaBars size={14} />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white/95 backdrop-blur-lg border border-border shadow-2xl rounded-3xl p-6 flex flex-col gap-3 font-semibold text-xs uppercase tracking-widest text-foreground/80 animate-bloom z-50">
            <Link href="/" onClick={() => setIsOpen(false)} className="py-2.5 border-b border-border/40">Inicio</Link>
            <Link href="/enfermedades" onClick={() => setIsOpen(false)} className="py-2.5 border-b border-border/40">Enfermedades</Link>
            <Link href="/servicios" onClick={() => setIsOpen(false)} className="py-2.5 border-b border-border/40">Servicios</Link>
            <Link href="/sintomas" onClick={() => setIsOpen(false)} className="py-2.5 border-b border-border/40">Síntomas</Link>
            <Link href="/contacto" onClick={() => setIsOpen(false)} className="py-2.5 border-b border-border/40">Contacto</Link>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="mt-2 flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-full text-[10px] font-bold tracking-widest"
            >
              <FaWhatsapp size={16} /> Agendar por WhatsApp
            </a>
            
            {/* Display Credentials in Mobile Drawer too for completeness */}
            <div className="mt-4 pt-4 border-t border-border/60 text-[9px] font-mono text-muted space-y-1">
              <p>ced. prof: {doctor.cedula} (UNAM)</p>
              <p>ced. esp: {doctor.cedulaEspecialidad} (INPer)</p>
              <p>COFEPRIS: {doctor.cofepris}</p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
