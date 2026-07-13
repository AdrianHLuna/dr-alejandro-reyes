import { symptoms } from "@/data/symptoms";
import { doctor } from "@/data/doctor";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaHeartbeat, FaCalendarCheck, FaPhone, FaExclamationTriangle, FaCheck } from "react-icons/fa";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";
import ClinicalImage from "@/components/ClinicalImage";

export async function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const symptom = symptoms.find((s) => s.slug === resolvedParams.slug);
  if (!symptom) return {};
  
  return {
    title: `${symptom.seo.title} | ${doctor.title} ${doctor.name}`,
    description: symptom.seo.description,
    keywords: symptom.seo.keywords,
  };
}

export default async function SymptomPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const symptom = symptoms.find((s) => s.slug === resolvedParams.slug);
  if (!symptom) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalSignOrSymptom",
    name: symptom.name,
    description: symptom.description,
    cause: symptom.causes.map(c => ({ "@type": "MedicalCause", name: c })),
  };

  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <div className="min-h-screen bg-background py-16 relative overflow-hidden">
      <StructuredData data={schema} />
      
      {/* Decorative Organic Background Elements */}
      <div className="absolute top-20 left-[-10%] w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-pulse-delicate pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[30rem] h-[30rem] rounded-full bg-primary/3 blur-3xl animate-pulse-delicate pointer-events-none" />

      {/* Floating decorative lines */}
      <div className="absolute top-40 right-[15%] opacity-15 animate-float-slow pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="#4c243c" strokeWidth="1" strokeDasharray="5 5" />
          <circle cx="50" cy="50" r="25" stroke="#c48b9f" strokeWidth="1.5" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="#4c243c" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas", href: "/sintomas" }, { label: symptom.name }]} />
        
        {/* Clinical Header with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8 mb-16">
          <FadeUp className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
              <FaHeartbeat className="animate-pulse text-accent" />
              <span>Síntoma de Alerta</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif-elegant font-bold text-primary leading-tight">{symptom.name}</h1>
            <p className="text-foreground/85 text-base lg:text-lg font-light leading-relaxed">{symptom.description}</p>
          </FadeUp>
          
          <FadeUp className="lg:col-span-5">
            <div className="aspect-[16/10] w-full rounded-[2rem] overflow-hidden border border-border/80 shadow-lg bg-primary/5">
              <ClinicalImage 
                src={symptom.image} 
                alt={symptom.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Main Content (Single continuous scrollable layout) - 8 cols */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Section 1: Criterios de Consulta Urgente */}
            <FadeUp className="bg-white border border-border p-8 lg:p-12 rounded-[2rem] shadow-sm relative overflow-hidden group hover:border-accent/20 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[8rem] pointer-events-none group-hover:scale-110 transition-transform duration-500" />
              <h2 className="text-2xl font-serif-elegant font-bold text-primary mb-6 flex items-center gap-3">
                <FaExclamationTriangle className="text-accent animate-bounce" />
                ¿Cuándo debes programar una valoración médica?
              </h2>
              <p className="text-foreground/90 text-sm lg:text-base font-light leading-relaxed whitespace-pre-line relative z-10">
                {symptom.whyConsult}
              </p>
            </FadeUp>

            {/* Section 2: Posibles Causas Fisiológicas */}
            <StaggerContainer className="space-y-6">
              <h2 className="text-2xl font-serif-elegant font-bold text-primary border-b border-border pb-3">
                Posibles factores clínicos asociados
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {symptom.causes.map((cause, idx) => (
                  <StaggerItem key={cause}>
                    <div className="organic-card p-6 h-full flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-primary flex-shrink-0">
                        <span className="font-mono text-xs font-bold">{idx + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-primary/95 mb-1">Causa Probable</h3>
                        <p className="text-sm font-light text-foreground/80 leading-relaxed">{cause}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
              <p className="text-[11px] text-muted italic pt-2">
                * Nota: Esta información es meramente orientativa y educativa. Un diagnóstico formal y tratamiento adecuado requieren de una consulta clínica presencial con el especialista.
              </p>
            </StaggerContainer>

          </div>

          {/* Sidebar CTA - 4 cols */}
          <div className="lg:col-span-4 bg-primary text-primary-foreground p-8 rounded-[2rem] border border-primary space-y-6 shadow-xl sticky top-32">
            <h3 className="font-serif-elegant font-bold text-2xl">Atención Médica Oportuna</h3>
            <p className="text-sm font-light text-primary-foreground/90 leading-relaxed">
              El Dr. Jose Alejandro Reyes Torres ofrece una valoración ginecológica integral y de fertilidad en su consultorio de Ixtlahuaca de Rayón para diagnosticar la causa exacta de este síntoma.
            </p>
            
            <div className="space-y-3 pt-2">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="w-full bg-accent text-accent-foreground text-center py-4 rounded-xl text-xs font-bold uppercase tracking-wider block hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <FaCalendarCheck /> Agendar Valoración
              </a>
              <a 
                href={`tel:${doctor.phone}`} 
                className="w-full bg-white/10 text-white border border-white/20 text-center py-4 rounded-xl text-xs font-bold uppercase tracking-wider block hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                <FaPhone /> Llamar Consultorio
              </a>
            </div>
            
            <div className="border-t border-white/10 pt-4 text-[10px] text-primary-foreground/60 leading-relaxed font-mono">
              <p>Consultorio: {doctor.phone}</p>
              <p>COFEPRIS: {doctor.cofepris}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
