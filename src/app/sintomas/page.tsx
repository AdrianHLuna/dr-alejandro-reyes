import Link from "next/link";
import { symptoms } from "@/data/symptoms";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";
import { FaExclamationTriangle } from "react-icons/fa";
import { doctor } from "@/data/doctor";
import ClinicalImage from "@/components/ClinicalImage";

export const metadata = {
  title: `Síntomas de Alerta Ginecológica y Reproductiva | ${doctor.title} ${doctor.name}`,
  description: "Conoce los principales síntomas clínicos en ginecología, obstetricia y fertilidad que requieren valoración oportuna.",
};

export default function SintomasPage() {
  return (
    <div className="min-h-screen bg-background py-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-[-10%] w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-pulse-delicate pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[30rem] h-[30rem] rounded-full bg-primary/3 blur-3xl animate-pulse-delicate pointer-events-none" />

      {/* Rotating Botanical Spiral (Top-Left) */}
      <div className="absolute top-[8%] left-[5%] opacity-15 animate-spin-slow pointer-events-none hidden md:block">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="#4c243c" strokeWidth="0.5" />
          <path d="M50 5 Q 35 35, 5 50 T 50 95 T 95 50 T 50 5" stroke="#c48b9f" strokeWidth="1" />
        </svg>
      </div>

      {/* Floating Concentric Circles (Bottom-Right) */}
      <div className="absolute bottom-[10%] right-[3%] opacity-10 animate-float-slow pointer-events-none hidden md:block">
        <svg width="160" height="160" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="#c48b9f" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="25" stroke="#4c243c" strokeWidth="0.75" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas" }]} />
        
        <FadeUp className="mb-16 mt-8">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">Criterios de Alarma</span>
          <h1 className="text-4xl lg:text-5xl font-serif-elegant font-bold text-primary mb-4">Síntomas Ginecológicos</h1>
          <p className="text-base lg:text-lg text-muted max-w-3xl font-light">
            Identificar a tiempo las señales de alarma reproductiva es fundamental. Selecciona un síntoma para conocer las causas asociadas y pautas clínicas para programar una valoración.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {symptoms.map((sym, index) => {
            const cardShape = index % 2 === 0
              ? "organic-card"
              : "border border-border bg-white rounded-[1rem_3rem_1rem_3rem] hover:rounded-[3rem_1rem_3rem_1rem] hover:shadow-xl hover:border-accent/35 transition-all duration-500";
            
            return (
              <StaggerItem key={sym.id} className="h-full">
                <Link 
                  href={`/sintomas/${sym.slug}`} 
                  className={`flex flex-col h-full p-8 justify-between group ${cardShape}`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="w-12 h-12 bg-accent/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 rounded-full">
                        <FaExclamationTriangle size={18} />
                      </div>
                      <span className="text-[10px] font-mono text-muted/60">SÍNTOMA 0{index + 1}</span>
                    </div>
                    <div className="w-full aspect-[16/10] relative rounded-[1.5rem] overflow-hidden bg-primary/5 border border-border/50">
                      <ClinicalImage 
                        src={sym.image} 
                        alt={sym.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h2 className="text-2xl font-serif-elegant font-bold text-primary group-hover:text-accent transition-colors duration-300">{sym.name}</h2>
                    <p className="text-muted text-sm font-light leading-relaxed line-clamp-4">{sym.description}</p>
                  </div>
                  
                  <div className="pt-6 border-t border-border/60 mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-accent group-hover:text-primary transition-colors">
                    <span>Ver Criterios de Consulta</span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </div>
  );
}
