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
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Section Header - Premium style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-32"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-accent-gold" />
            <p className="text-[11px] tracking-[0.15em] text-text-muted uppercase font-medium">
              {t("sectionLabel")}
            </p>
          </div>
          <h2 className="text-elegant mb-8 text-balance">
            {t("title")}
          </h2>
          <p className="text-[16px] text-text-secondary leading-[1.85] max-w-[620px] font-normal">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Two Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* IT Solutions Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group"
          >
            <div className="card-premium p-10 md:p-12 space-y-8 h-full hover-lift">
              {/* Header with Icon */}
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[11px] tracking-[0.2em] text-accent-gold uppercase font-semibold mb-3">
                    {t("it.title")}
                  </p>
                  <h3 className="text-[28px] md:text-[32px] font-light leading-[1.2] text-text">
                    {t("it.subtitle")}
                  </h3>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-bg-soft flex items-center justify-center group-hover:bg-accent-gold group-hover:text-bg transition-all duration-500 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
              </div>

              {/* Description */}
              <p className="text-[15px] text-text-secondary leading-[1.85]">
                {t("it.description")}
              </p>

              {/* Divider */}
              <div className="h-px bg-border" />

              {/* Service Items */}
              <div className="space-y-5">
                {itItems.map((key, i) => (
                  <div key={i} className="group/item">
                    <div className="flex items-start gap-4">
                      <span className="text-accent-gold font-light text-[18px] flex-shrink-0 w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 pt-0.5">
                        <p className="text-[14px] font-medium text-text mb-2 group-hover/item:text-accent-gold transition-colors">
                          {t(`it.${key}`)}
                        </p>
                        <p className="text-[13px] text-text-secondary leading-[1.75]">
                          {t(`it.${key}desc`)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Link */}
              <div className="pt-4">
                <Link
                  href="/services/it"
                  className="group/link inline-flex items-center gap-2 text-[13px] text-text font-medium tracking-[0.05em] hover:text-accent-gold transition-colors duration-300"
                >
                  {t("it.cta")}
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Creative Solutions Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group"
          >
            <div className="card-premium p-10 md:p-12 space-y-8 h-full hover-lift">
              {/* Header with Icon */}
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[11px] tracking-[0.2em] text-accent-gold uppercase font-semibold mb-3">
                    {t("content.title")}
                  </p>
                  <h3 className="text-[28px] md:text-[32px] font-light leading-[1.2] text-text">
                    {t("content.subtitle")}
                  </h3>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-bg-soft flex items-center justify-center group-hover:bg-accent-gold group-hover:text-bg transition-all duration-500 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                </div>
              </div>

              {/* Description */}
              <p className="text-[15px] text-text-secondary leading-[1.85]">
                {t("content.description")}
              </p>

              {/* Divider */}
              <div className="h-px bg-border" />

              {/* Service Items */}
              <div className="space-y-5">
                {contentItems.map((key, i) => (
                  <div key={i} className="group/item">
                    <div className="flex items-start gap-4">
                      <span className="text-accent-gold font-light text-[18px] flex-shrink-0 w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 pt-0.5">
                        <p className="text-[14px] font-medium text-text mb-2 group-hover/item:text-accent-gold transition-colors">
                          {t(`content.${key}`)}
                        </p>
                        <p className="text-[13px] text-text-secondary leading-[1.75]">
                          {t(`content.${key}desc`)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Link */}
              <div className="pt-4">
                <Link
                  href="/services/content"
                  className="group/link inline-flex items-center gap-2 text-[13px] text-text font-medium tracking-[0.05em] hover:text-accent-gold transition-colors duration-300"
                >
                  {t("content.cta")}
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
