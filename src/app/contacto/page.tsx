import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export const metadata = {
  title: `Contacto y Ubicación | ${doctor.title} ${doctor.name}`,
  description: `Agenda tu cita en el consultorio del Dr. Jose Alejandro Reyes Torres en Ixtlahuaca de Rayón, Estado de México.`,
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />
        
        <FadeUp className="text-center mb-16 mt-8">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">Agendar Cita</span>
          <h1 className="text-4xl lg:text-5xl font-serif-elegant font-bold text-primary mb-4">Contacto y Ubicación</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto font-light">Estamos listos para recibirte en un espacio seguro, privado y de alta especialidad médica en Ixtlahuaca de Rayón, Estado de México.</p>
        </FadeUp>

        <FadeUp delay={0.2} className="bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col lg:flex-row border border-border max-w-6xl mx-auto hover:shadow-primary/5 transition-all duration-500">
          {/* Mapa Ixtlahuaca Iframe */}
          <div className="lg:w-1/2 min-h-[500px] bg-slate-200 relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none z-10" />
            <iframe 
              src="https://maps.google.com/maps?q=Av.%20Gustavo%20Baz%20400,%20Centro,%20Ixtlahuaca%20de%20Ray%C3%B3n,%20M%C3%A9xico&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale group-hover:grayscale-0 transition-all duration-700"
            >
            </iframe>
          </div>
          
          {/* Contact Info */}
          <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center bg-white relative z-20">
            <h3 className="text-3xl font-serif-elegant font-bold text-primary mb-10">Consultorio de Especialidad</h3>
            
            <StaggerContainer className="space-y-10">
              <StaggerItem className="flex items-start gap-5 group cursor-default">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg mb-1 transition-colors">Dirección</h4>
                  <p className="text-muted leading-relaxed text-base">{doctor.address}</p>
                  <a href={doctor.googleMapsUrl} target="_blank" rel="noreferrer" className="text-accent font-bold mt-2 inline-flex items-center gap-2 hover:translate-x-2 transition-transform text-sm">Abrir en Google Maps &rarr;</a>
                </div>
              </StaggerItem>

              <StaggerItem className="flex items-start gap-5 group cursor-default">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center text-accent flex-shrink-0 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <FaClock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg mb-1 transition-colors">Horarios de Atención</h4>
                  <p className="text-muted leading-relaxed text-base whitespace-pre-line">{doctor.schedule.replace(" | ", "\n")}</p>
                </div>
              </StaggerItem>

              <StaggerItem className="flex items-start gap-5 group cursor-default">
                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <FaPhone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg mb-1 transition-colors">Comunícate</h4>
                  <p className="text-muted leading-relaxed text-base">WhatsApp: <span className="font-medium text-foreground">{doctor.whatsapp}</span></p>
                  <p className="text-muted leading-relaxed text-base">Urgencias: <span className="font-medium text-foreground">{doctor.phone}</span></p>
                  <a href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full font-bold hover:bg-emerald-700 hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm">
                    <FaWhatsapp size={20} className="group-hover:rotate-12 transition-transform" /> Enviar Mensaje
                  </a>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
