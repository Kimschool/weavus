"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

const itItems = ["service1", "service2", "service3", "service4"];
const contentItems = ["service1", "service2", "service3", "service4"];

export default function Services() {
  const t = useTranslations("Services");

  return (
    <section id="services" className="section-padding bg-bg">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28"
        >
          <p className="text-[11px] tracking-[0.3em] text-text-muted uppercase mb-4">
            {t("sectionLabel")}
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.2] tracking-tight mb-6">
            {t("title")}
          </h2>
          <p className="text-[15px] text-text-secondary leading-[1.9] max-w-[500px] whitespace-pre-line">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Two Divisions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-border">
          {/* IT Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="py-16 lg:py-20 lg:pr-20 border-b lg:border-b-0 lg:border-r border-border"
          >
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-[11px] tracking-[0.2em] text-text-muted uppercase">01</span>
              <h3 className="text-[13px] tracking-[0.15em] text-text-muted uppercase">
                {t("it.title")}
              </h3>
            </div>
            <p className="text-[clamp(1.3rem,2.5vw,1.8rem)] font-semibold leading-[1.3] tracking-tight mb-6">
              {t("it.subtitle")}
            </p>
            <p className="text-[14px] text-text-secondary leading-[1.9] mb-10">
              {t("it.description")}
            </p>

            <div className="space-y-0 mb-10">
              {itItems.map((key, i) => (
                <div key={i} className="flex items-baseline gap-4 py-4 border-b border-border/50 last:border-b-0">
                  <span className="text-[11px] text-text-muted tabular-nums">0{i + 1}</span>
                  <div>
                    <p className="text-[14px] font-medium text-text">{t(`it.${key}`)}</p>
                    <p className="text-[12px] text-text-muted mt-0.5">{t(`it.${key}desc`)}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/services/it"
              className="group inline-flex items-center gap-2 text-[13px] text-text tracking-[0.05em] hover:opacity-60 transition-opacity"
            >
              {t("it.cta")}
              <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Creative Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="py-16 lg:py-20 lg:pl-20"
          >
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-[11px] tracking-[0.2em] text-text-muted uppercase">02</span>
              <h3 className="text-[13px] tracking-[0.15em] text-text-muted uppercase">
                {t("content.title")}
              </h3>
            </div>
            <p className="text-[clamp(1.3rem,2.5vw,1.8rem)] font-semibold leading-[1.3] tracking-tight mb-6">
              {t("content.subtitle")}
            </p>
            <p className="text-[14px] text-text-secondary leading-[1.9] mb-10">
              {t("content.description")}
            </p>

            <div className="space-y-0 mb-10">
              {contentItems.map((key, i) => (
                <div key={i} className="flex items-baseline gap-4 py-4 border-b border-border/50 last:border-b-0">
                  <span className="text-[11px] text-text-muted tabular-nums">0{i + 1}</span>
                  <div>
                    <p className="text-[14px] font-medium text-text">{t(`content.${key}`)}</p>
                    <p className="text-[12px] text-text-muted mt-0.5">{t(`content.${key}desc`)}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/services/content"
              className="group inline-flex items-center gap-2 text-[13px] text-text tracking-[0.05em] hover:opacity-60 transition-opacity"
            >
              {t("content.cta")}
              <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
