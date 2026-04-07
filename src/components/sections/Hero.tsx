"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-32 overflow-hidden bg-bg-dark">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-dark/95 to-bg-dark-soft" />

      {/* Minimal geometric accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.3) 60px, rgba(255,255,255,0.3) 61px)`,
        }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[11px] tracking-[0.3em] text-white/40 uppercase mb-8 md:mb-12"
        >
          IT Solutions & Creative Services
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.15] tracking-tight text-white mb-8 md:mb-12 max-w-[900px]"
        >
          {t("title")}
          <br />
          {t("titleAccent")}
        </motion.h1>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-16"
        >
          <p className="text-[15px] md:text-[16px] text-white/50 leading-[1.9] max-w-[500px]">
            {t("subtitle")}
            <br />
            {t("description")}
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="group flex items-center gap-3 px-8 py-4 bg-white text-bg-dark text-[13px] font-medium tracking-[0.08em] rounded-full hover:bg-white/90 transition-all"
            >
              {t("ctaContact")}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="#services"
              className="text-[13px] text-white/40 hover:text-white/80 tracking-[0.08em] transition-colors hidden md:block"
            >
              {t("ctaServices")}
            </a>
          </div>
        </motion.div>

        {/* Scroll line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-6 lg:left-12 w-[1px] h-20 bg-white/20 origin-top hidden md:block"
        />
      </div>
    </section>
  );
}
