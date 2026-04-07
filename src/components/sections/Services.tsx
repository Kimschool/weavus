"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

const itItems = ["service1", "service2", "service3", "service4"];
const contentItems = ["service1", "service2", "service3", "service4"];

export default function Services() {
  const t = useTranslations("Services");

  return (
    <section id="services" className="section-padding bg-bg-card">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-accent" />
            <p className="text-[11px] tracking-[0.2em] text-text-muted uppercase">
              {t("sectionLabel")}
            </p>
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.2] tracking-tight mb-6 text-balance">
            {t("title")}
          </h2>
          <p className="text-[15px] text-text-secondary leading-[1.9] max-w-[560px]">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Two Divisions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* IT Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="card-premium p-8 md:p-10 hover-lift group"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-[48px] font-light text-text-muted/30">01</span>
              <div className="w-12 h-12 rounded-xl bg-bg-soft flex items-center justify-center group-hover:bg-accent group-hover:text-text-inverse transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-[11px] tracking-[0.2em] text-text-muted uppercase mb-2">
              {t("it.title")}
            </h3>
            <p className="text-[clamp(1.3rem,2.2vw,1.6rem)] font-semibold leading-[1.3] tracking-tight mb-4">
              {t("it.subtitle")}
            </p>
            <p className="text-[14px] text-text-secondary leading-[1.9] mb-8">
              {t("it.description")}
            </p>

            <div className="space-y-0 mb-8">
              {itItems.map((key, i) => (
                <div key={i} className="flex items-start gap-4 py-4 border-b border-border last:border-b-0">
                  <span className="text-[10px] text-text-muted font-medium mt-1 tabular-nums w-4">0{i + 1}</span>
                  <div className="flex-1">
                    <p className="text-[14px] font-medium text-text mb-1">{t(`it.${key}`)}</p>
                    <p className="text-[12px] text-text-muted leading-relaxed">{t(`it.${key}desc`)}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/services/it"
              className="group/link inline-flex items-center gap-2 text-[13px] text-text font-medium tracking-[0.03em] hover:text-text-secondary transition-colors"
            >
              {t("it.cta")}
              <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Creative Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="card-premium p-8 md:p-10 hover-lift group"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-[48px] font-light text-text-muted/30">02</span>
              <div className="w-12 h-12 rounded-xl bg-bg-soft flex items-center justify-center group-hover:bg-accent group-hover:text-text-inverse transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-[11px] tracking-[0.2em] text-text-muted uppercase mb-2">
              {t("content.title")}
            </h3>
            <p className="text-[clamp(1.3rem,2.2vw,1.6rem)] font-semibold leading-[1.3] tracking-tight mb-4">
              {t("content.subtitle")}
            </p>
            <p className="text-[14px] text-text-secondary leading-[1.9] mb-8">
              {t("content.description")}
            </p>

            <div className="space-y-0 mb-8">
              {contentItems.map((key, i) => (
                <div key={i} className="flex items-start gap-4 py-4 border-b border-border last:border-b-0">
                  <span className="text-[10px] text-text-muted font-medium mt-1 tabular-nums w-4">0{i + 1}</span>
                  <div className="flex-1">
                    <p className="text-[14px] font-medium text-text mb-1">{t(`content.${key}`)}</p>
                    <p className="text-[12px] text-text-muted leading-relaxed">{t(`content.${key}desc`)}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/services/content"
              className="group/link inline-flex items-center gap-2 text-[13px] text-text font-medium tracking-[0.03em] hover:text-text-secondary transition-colors"
            >
              {t("content.cta")}
              <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
