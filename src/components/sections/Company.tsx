"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Company() {
  const t = useTranslations("Company");

  const rows = [
    { label: t("nameLabel"), value: t("name") },
    { label: t("ceoLabel"), value: t("ceo") },
    { label: t("establishedLabel"), value: t("established") },
    { label: t("capitalLabel"), value: t("capital") },
    { label: t("employeesLabel"), value: t("employees") },
    { label: t("addressLabel"), value: t("address") },
    { label: t("businessLabel"), value: t("business") },
  ];

  return (
    <section id="company" className="section-padding bg-bg">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-accent" />
                <p className="text-[11px] tracking-[0.2em] text-text-muted uppercase">
                  {t("sectionLabel")}
                </p>
              </div>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.2] tracking-tight mb-10">
                {t("title")}
              </h2>
              
              {/* Mission Card */}
              <div className="card-premium p-8 bg-bg-card">
                <p className="text-[11px] tracking-[0.2em] text-text-muted uppercase mb-4">
                  {t("missionLabel")}
                </p>
                <p className="text-[clamp(1.1rem,2vw,1.4rem)] font-medium tracking-tight leading-[1.5] text-text">
                  {t("mission")}
                </p>
              </div>

              {/* Quick Contact */}
              <div className="mt-8 p-6 bg-bg-dark rounded-xl">
                <p className="text-[11px] tracking-[0.2em] text-white/40 uppercase mb-4">Contact</p>
                <div className="space-y-3">
                  <a href="mailto:info@weavus-group.com" className="flex items-center gap-3 text-[13px] text-white/70 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    info@weavus-group.com
                  </a>
                  <a href="tel:03-4363-2456" className="flex items-center gap-3 text-[13px] text-white/70 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    03-4363-2456
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="card-premium overflow-hidden">
              {rows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-1 sm:grid-cols-[160px_1fr] ${i !== rows.length - 1 ? 'border-b border-border' : ''}`}
                >
                  <div className="px-6 pt-5 pb-2 sm:py-5 text-[12px] text-text-muted tracking-[0.05em] font-medium bg-bg-soft/50">
                    {row.label}
                  </div>
                  <div className="px-6 pb-5 sm:py-5 text-[14px] text-text leading-[1.8]">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
