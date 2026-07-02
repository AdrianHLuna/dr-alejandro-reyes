"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHeart, FiActivity, FiShield, FiHelpCircle } from "react-icons/fi";
import { FAQItem } from "@/types/schema";

interface AestheticTabsProps {
  description: string;
  symptoms: string[];
  causes: string[];
  riskFactors: string[];
  complications: string[];
  treatments: string[];
  faqs: FAQItem[];
}

export default function AestheticTabs({
  description,
  symptoms,
  causes,
  riskFactors,
  complications,
  treatments,
  faqs,
}: AestheticTabsProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    { label: "01. Panorama Clínico", key: "clinical" },
    { label: "02. Síntomas y Causas", key: "causes" },
    { label: "03. Tratamiento", key: "treatment" },
    { label: "04. Preguntas Frecuentes", key: "faq" },
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
                layoutId="activeDiseaseTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Tab 1: Panorama Clínico */}
            {activeTab === 0 && (
              <div className="space-y-8">
                <div className="prose max-w-none">
                  <p className="text-lg text-primary/90 font-serif-elegant leading-relaxed italic">
                    "{description}"
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="bg-plum-light p-6 border border-primary/10 rounded-[1.5rem]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2 mb-3">
                      <FiHeart className="text-accent" /> Complicaciones Asociadas
                    </h4>
                    <ul className="space-y-2">
                      {complications.map((comp) => (
                        <li key={comp} className="text-sm font-light text-foreground/90 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span>{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-warm-light/40 p-6 border border-border rounded-[1.5rem]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-primary/90 flex items-center gap-2 mb-3">
                      <FiShield className="text-accent" /> Factores de Riesgo
                    </h4>
                    <ul className="space-y-2">
                      {riskFactors.map((risk) => (
                        <li key={risk} className="text-sm font-light text-foreground/90 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/45 mt-2 flex-shrink-0" />
                          <span>{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Síntomas y Causas */}
            {activeTab === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-serif-elegant font-bold text-primary border-b border-border pb-2">Manifestaciones Clínicas</h3>
                  <div className="space-y-3">
                    {symptoms.map((sym) => (
                      <div key={sym} className="flex gap-3 items-center bg-white p-4 border border-border rounded-[1rem]">
                        <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-sm font-semibold text-foreground/90">{sym}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-serif-elegant font-bold text-primary border-b border-border pb-2">Causas Comunes</h3>
                  <ul className="space-y-3 font-light text-sm text-foreground/95">
                    {causes.map((cause) => (
                      <li key={cause} className="flex items-start gap-2.5">
                        <span className="text-accent mt-0.5">✓</span>
                        <span>{cause}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Tab 3: Abordaje Terapéutico */}
            {activeTab === 2 && (
              <div className="space-y-6">
                <h3 className="text-lg font-serif-elegant font-bold text-primary">Protocolos de Tratamiento y Prevención</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {treatments.map((t, idx) => (
                    <div key={t} className="bg-warm-light/30 p-6 border-l-2 border-primary rounded-r-[1rem] flex gap-4">
                      <span className="text-xs font-bold text-primary font-mono">{(idx + 1).toString().padStart(2, "0")}</span>
                      <p className="text-sm font-semibold text-foreground/90">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 4: Preguntas Frecuentes */}
            {activeTab === 3 && (
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white p-6 border border-border rounded-[1.5rem]">
                    <h4 className="text-sm font-bold text-primary flex items-center gap-2 mb-2">
                      <FiHelpCircle className="text-accent flex-shrink-0" /> {faq.question}
                    </h4>
                    <p className="text-sm font-light text-foreground/80 pl-6">{faq.answer}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
