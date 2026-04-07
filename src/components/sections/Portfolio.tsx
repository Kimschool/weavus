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

const projectImages = [
  "from-neutral-100 to-stone-200",
  "from-stone-100 to-neutral-200",
  "from-zinc-100 to-stone-200",
  "from-neutral-100 to-zinc-200",
];

export default function Portfolio() {
  const t = useTranslations("Portfolio");
  const [activeTab, setActiveTab] = useState<string>("tab1");

  return (
    <section id="portfolio" className="section-padding bg-bg">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-accent" />
            <p className="text-[11px] tracking-[0.2em] text-text-muted uppercase">
              {t("sectionLabel")}
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.2] tracking-tight mb-4 text-balance">
                {t("title")}
              </h2>
              <p className="text-[15px] text-text-secondary max-w-[480px]">{t("subtitle")}</p>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 text-[13px] tracking-[0.03em] rounded-full transition-all duration-300 font-medium ${
                activeTab === tab
                  ? "bg-accent text-text-inverse"
                  : "bg-bg-card text-text-secondary border border-border hover:border-text-muted hover:text-text"
              }`}
            >
              {t(tab)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          >
            {projectsByTab[activeTab].map((project, i) => (
              <div
                key={project}
                className="group cursor-pointer card-premium overflow-hidden hover-lift"
              >
                {/* Image area */}
                <div
                  className={`aspect-[16/10] bg-gradient-to-br ${projectImages[i % projectImages.length]} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-bg-card/80 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <svg className="w-8 h-8 text-text-muted" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25c0 .828.672 1.5 1.5 1.5z" />
                      </svg>
                    </div>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500" />
                </div>

                {/* Text */}
                <div className="p-6">
                  <h3 className="text-[18px] font-semibold mb-2 tracking-tight text-text group-hover:text-text-secondary transition-colors">
                    {t(project)}
                  </h3>
                  <p className="text-[13px] text-text-secondary leading-[1.8] mb-4">
                    {t(`${project}desc`)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {t(`${project}tags`)
                      .split(",")
                      .map((tag: string) => (
                        <span
                          key={tag}
                          className="text-[11px] text-text-muted tracking-[0.03em] px-3 py-1.5 bg-bg-soft rounded-full"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="card-premium p-10 md:p-14 text-center"
        >
          <p className="text-[11px] tracking-[0.2em] text-text-muted uppercase mb-4">
            Start Your Project
          </p>
          <p className="text-[clamp(1.2rem,2.5vw,1.6rem)] font-semibold text-text mb-8 max-w-[600px] mx-auto leading-[1.5]">
            {t("cta")}
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-text-inverse text-[13px] font-medium tracking-[0.05em] rounded-full hover:bg-accent-hover transition-colors"
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
