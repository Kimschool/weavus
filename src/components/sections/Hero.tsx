"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0A0A0A 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} 
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <div className="lg:col-span-7">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-bg-card border border-border rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-[12px] tracking-[0.1em] text-text-secondary uppercase">
                IT Solutions & Creative
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.2rem,5.5vw,4.5rem)] font-semibold leading-[1.1] tracking-tight text-text mb-8"
            >
              <span className="text-balance">
                {t("title")}
              </span>
              <br />
              <span className="text-text-secondary">
                {t("titleAccent")}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-[15px] md:text-[16px] text-text-secondary leading-[1.9] max-w-[520px] mb-10"
            >
              {t("subtitle")}
              <br />
              {t("description")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-text-inverse text-[13px] font-medium tracking-[0.05em] rounded-full hover:bg-accent-hover transition-all duration-300"
              >
                {t("ctaContact")}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-4 text-[13px] text-text font-medium tracking-[0.05em] hover:text-text-secondary transition-colors"
              >
                {t("ctaServices")}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right - Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Stat Cards */}
              <div className="card-premium p-6 hover-lift">
                <p className="text-[11px] tracking-[0.15em] text-text-muted uppercase mb-3">Projects</p>
                <p className="text-[clamp(2rem,4vw,3rem)] font-semibold text-text leading-none">60+</p>
              </div>
              <div className="card-premium p-6 hover-lift">
                <p className="text-[11px] tracking-[0.15em] text-text-muted uppercase mb-3">Clients</p>
                <p className="text-[clamp(2rem,4vw,3rem)] font-semibold text-text leading-none">25+</p>
              </div>
              <div className="card-premium p-6 hover-lift col-span-2">
                <p className="text-[11px] tracking-[0.15em] text-text-muted uppercase mb-3">Since</p>
                <p className="text-[clamp(2rem,4vw,3rem)] font-semibold text-text leading-none">2015</p>
                <p className="text-[13px] text-text-secondary mt-2">Trusted by Japanese enterprises</p>
              </div>
              {/* Visual Block */}
              <div className="col-span-2 bg-bg-dark rounded-xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-20 h-20 border border-white/20 rounded-lg" />
                  <div className="absolute bottom-4 right-4 w-16 h-16 border border-white/20 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-2xl rotate-45" />
                </div>
                <div className="relative z-10">
                  <p className="text-[11px] tracking-[0.15em] text-white/50 uppercase mb-2">Services</p>
                  <p className="text-white font-medium">Web / Mobile / AI / Contents</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] text-text-muted uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-border"
        />
      </motion.div>
    </section>
  );
}
