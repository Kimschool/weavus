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
      <div className="container-lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-24"
        >
          <span className="label text-primary mb-4 block">{t("sectionLabel")}</span>
          <h2 className="heading-lg mb-6">{t("title")}</h2>
          <p className="body-lg text-text-secondary max-w-2xl whitespace-pre-line">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* IT Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="card h-full p-8 lg:p-10 flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="label text-primary">{t("it.title")}</span>
                  <h3 className="heading-sm mt-2">{t("it.subtitle")}</h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
              </div>

              <p className="body-md text-text-secondary mb-8">{t("it.description")}</p>

              <div className="divider mb-8" />

              <div className="space-y-6 flex-1">
                {itItems.map((key, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-primary font-medium text-sm w-6 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-medium text-text mb-1">{t(`it.${key}`)}</p>
                      <p className="body-sm text-text-secondary">{t(`it.${key}desc`)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 mt-auto">
                <Link href="/services/it" className="link-arrow text-[15px] text-text hover:text-primary transition-colors">
                  {t("it.cta")}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Creative Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-dark h-full p-8 lg:p-10 flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="label text-primary">{t("content.title")}</span>
                  <h3 className="heading-sm mt-2 text-text-inverse">{t("content.subtitle")}</h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                </div>
              </div>

              <p className="body-md text-text-muted mb-8">{t("content.description")}</p>

              <div className="h-px bg-border-dark mb-8" />

              <div className="space-y-6 flex-1">
                {contentItems.map((key, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-primary font-medium text-sm w-6 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-medium text-text-inverse mb-1">{t(`content.${key}`)}</p>
                      <p className="body-sm text-text-muted">{t(`content.${key}desc`)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 mt-auto">
                <Link href="/services/content" className="link-arrow text-[15px] text-text-inverse hover:text-primary transition-colors">
                  {t("content.cta")}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
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
