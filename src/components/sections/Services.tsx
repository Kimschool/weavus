"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

const itServices = ["service1", "service2", "service3", "service4"];
const contentServices = ["service1", "service2", "service3", "service4"];

export default function Services() {
  const t = useTranslations("Services");

  return (
    <section id="services" className="section bg-bg">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24"
        >
          <p className="text-caption text-primary mb-4">{t("sectionLabel")}</p>
          <h2 className="text-heading mb-6">{t("title")}</h2>
          <p className="text-body text-text-secondary max-w-xl whitespace-pre-line">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid-2">
          {/* IT Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="card h-full">
              <div className="p-8 md:p-10 border-b border-border">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-caption text-primary mb-3">{t("it.title")}</p>
                    <h3 className="text-title">{t("it.subtitle")}</h3>
                  </div>
                  <div className="icon-box">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                </div>
                <p className="text-body text-text-secondary">{t("it.description")}</p>
              </div>

              <div className="p-8 md:p-10">
                <ul className="space-y-5 mb-8">
                  {itServices.map((key, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="num mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <p className="text-subtitle mb-1">{t(`it.${key}`)}</p>
                        <p className="text-small text-text-secondary">{t(`it.${key}desc`)}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <Link href="/services/it" className="link-arrow">
                  {t("it.cta")}
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Creative Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card-dark h-full">
              <div className="p-8 md:p-10 border-b border-white/10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-caption text-primary mb-3">{t("content.title")}</p>
                    <h3 className="text-title">{t("content.subtitle")}</h3>
                  </div>
                  <div className="icon-box bg-white/10">
                    <svg className="!text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                    </svg>
                  </div>
                </div>
                <p className="text-body text-white/70">{t("content.description")}</p>
              </div>

              <div className="p-8 md:p-10">
                <ul className="space-y-5 mb-8">
                  {contentServices.map((key, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="num mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <p className="text-subtitle mb-1">{t(`content.${key}`)}</p>
                        <p className="text-small text-white/60">{t(`content.${key}desc`)}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <Link href="/services/content" className="link-arrow text-white hover:text-primary">
                  {t("content.cta")}
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
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
