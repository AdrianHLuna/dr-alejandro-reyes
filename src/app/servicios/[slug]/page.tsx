import { services } from "@/data/services";
import { doctor } from "@/data/doctor";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaCheckCircle, FaInfoCircle, FaCalendarCheck, FaPhone, FaTasks } from "react-icons/fa";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  if (!service) return {};
  
  return {
    title: `${service.seo.title} | ${doctor.title} ${doctor.name}`,
    description: service.seo.description,
    keywords: service.seo.keywords,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  if (!service) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.name,
    description: service.longDescription,
    procedureType: service.type === "hospitalario" ? "SurgicalProcedure" : "NoninvasiveProcedure",
    howPerformed: service.description,
    performer: {
      "@type": "Physician",
      name: `${doctor.title} ${doctor.name}`,
    },
  };

  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <div className="min-h-screen bg-background py-16 relative overflow-hidden">
      <StructuredData data={schema} />
      
      {/* Decorative Organic Elements */}
      <div className="absolute top-20 right-[-10%] w-96 h-96 rounded-full bg-accent/3 blur-3xl animate-pulse-delicate pointer-events-none" />
      <div className="absolute bottom-20 left-[-10%] w-[32rem] h-[32rem] rounded-full bg-primary/4 blur-3xl animate-pulse-delicate pointer-events-none" />

      {/* Floating abstract organic curves */}
      <div className="absolute top-[45%] right-[8%] opacity-10 animate-float-slow pointer-events-none">
        <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 80 C 40 10, 60 10, 90 80" stroke="#4c243c" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="50" cy="30" r="10" stroke="#c48b9f" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/servicios" }, { label: service.name }]} />
        
        {/* Header Section */}
        <FadeUp className="mt-8 mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
            <FaInfoCircle className="text-accent" />
            <span>Servicio Clínico / {service.type}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif-elegant font-bold text-primary leading-none">{service.name}</h1>
          <p className="text-foreground/80 text-base lg:text-lg font-light max-w-3xl leading-relaxed">{service.longDescription}</p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Main Content (Single Continuous Layout) - 8 cols */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Section 1: Ficha Técnica (Horizontal Layout or side list) */}
            <StaggerContainer className="space-y-6">
              <h2 className="text-2xl font-serif-elegant font-bold text-primary flex items-center gap-3">
                <FaTasks className="text-accent" /> Ficha del Servicio
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 border border-border rounded-[1.5rem] flex items-center justify-between">
                  <span className="text-xs text-muted uppercase font-semibold">Tipo de Servicio</span>
                  <span className="text-sm font-bold text-primary capitalize">{service.type}</span>
                </div>
                <div className="bg-white p-5 border border-border rounded-[1.5rem] flex items-center justify-between">
                  <span className="text-xs text-muted uppercase font-semibold">Duración</span>
                  <span className="text-sm font-bold text-primary">{service.duration || "Variable"}</span>
                </div>
                <div className="bg-white p-5 border border-border rounded-[1.5rem] flex items-center justify-between">
                  <span className="text-xs text-muted uppercase font-semibold">Recuperación</span>
                  <span className="text-sm font-bold text-primary">{service.recoveryTime || "Inmediata"}</span>
                </div>
                <div className="bg-white p-5 border border-border rounded-[1.5rem] flex items-center justify-between">
                  <span className="text-xs text-muted uppercase font-semibold">Hospitalización</span>
                  <span className="text-sm font-bold text-primary">{service.type === "hospitalario" ? "Sí, estancia hospitalaria" : "No, ambulatorio"}</span>
                </div>
                
                {/* Custom Specs */}
                {service.technicalSpecs && Object.entries(service.technicalSpecs).map(([key, value]) => (
                  <div key={key} className="col-span-1 sm:col-span-2 bg-warm-light/20 p-5 border border-border rounded-[1.5rem] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-xs text-muted uppercase font-semibold">{key}</span>
                    <span className="text-sm font-bold text-primary">{value}</span>
                  </div>
                ))}
              </div>
            </StaggerContainer>

            {/* Section 2: Beneficios del Procedimiento */}
            <StaggerContainer className="space-y-6 border-t border-border pt-12">
              <h2 className="text-2xl font-serif-elegant font-bold text-primary flex items-center gap-3">
                <FaCheckCircle className="text-accent" /> Beneficios Médicos
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {service.benefits.map((benefit) => (
                  <StaggerItem key={benefit}>
                    <div className="organic-card p-5 flex items-start gap-4 hover:border-accent/30 transition-colors">
                      <FaCheckCircle className="text-accent mt-1 flex-shrink-0" />
                      <span className="font-medium text-primary text-sm lg:text-base leading-relaxed">{benefit}</span>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* Section 3: Recomendaciones Pos-Procedimiento */}
            <div className="bg-plum-light border border-primary/10 p-8 rounded-[2.5rem] space-y-6">
              <h2 className="text-xl font-serif-elegant font-bold text-primary border-b border-primary/10 pb-4">
                Indicaciones Previas y Posteriores
              </h2>
              <ul className="space-y-4">
                {service.postOpRecommendations.map((rec) => (
                  <li key={rec} className="text-sm font-light text-foreground/90 flex items-start gap-3 leading-relaxed">
                    <span className="text-accent font-bold text-base">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Sidebar CTA - 4 cols */}
          <div className="lg:col-span-4 bg-primary text-primary-foreground p-8 rounded-[2rem] border border-primary space-y-6 shadow-xl sticky top-32">
            <h3 className="font-serif-elegant font-bold text-2xl">¿Requiere este servicio?</h3>
            <p className="text-sm font-light text-primary-foreground/90 leading-relaxed">
              Antes de cualquier procedimiento, el Dr. Jose Alejandro Reyes Torres realizará una valoración integral para asegurar el mejor abordaje clínico adaptado a tu caso.
            </p>
            
            <div className="space-y-3 pt-2">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="w-full bg-accent text-accent-foreground text-center py-4 rounded-xl text-xs font-bold uppercase tracking-wider block hover:opacity-95 transition-all flex items-center justify-center gap-2"
              >
                <FaCalendarCheck /> Agendar Valoración
              </a>
              <a 
                href={`tel:${doctor.phone}`} 
                className="w-full bg-white/10 text-white border border-white/20 text-center py-4 rounded-xl text-xs font-bold uppercase tracking-wider block hover:bg-white/20 transition-all text-center"
              >
                Llamar Consultorio
              </a>
            </div>
            
            <div className="border-t border-white/10 pt-4 text-[10px] text-primary-foreground/60 leading-relaxed font-mono">
              <p>Consultorio: {doctor.phone}</p>
              <p>Cédula Especialidad: {doctor.cedulaEspecialidad}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
