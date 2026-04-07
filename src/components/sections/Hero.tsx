"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg pt-20">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #1A1A1A 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }} 
        />
      </div>

      {/* Decorative lines - right side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 1px, #1A1A1A 1px, #1A1A1A 2px)`,
          backgroundSize: '40px 100%'
        }} />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 w-full py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Left - Premium Text Content */}
          <div className="lg:col-span-6 space-y-12">
            {/* Elegant label with line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-8 bg-accent-gold" />
              <span className="text-[11px] tracking-[0.15em] text-text-secondary uppercase font-medium">
                {t("label")}
              </span>
            </motion.div>

            {/* Main headline - Large & Elegant */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <h1 className="text-elegant leading-[1.15]">
                <span className="block text-text font-semibold">
                  {t("title")}
                </span>
                <span className="block text-text-secondary font-normal mt-3">
                  {t("titleAccent")}
                </span>
              </h1>
            </motion.div>

            {/* Elegant divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="h-px w-12 bg-accent-gold origin-left"
            />

            {/* Description text - refined */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 max-w-[480px]"
            >
              <p className="text-[15px] text-text-secondary leading-[1.85] font-normal">
                {t("subtitle")}
              </p>
              <p className="text-[15px] text-text-secondary leading-[1.85] font-normal">
                {t("description")}
              </p>
            </motion.div>

            {/* CTAs - Premium styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-accent text-text-inverse text-[13px] font-medium tracking-[0.05em] rounded-lg hover:bg-accent-hover transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">{t("ctaContact")}</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-4 text-[13px] text-text font-medium tracking-[0.05em] hover:text-accent-gold transition-all duration-300 group"
              >
                {t("ctaServices")}
                <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right - Elegant Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {/* Projects Stat */}
                <div className="card-premium p-8 text-center hover-lift">
                  <p className="text-[10px] tracking-[0.2em] text-text-muted uppercase mb-4 font-medium">Projects</p>
                  <p className="text-[2.5rem] font-light text-text leading-none mb-2">60<span className="text-accent-gold font-medium">+</span></p>
                  <div className="h-px bg-border mt-4" />
                </div>
                
                {/* Clients Stat */}
                <div className="card-premium p-8 text-center hover-lift">
                  <p className="text-[10px] tracking-[0.2em] text-text-muted uppercase mb-4 font-medium">Clients</p>
                  <p className="text-[2.5rem] font-light text-text leading-none mb-2">25<span className="text-accent-gold font-medium">+</span></p>
                  <div className="h-px bg-border mt-4" />
                </div>

                {/* Years Stat */}
                <div className="card-premium p-8 text-center hover-lift">
                  <p className="text-[10px] tracking-[0.2em] text-text-muted uppercase mb-4 font-medium">Since</p>
                  <p className="text-[2.5rem] font-light text-text leading-none">2015</p>
                  <div className="h-px bg-border mt-4" />
                </div>
              </div>

              {/* Trust statement */}
              <div className="pt-2 border-t border-border">
                <p className="text-[12px] text-text-secondary font-normal tracking-[0.05em]">
                  信頼される日本企業のパートナー
                </p>
              </div>

              {/* Services highlight */}
              <div className="card-premium p-8 border-[1.5px] border-accent-gold/20 bg-gradient-to-br from-bg-card to-bg-soft hover-lift">
                <div className="space-y-3">
                  <p className="text-[11px] tracking-[0.2em] text-accent-gold uppercase font-semibold">Core Services</p>
                  <div className="space-y-2">
                    <p className="text-[14px] text-text font-medium">Web Development</p>
                    <p className="text-[14px] text-text font-medium">Mobile Applications</p>
                    <p className="text-[14px] text-text font-medium">AI Solutions</p>
                    <p className="text-[14px] text-text font-medium">Content Creation</p>
                  </div>
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
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.2em] text-text-muted uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-border"
        />
      </motion.div>
    </section>
  );
}
