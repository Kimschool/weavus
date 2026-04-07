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
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left - Header & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="lg:sticky lg:top-32 space-y-12">
              {/* Header */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-accent-gold" />
                  <p className="text-[11px] tracking-[0.15em] text-text-muted uppercase font-medium">
                    {t("sectionLabel")}
                  </p>
                </div>
                <h2 className="text-elegant text-balance">
                  {t("title")}
                </h2>
              </div>
              
              {/* Mission Card */}
              <div className="card-premium p-10 space-y-4 hover-lift">
                <p className="text-[11px] tracking-[0.2em] text-accent-gold uppercase font-semibold">
                  {t("missionLabel")}
                </p>
                <p className="text-[20px] font-light leading-[1.5] text-text">
                  {t("mission")}
                </p>
              </div>

              {/* Contact Info Card */}
              <div className="card-premium bg-gradient-to-br from-bg-dark to-bg-dark-soft text-text-inverse p-8 space-y-6 hover-lift">
                <p className="text-[11px] tracking-[0.2em] text-white/40 uppercase font-semibold">
                  Quick Contact
                </p>
                <div className="space-y-4">
                  <a 
                    href="mailto:info@weavus-group.com" 
                    className="flex items-start gap-4 group/link hover:opacity-70 transition-opacity"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover/link:bg-accent-gold group-hover/link:text-bg-dark transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[12px] text-white/50 mb-1">Email</p>
                      <p className="text-[14px] text-white/80 font-medium">info@weavus-group.com</p>
                    </div>
                  </a>
                  <a 
                    href="tel:03-4363-2456" 
                    className="flex items-start gap-4 group/link hover:opacity-70 transition-opacity"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover/link:bg-accent-gold group-hover/link:text-bg-dark transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[12px] text-white/50 mb-1">Phone</p>
                      <p className="text-[14px] text-white/80 font-medium">03-4363-2456</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Company Info Table */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="card-premium overflow-hidden">
              {rows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-1 sm:grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] hover:bg-bg-soft transition-colors duration-300 ${
                    i !== rows.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  <div className="px-6 sm:px-8 py-6 sm:py-7 text-[12px] text-text-muted tracking-[0.08em] font-semibold uppercase bg-bg-soft/50">
                    {row.label}
                  </div>
                  <div className="px-6 sm:px-8 py-6 sm:py-7 text-[14px] text-text leading-[1.75] font-normal">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-12 p-8 card-premium bg-gradient-to-r from-bg-soft to-bg-muted"
            >
              <p className="text-[13px] text-text-secondary leading-[1.9]">
                Weavus는 일본 기업의 디지털 혁신을 선도하는 IT와 크리에이티브 파트너입니다. 20여 년의 경험과 신뢰할 수 있는 기술로, 귀사의 비즈니스 목표 달성을 함께 하겠습니다.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
