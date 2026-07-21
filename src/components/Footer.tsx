import Link from "next/link";
import { doctor } from "@/data/doctor";
import { diseases } from "@/data/diseases";
import { services } from "@/data/services";
import { symptoms } from "@/data/symptoms";
import { FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <footer className="bg-warm-light text-foreground/70 pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Contacto y Métodos de pago */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <img 
                src="/images/logo-horizontal.png" 
                alt={`Logo ${doctor.title} ${doctor.name}`}
                className="h-20 w-auto object-contain hover:opacity-95 transition"
              />
            </Link>
            <div className="flex flex-col gap-4 text-xs font-light">
              <a href={whatsappUrl} className="flex items-center gap-3 hover:text-primary transition duration-300">
                <FaWhatsapp className="text-primary" /> {doctor.whatsapp}
              </a>
              <a href={`tel:${doctor.phone}`} className="flex items-center gap-3 hover:text-primary transition duration-300">
                <FaPhone className="text-primary" /> {doctor.phone}
              </a>
              <p className="flex items-start gap-3 leading-relaxed">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" /> 
                <span>{doctor.address}, {doctor.city}, {doctor.state}</span>
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-primary text-[10px] font-bold uppercase tracking-widest">Métodos de Pago</h4>
              <div className="flex flex-wrap gap-2">
                {doctor.paymentMethods.map(method => (
                  <span key={method} className="bg-white border border-border text-[9px] uppercase tracking-wider px-2.5 py-1.5 text-foreground/80 font-medium">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Padecimientos */}
          <div>
            <h3 className="text-primary text-[10px] font-bold uppercase tracking-widest mb-6">Padecimientos</h3>
            <ul className="flex flex-col gap-3.5 text-xs font-light">
              {diseases.map(d => (
                <li key={d.id}>
                  <Link href={`/enfermedades/${d.slug}`} className="hover:text-primary transition duration-300">{d.name}</Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/enfermedades" className="text-primary hover:opacity-85 font-semibold text-[10px] uppercase tracking-wider">Ver todos &rarr;</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Servicios */}
          <div>
            <h3 className="text-primary text-[10px] font-bold uppercase tracking-widest mb-6">Servicios</h3>
            <ul className="flex flex-col gap-3.5 text-xs font-light">
              {services.map(s => (
                <li key={s.id}>
                  <Link href={`/servicios/${s.slug}`} className="hover:text-primary transition duration-300">{s.name}</Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/servicios" className="text-primary hover:opacity-85 font-semibold text-[10px] uppercase tracking-wider">Ver todos &rarr;</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Síntomas y Legales */}
          <div>
            <h3 className="text-primary text-[10px] font-bold uppercase tracking-widest mb-6">Síntomas</h3>
            <ul className="flex flex-col gap-3.5 text-xs font-light mb-8">
              {symptoms.slice(0, 5).map(sym => (
                <li key={sym.id}>
                  <Link href={`/sintomas/${sym.slug}`} className="hover:text-primary transition duration-300">{sym.name}</Link>
                </li>
              ))}
            </ul>
            <h3 className="text-primary text-[10px] font-bold uppercase tracking-widest mb-4">Legal</h3>
            <ul className="flex flex-col gap-3.5 text-xs font-light">
              <li>
                <Link href="/aviso-de-privacidad" className="hover:text-primary transition duration-300">Aviso de Privacidad</Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-8 text-center text-[10px] font-light text-muted space-y-2 font-mono">
          <p>
            Cédula Profesional: {doctor.cedula} | Cédula Especialidad: {doctor.cedulaEspecialidad}
            {doctor.cedulaSubespecialidad && ` | Cédula Subespecialidad: ${doctor.cedulaSubespecialidad}`} | COFEPRIS: {doctor.cofepris}
          </p>
          <p>© {new Date().getFullYear()} Todos los derechos reservados. Desarrollado bajo Arquitectura AISO v2.0.</p>
        </div>
      </div>
    </footer>
  );
}
