"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

export default function ContactCTA() {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className="section-padding bg-bg-dark text-text-inverse relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container-lg relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="label text-primary mb-6 block">{t("sectionLabel")}</span>

          <h2 className="heading-lg mb-6 text-text-inverse">{t("title")}</h2>

          <p className="body-lg text-text-muted mb-10 whitespace-pre-line">{t("subtitle")}</p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-text-inverse text-bg-dark text-[15px] font-medium rounded-full hover:bg-primary hover:text-text-inverse transition-all duration-300"
          >
            {t("ctaButton")}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          {/* Divider */}
          <div className="h-px bg-border-dark my-12 max-w-md mx-auto" />

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a href="tel:03-4363-2456" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-text-inverse/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[12px] text-text-muted uppercase tracking-wider">{t("phone")}</p>
                <p className="text-[15px] font-medium">03-4363-2456</p>
              </div>
            </a>

            <div className="hidden sm:block w-px h-12 bg-border-dark" />

            <a href="mailto:info@weavus-group.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-text-inverse/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[12px] text-text-muted uppercase tracking-wider">{t("email")}</p>
                <p className="text-[15px] font-medium">info@weavus-group.com</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
