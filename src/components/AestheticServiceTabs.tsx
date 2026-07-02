"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiActivity, FiCpu, FiPlusCircle } from "react-icons/fi";

interface AestheticServiceTabsProps {
  longDescription: string;
  benefits: string[];
  postOpRecommendations: string[];
  technicalSpecs: Record<string, string>;
}

export default function AestheticServiceTabs({
  longDescription,
  benefits,
  postOpRecommendations,
  technicalSpecs,
}: AestheticServiceTabsProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    { label: "01. Descripción del Servicio", key: "info" },
    { label: "02. Beneficios Médicos", key: "benefits" },
    { label: "03. Indicaciones y Recomendaciones", key: "preparation" },
  ];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex border-b border-border mb-10 overflow-x-auto gap-2">
        {tabs.map((tab, idx) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(idx)}
            className={`px-6 py-4 text-xs font-semibold uppercase tracking-wider transition-all relative whitespace-nowrap ${
              activeTab === idx ? "text-primary font-bold" : "text-muted hover:text-primary"
            }`}
          >
            {tab.label}
            {activeTab === idx && (
              <motion.div
                layoutId="activeServiceTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[250px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Tab 1: Descripción e Info técnica */}
            {activeTab === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4">
                  <h3 className="text-xl font-serif-elegant font-bold text-primary">Detalle del Procedimiento</h3>
                  <p className="text-sm font-light text-foreground/80 leading-relaxed whitespace-pre-line">
                    {longDescription}
                  </p>
                </div>
                <div className="bg-warm-light/30 p-6 border border-border rounded-[1.5rem] space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                    <FiCpu className="text-accent" /> Ficha Técnica
                  </h4>
                  <div className="space-y-3">
                    {Object.entries(technicalSpecs).map(([key, val]) => (
                      <div key={key} className="border-b border-border/80 pb-2">
                        <span className="text-[10px] text-muted uppercase font-semibold block">{key}</span>
                        <span className="text-xs font-semibold text-primary">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Beneficios */}
            {activeTab === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-serif-elegant font-bold text-primary">Resultados y Beneficios Clínicos</h3>
                <div className="space-y-3">
                  {benefits.map((b) => (
                    <div key={b} className="flex gap-4 items-center bg-white p-5 border border-border rounded-[1.5rem]">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                        <FiActivity size={16} />
                      </div>
                      <p className="text-sm font-semibold text-foreground/90">{b}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Cuidados Post-Op */}
            {activeTab === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-serif-elegant font-bold text-primary">Indicaciones Previas y Posteriores</h3>
                <div className="bg-plum-light border border-primary/10 p-6 md:p-8 rounded-[1.5rem]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
                    <FiPlusCircle className="text-accent" /> Recomendaciones Clínicas
                  </h4>
                  <ul className="space-y-3.5">
                    {postOpRecommendations.map((rec) => (
                      <li key={rec} className="text-sm font-light text-foreground/90 flex items-start gap-2.5">
                        <span className="text-accent font-bold mt-0.5">•</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
