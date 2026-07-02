import { diseases } from "@/data/diseases";
import { doctor } from "@/data/doctor";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaCheckCircle, FaExclamationTriangle, FaStethoscope, FaCalendarCheck, FaQuestionCircle } from "react-icons/fa";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export async function generateStaticParams() {
  return diseases.map((disease) => ({
    slug: disease.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const disease = diseases.find((d) => d.slug === resolvedParams.slug);
  if (!disease) return {};
  
  return {
    title: `${disease.seo.title} | ${doctor.title} ${doctor.name}`,
    description: disease.seo.description,
    keywords: disease.seo.keywords,
  };
}

export default async function DiseasePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const disease = diseases.find((d) => d.slug === resolvedParams.slug);
  if (!disease) notFound();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      name: disease.name,
      description: disease.description,
      signOrSymptom: disease.symptoms.map(s => ({ "@type": "MedicalSignOrSymptom", name: s })),
      riskFactor: disease.riskFactors.map(r => ({ "@type": "MedicalRiskFactor", name: r })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: disease.faqs.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ];

  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <div className="min-h-screen bg-background py-16 relative overflow-hidden">
      <StructuredData data={schemas} />
      
      {/* Decorative Floating Blobs */}
      <div className="absolute top-10 right-[-10%] w-[30rem] h-[30rem] rounded-full bg-accent/3 blur-3xl animate-pulse-delicate pointer-events-none" />
      <div className="absolute bottom-20 left-[-15%] w-[35rem] h-[35rem] rounded-full bg-primary/4 blur-3xl animate-pulse-delicate pointer-events-none" />

      {/* Decorative Rotating Line Floral Ring */}
      <div className="absolute top-[35%] left-[5%] opacity-10 animate-spin-slow pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="#4c243c" strokeWidth="0.75" />
          <path d="M50 5 C50 35 20 50 50 95 C50 65 80 50 50 5 Z" stroke="#c48b9f" strokeWidth="1" />
          <path d="M5 50 C35 50 50 20 95 50 C65 50 50 80 5 50 Z" stroke="#c48b9f" strokeWidth="1" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades", href: "/enfermedades" }, { label: disease.name }]} />
        
        {/* Header Section */}
        <FadeUp className="mt-8 mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
            <FaStethoscope className="text-accent" />
            <span>Condición Clínica Ginecológica</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif-elegant font-bold text-primary leading-none">{disease.name}</h1>
          <p className="text-foreground/85 text-base lg:text-lg font-light max-w-3xl leading-relaxed">{disease.description}</p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Main Content (Cascading Scrollable Sections) - 8 cols */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Section 1: Panorama Clínico y Riesgos */}
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StaggerItem>
                <div className="bg-plum-light p-8 border border-primary/10 rounded-[2rem] h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2 mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Factores de Riesgo
                    </h3>
                    <ul className="space-y-3">
                      {disease.riskFactors.map((risk) => (
                        <li key={risk} className="text-sm font-light text-foreground/90 flex items-start gap-2.5">
                          <span className="text-accent font-bold">•</span>
                          <span>{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <div className="bg-warm-light/30 p-8 border border-border rounded-[2rem] h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2 mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Complicaciones
                    </h3>
                    <ul className="space-y-3">
                      {disease.complications.map((comp) => (
                        <li key={comp} className="text-sm font-light text-foreground/90 flex items-start gap-2.5">
                          <span className="text-accent font-bold">•</span>
                          <span>{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* Section 2: Síntomas y Causas */}
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-12">
              <StaggerItem className="space-y-4">
                <h3 className="text-xl font-serif-elegant font-bold text-primary pb-2 border-b border-border">
                  Manifestaciones y Síntomas
                </h3>
                <div className="space-y-3">
                  {disease.symptoms.map((sym) => (
                    <div key={sym} className="flex gap-3 items-center bg-white p-4 border border-border rounded-[1rem] hover:border-accent/30 transition-colors">
                      <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-sm font-semibold text-primary">{sym}</span>
                    </div>
                  ))}
                </div>
              </StaggerItem>
              
              <StaggerItem className="space-y-4">
                <h3 className="text-xl font-serif-elegant font-bold text-primary pb-2 border-b border-border">
                  Causas Comunes
                </h3>
                <ul className="space-y-4 text-sm font-light text-foreground/80 leading-relaxed">
                  {disease.causes.map((cause) => (
                    <li key={cause} className="flex items-start gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            </StaggerContainer>

            {/* Section 3: Tratamientos (Cascading Cards) */}
            <div className="border-t border-border pt-12 space-y-6">
              <h3 className="text-2xl font-serif-elegant font-bold text-primary">
                Protocolo Quirúrgico y Tratamientos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {disease.treatments.map((t, idx) => (
                  <div key={t} className="organic-card p-6 flex gap-4">
                    <span className="text-sm font-bold text-primary font-mono bg-accent/15 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <p className="text-sm font-semibold text-primary/95 leading-relaxed">{t}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: FAQs */}
            <div className="border-t border-border pt-12 space-y-6">
              <h3 className="text-2xl font-serif-elegant font-bold text-primary flex items-center gap-2">
                <FaQuestionCircle className="text-accent" /> Preguntas Frecuentes
              </h3>
              <div className="space-y-4">
                {disease.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-[1.5rem] border border-border shadow-sm hover:border-accent/15 transition-all duration-300">
                    <h4 className="font-bold text-base text-primary mb-2 flex items-start gap-2">
                      <span className="text-accent mt-1">?</span> {faq.question}
                    </h4>
                    <p className="text-sm font-light text-foreground/80 pl-4 border-l border-accent/20 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar CTA - 4 cols */}
          <div className="lg:col-span-4 bg-primary text-primary-foreground p-8 rounded-[2rem] border border-primary space-y-6 shadow-xl sticky top-32">
            <h3 className="font-serif-elegant font-bold text-2xl">¿Sospechas esta condición?</h3>
            <p className="text-sm font-light text-primary-foreground/90 leading-relaxed">
              El diagnóstico oportuno y un abordaje terapéutico especializado son fundamentales para proteger tu salud reproductiva. Agenda una consulta con el Dr. Jose Alejandro Reyes Torres en Ixtlahuaca de Rayón.
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
