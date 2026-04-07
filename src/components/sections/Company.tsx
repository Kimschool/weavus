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
      <div className="container-lg">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left - Header & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-32 space-y-8">
              <div>
                <span className="label text-primary mb-4 block">{t("sectionLabel")}</span>
                <h2 className="heading-lg">{t("title")}</h2>
              </div>

              {/* Mission Card */}
              <div className="card p-8">
                <span className="label text-primary mb-3 block">{t("missionLabel")}</span>
                <p className="text-[20px] font-medium text-text leading-relaxed">
                  {t("mission")}
                </p>
              </div>

              {/* Quick Contact */}
              <div className="card-dark p-8 space-y-6">
                <span className="label text-text-muted">Quick Contact</span>
                <div className="space-y-4">
                  <a href="mailto:info@weavus-group.com" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-text-inverse/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <svg className="w-5 h-5 text-text-inverse" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[12px] text-text-muted">Email</p>
                      <p className="text-[14px] text-text-inverse">info@weavus-group.com</p>
                    </div>
                  </a>
                  <a href="tel:03-4363-2456" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-text-inverse/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <svg className="w-5 h-5 text-text-inverse" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[12px] text-text-muted">Phone</p>
                      <p className="text-[14px] text-text-inverse">03-4363-2456</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Company Info Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <div className="card overflow-hidden">
              {rows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-1 sm:grid-cols-[160px_1fr] hover:bg-bg-soft transition-colors ${
                    i !== rows.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="px-6 py-5 sm:py-6 text-[12px] text-text-muted tracking-wider font-semibold uppercase bg-bg-muted/50">
                    {row.label}
                  </div>
                  <div className="px-6 py-5 sm:py-6 body-md text-text">
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
