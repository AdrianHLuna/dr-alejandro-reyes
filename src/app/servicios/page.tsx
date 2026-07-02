import Link from "next/link";
import { services } from "@/data/services";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";
import { doctor } from "@/data/doctor";

export const metadata = {
  title: `Servicios Clínicos y Estudios de Especialidad | ${doctor.title} ${doctor.name}`,
  description: "Consulta los estudios diagnósticos, tratamientos e intervenciones especializadas en Ginecología, Obstetricia y Biología de la Reproducción.",
};

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-background py-16 relative overflow-hidden">
      
      {/* Background blurs */}
      <div className="absolute top-24 right-[-5%] w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-[-5%] w-[32rem] h-[32rem] rounded-full bg-primary/3 blur-3xl pointer-events-none" />

      {/* Concentric Rotating Medical Circle SVG (Middle-Right) */}
      <div className="absolute top-[40%] right-[3%] opacity-15 animate-spin-slow pointer-events-none hidden md:block">
        <svg width="240" height="240" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="#4c243c" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="35" stroke="#c48b9f" strokeWidth="0.75" />
          <circle cx="50" cy="50" r="20" stroke="#4c243c" strokeWidth="0.5" strokeDasharray="2 2" />
        </svg>
      </div>

      {/* Floating Wave Pattern SVG (Top-Left) */}
      <div className="absolute top-[10%] left-[2%] opacity-10 animate-float-slow pointer-events-none hidden md:block">
        <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20 Q 30 60, 50 20 T 90 20" stroke="#c48b9f" strokeWidth="1" />
          <path d="M10 35 Q 30 75, 50 35 T 90 35" stroke="#4c243c" strokeWidth="0.75" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios" }]} />
        
        <FadeUp className="mb-16 mt-8">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">Procedimientos y Consulta</span>
          <h1 className="text-4xl lg:text-5xl font-serif-elegant font-bold text-primary mb-4">Servicios Clínicos</h1>
          <p className="text-base lg:text-lg text-muted max-w-3xl font-light">
            Ofrecemos estudios diagnósticos y procedimientos quirúrgicos de mínima invasión con tecnología de vanguardia y calidez humana. Explora nuestras principales áreas de servicio.
          </p>
        </FadeUp>

        {/* Asymmetric vertical-staggered sequence */}
        <StaggerContainer className="flex flex-col gap-10 max-w-5xl mx-auto">
          {services.map((service, idx) => {
            const isEven = idx % 2 === 0;
            const alignmentClass = isEven ? "md:flex-row" : "md:flex-row-reverse";
            
            return (
              <StaggerItem key={service.id} className="w-full">
                <Link 
                  href={`/servicios/${service.slug}`} 
                  className={`flex flex-col ${alignmentClass} gap-6 bg-white border border-border/80 p-8 lg:p-10 rounded-[2.5rem] hover:shadow-xl hover:border-accent/30 transition-all duration-500 group`}
                >
                  <div className="flex-1 space-y-4">
                    <div className="flex justify-between items-center border-b border-border/50 pb-3">
                      <span className="text-[10px] font-mono text-accent uppercase tracking-wider block">{service.type}</span>
                      <span className="text-[10px] font-mono text-muted/60">0{idx + 1}</span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-serif-elegant font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      {service.name}
                    </h2>
                    <p className="text-muted text-sm font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="w-full md:w-80 bg-warm-light/20 p-6 rounded-[2rem] border border-border/60 flex flex-col justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-[11px] border-b border-border/40 pb-1.5">
                        <span className="text-muted">Duración</span>
                        <span className="font-semibold text-primary">{service.duration || "Variable"}</span>
                      </div>
                      <div className="flex justify-between text-[11px] border-b border-border/40 pb-1.5">
                        <span className="text-muted">Recuperación</span>
                        <span className="font-semibold text-primary">{service.recoveryTime || "Inmediata"}</span>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-muted">Costo Estimado</span>
                        <span className="font-semibold text-primary">{service.priceRange ? "Ver Detalles" : "Bajo Cotización"}</span>
                      </div>
                    </div>
                    
                    <span className="text-[10px] font-bold text-accent group-hover:text-primary transition-colors flex items-center justify-between uppercase tracking-wider pt-2 border-t border-border/50">
                      <span>Ver Ficha Técnica Completa</span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                    </span>
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
