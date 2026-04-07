"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

export default function ContactCTA() {
  const t = useTranslations("Contact");

  return (
    <section className="section-padding bg-bg-dark text-text-inverse">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left */}
          <div>
            <p className="text-[11px] tracking-[0.3em] text-white/30 uppercase mb-6">
              {t("sectionLabel")}
            </p>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-semibold leading-[1.3] tracking-tight mb-6">
              {t("title")}
            </h2>
            <p className="text-[14px] text-white/50 leading-[1.9] whitespace-pre-line">
              {t("subtitle")}
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-8">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-bg-dark text-[14px] font-medium tracking-[0.08em] rounded-full hover:bg-white/90 transition-all self-start"
            >
              {t("ctaButton")}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-[13px] text-white/40">
              <a
                href={`tel:${t("phone")}`}
                className="hover:text-white/80 transition-colors tracking-[0.05em]"
              >
                Tel. {t("phone")}
              </a>
              <a
                href={`mailto:${t("email")}`}
                className="hover:text-white/80 transition-colors tracking-[0.05em]"
              >
                {t("email")}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
