import Link from "next/link";
import { diseases } from "@/data/diseases";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";
import { doctor } from "@/data/doctor";
import ClinicalImage from "@/components/ClinicalImage";

export const metadata = {
  title: `Padecimientos y Enfermedades Ginecológicas | ${doctor.title} ${doctor.name}`,
  description: "Conoce más sobre las condiciones ginecológicas y de fertilidad que diagnosticamos y tratamos con alta especialización médica.",
};

export default function EnfermedadesPage() {
  return (
    <div className="min-h-screen bg-background py-16 relative overflow-hidden">
      
      {/* Background Blurs */}
      <div className="absolute top-10 left-[-10%] w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-pulse-delicate pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[30rem] h-[30rem] rounded-full bg-primary/3 blur-3xl animate-pulse-delicate pointer-events-none" />

      {/* Rotating Botanical SVG 1 (Top-Right) */}
      <div className="absolute top-[8%] right-[5%] opacity-15 animate-spin-slow pointer-events-none hidden md:block">
        <svg width="220" height="220" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="#4c243c" strokeWidth="0.5" />
          <path d="M50 5 C30 20 20 40 50 95 C70 80 80 60 50 5 Z" stroke="#c48b9f" strokeWidth="0.75" />
          <circle cx="50" cy="50" r="10" stroke="#4c243c" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Floating Botanical SVG 2 (Bottom-Left) */}
      <div className="absolute bottom-[10%] left-[2%] opacity-10 animate-float-slow pointer-events-none hidden md:block">
        <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="#c48b9f" strokeWidth="0.5" strokeDasharray="3 3" />
          <path d="M10 50 C 30 20, 70 20, 90 50 C 70 80, 30 80, 10 50 Z" stroke="#4c243c" strokeWidth="0.75" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades" }]} />
        
        <FadeUp className="mb-16 mt-8">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">Especialidades Médicas</span>
          <h1 className="text-4xl lg:text-5xl font-serif-elegant font-bold text-primary mb-4">Padecimientos Clínicos</h1>
          <p className="text-base lg:text-lg text-muted max-w-3xl font-light">
            Información médica detallada sobre las condiciones que tratamos habitualmente en consulta. Haz clic sobre cada una para conocer sus síntomas, causas y tratamientos disponibles.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {diseases.map((disease, idx) => {
            const cardShape = idx % 2 === 0 
              ? "organic-card" 
              : "border border-border bg-white rounded-[2.5rem_2.5rem_1rem_1rem] hover:rounded-[1rem_1rem_2.5rem_2.5rem] hover:shadow-xl hover:border-accent/35 transition-all duration-500";
            
            return (
              <StaggerItem key={disease.id} className="h-full">
                <Link 
                  href={`/enfermedades/${disease.slug}`} 
                  className={`flex flex-col h-full p-8 justify-between group ${cardShape}`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono text-accent uppercase tracking-wider block">Ginecología Clínica</span>
                      <span className="text-[9px] font-mono text-muted/60">0{idx + 1}</span>
                    </div>
                    <div className="w-full aspect-[16/10] relative rounded-[1.5rem] overflow-hidden bg-primary/5 border border-border/50">
                      <ClinicalImage 
                        src={disease.image} 
                        alt={disease.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h2 className="text-2xl font-serif-elegant font-bold text-primary group-hover:text-accent transition-colors duration-300">{disease.name}</h2>
                    <p className="text-muted text-sm font-light leading-relaxed line-clamp-4">{disease.description}</p>
                  </div>
                  
                  <div className="pt-6 border-t border-border/60 mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-accent group-hover:text-primary transition-colors">
                    <span>Ver Padecimiento</span>
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
