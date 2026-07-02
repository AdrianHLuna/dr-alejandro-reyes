"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiAlertCircle, FiHelpCircle } from "react-icons/fi";

interface AestheticSymptomTabsProps {
  whyConsult: string;
  causes: string[];
}

export default function AestheticSymptomTabs({ whyConsult, causes }: AestheticSymptomTabsProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    { label: "01. Criterios de Consulta", key: "criteria" },
    { label: "02. Posibles Causas Clínicas", key: "causes" }
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
                layoutId="activeSymptomTabUnderline"
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
            {/* Tab 1: Criterio de Consulta */}
            {activeTab === 0 && (
              <div className="space-y-6">
                <div className="border border-primary/10 bg-plum-light p-8 lg:p-10 rounded-[1.5rem]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2 mb-4">
                    <FiAlertCircle className="text-accent" /> ¿Cuándo programar una valoración médica?
                  </h4>
                  <p className="text-sm font-light text-foreground/90 leading-relaxed whitespace-pre-line">
                    {whyConsult}
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2: Causas */}
            {activeTab === 1 && (
              <div className="space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2 mb-2">
                  <FiHelpCircle className="text-accent" /> Factores Clínicos Comunes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {causes.map((cause) => (
                    <div key={cause} className="bg-warm-light/30 p-5 border border-border rounded-[1rem] flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-sm font-semibold text-foreground/80 leading-relaxed">{cause}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-muted italic">
                  * Nota: Esta información es meramente orientativa. Un diagnóstico definitivo requiere de una valoración clínica presencial.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
