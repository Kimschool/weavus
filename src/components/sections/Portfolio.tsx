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
    <section id="portfolio" className="section-padding bg-bg-soft">
      <div className="container-lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <span className="label text-primary mb-4 block">{t("sectionLabel")}</span>
          <h2 className="heading-lg mb-6">{t("title")}</h2>
          <p className="body-lg text-text-secondary max-w-2xl">{t("subtitle")}</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-[14px] font-medium rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? "bg-accent text-text-inverse"
                  : "bg-bg text-text-secondary border border-border hover:border-text-muted"
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
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16"
          >
            {projectsByTab[activeTab].map((project, i) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="card overflow-hidden h-full flex flex-col">
                  {/* Project Image */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-bg-muted to-bg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-bg/80 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <svg className="w-7 h-7 text-text-muted" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25c0 .828.672 1.5 1.5 1.5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/5 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8 flex flex-col flex-1">
                    <h3 className="heading-sm mb-3 group-hover:text-primary transition-colors">
                      {t(project)}
                    </h3>
                    <p className="body-md text-text-secondary mb-6 flex-1">
                      {t(`${project}desc`)}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                      {t(`${project}tags`)
                        .split(",")
                        .map((tag: string) => (
                          <span key={tag} className="tag">
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card p-10 lg:p-16 text-center"
        >
          <span className="text-[13px] font-medium tracking-[0.1em] text-primary uppercase mb-4 block">{t("ctaLabel")}</span>
          <p className="heading-md mb-8 max-w-2xl mx-auto whitespace-pre-line">{t("cta")}</p>
          <Link href="/contact" className="btn-primary">
            {t("ctaButton")}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
