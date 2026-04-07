"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

const services = ["app", "web", "ai", "hr"];

export default function ITServicesPage() {
  const t = useTranslations("ITServices");

  return (
    <div>
      {/* Hero */}
      <section className="pt-40 pb-20 md:pb-32 bg-bg-dark text-text-inverse">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] tracking-[0.3em] text-white/30 uppercase mb-6">
              Services — 01
            </p>
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.15] tracking-tight mb-6">
              {t("title")}
            </h1>
            <p className="text-[15px] text-white/50 max-w-[600px] whitespace-pre-line leading-[1.9]">
              {t("description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-bg">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          {services.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="py-16 border-b border-border last:border-b-0"
            >
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-[11px] text-text-muted tracking-[0.2em]">0{i + 1}</span>
                <h2 className="text-[clamp(1.3rem,2.5vw,1.6rem)] font-semibold tracking-tight">
                  {t(`${key}.title`)}
                </h2>
              </div>
              <p className="text-[14px] text-text-secondary leading-[1.9] mb-8 max-w-[700px]">
                {t(`${key}.description`)}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t(`${key}.features`)
                  .split(",")
                  .map((feature: string, fi: number) => (
                    <div
                      key={fi}
                      className="flex items-center gap-3 text-[13px] text-text-secondary"
                    >
                      <span className="w-1 h-1 bg-text-muted rounded-full flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}

          {/* IT Dispatch - Subtle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 pt-12 border-t border-border"
          >
            <p className="text-[11px] tracking-[0.2em] text-text-muted uppercase mb-8">
              {t("otherTitle")}
            </p>
            <div className="bg-bg-soft rounded-lg p-8">
              <h3 className="text-[15px] font-medium mb-3">
                {t("dispatch.title")}
              </h3>
              <p className="text-[13px] text-text-secondary leading-[1.8] mb-3">
                {t("dispatch.description")}
              </p>
              <p className="text-[11px] text-text-muted">
                {t("dispatch.license")}
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-accent text-text-inverse text-[13px] font-medium tracking-[0.08em] rounded-full hover:bg-accent-soft transition-colors"
            >
              お問い合わせ
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
