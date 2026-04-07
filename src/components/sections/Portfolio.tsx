"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const tabs = ["tab1", "tab2", "tab3", "tab4"] as const;

const projectsByTab: Record<string, string[]> = {
  tab1: ["app1", "app2"],
  tab2: ["web1", "web2"],
  tab3: ["ai1", "ai2"],
  tab4: ["content1", "content2"],
};

export default function Portfolio() {
  const t = useTranslations("Portfolio");
  const [activeTab, setActiveTab] = useState<string>("tab1");

  return (
    <section id="portfolio" className="section-padding bg-bg">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Section Header - Premium */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-accent-gold" />
            <p className="text-[11px] tracking-[0.15em] text-text-muted uppercase font-medium">
              {t("sectionLabel")}
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-elegant text-balance">
              {t("title")}
            </h2>
            <p className="text-[16px] text-text-secondary leading-[1.85] max-w-[620px] font-normal">
              {t("subtitle")}
            </p>
          </div>
        </motion.div>

        {/* Tabs - Elegant buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-[13px] tracking-[0.05em] rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-accent text-text-inverse shadow-lg"
                  : "bg-bg-card border border-border text-text-secondary hover:border-accent-gold hover:text-text"
              }`}
            >
              {t(tab)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - Premium cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          >
            {projectsByTab[activeTab].map((project, i) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="card-premium overflow-hidden hover-lift h-full flex flex-col">
                  {/* Image Placeholder - Elegant */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-bg-soft via-bg-muted to-bg-soft relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-bg-card/70 backdrop-blur-md rounded-2xl mb-3 group-hover:scale-110 group-hover:bg-accent-gold/10 transition-all duration-500">
                          <svg className="w-8 h-8 text-text-muted group-hover:text-accent-gold transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25c0 .828.672 1.5 1.5 1.5z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/10 via-transparent to-transparent group-hover:from-accent/5 transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-[20px] font-medium mb-3 tracking-tight text-text group-hover:text-accent-gold transition-colors duration-300">
                      {t(project)}
                    </h3>
                    <p className="text-[14px] text-text-secondary leading-[1.8] mb-6 flex-grow">
                      {t(`${project}desc`)}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                      {t(`${project}tags`)
                        .split(",")
                        .map((tag: string) => (
                          <span
                            key={tag}
                            className="text-[11px] text-text-muted tracking-[0.05em] px-3 py-1.5 bg-bg-soft rounded-lg font-medium"
                          >
                            {tag.trim()}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section - Elegant */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="card-premium p-12 md:p-16 text-center"
        >
          <p className="text-[11px] tracking-[0.2em] text-accent-gold uppercase font-semibold mb-6">
            {t("ctaLabel")}
          </p>
          <p className="text-[28px] md:text-[36px] font-light leading-[1.3] text-text mb-8 max-w-[700px] mx-auto">
            {t("cta")}
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-accent text-text-inverse text-[13px] font-medium tracking-[0.05em] rounded-lg hover:bg-accent-hover transition-all duration-300"
          >
            {t("ctaButton")}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
