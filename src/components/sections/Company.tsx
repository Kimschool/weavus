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
    <section id="company" className="section-padding bg-bg-soft">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <p className="text-[11px] tracking-[0.3em] text-text-muted uppercase mb-4">
              {t("sectionLabel")}
            </p>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.2] tracking-tight mb-8">
              {t("title")}
            </h2>
            <div className="mt-12">
              <p className="text-[11px] tracking-[0.2em] text-text-muted uppercase mb-2">
                {t("missionLabel")}
              </p>
              <p className="text-[clamp(1.3rem,2.5vw,1.8rem)] font-semibold tracking-tight leading-[1.3]">
                {t("mission")}
              </p>
            </div>
          </motion.div>

          {/* Right - Table */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <div className="border-t border-border">
              {rows.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 sm:grid-cols-[140px_1fr] border-b border-border"
                >
                  <div className="pt-5 pb-1 sm:py-5 text-[12px] text-text-muted tracking-[0.05em]">
                    {row.label}
                  </div>
                  <div className="pb-5 sm:py-5 text-[14px] text-text leading-[1.8]">
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
