"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative min-h-screen flex items-center bg-bg-dark overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-dark via-bg-dark-soft to-bg-dark" />
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-bg-dark to-transparent" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="container-lg relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="label text-primary">{t("label")}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-xl text-text-inverse"
            >
              {t("title")}
              <br />
              <span className="text-primary">{t("titleAccent")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="body-lg text-text-muted max-w-xl"
            >
              {t("description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-text-inverse text-[15px] font-medium rounded-full hover:bg-primary/90 transition-all duration-300 hover:gap-3"
              >
                {t("ctaContact")}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 text-[15px] text-text-inverse font-medium border border-border-dark rounded-full hover:bg-text-inverse/5 transition-all duration-300"
              >
                {t("ctaServices")}
              </a>
            </motion.div>
          </div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-bg-dark-soft border border-border-dark rounded-2xl p-6 lg:p-8 hover:border-text-muted/30 transition-all duration-300">
                <p className="label text-text-muted mb-4">Projects</p>
                <p className="text-[52px] lg:text-[64px] font-bold text-text-inverse leading-none tracking-tight">
                  60<span className="text-primary">+</span>
                </p>
              </div>

              <div className="bg-bg-dark-soft border border-border-dark rounded-2xl p-6 lg:p-8 hover:border-text-muted/30 transition-all duration-300">
                <p className="label text-text-muted mb-4">Clients</p>
                <p className="text-[52px] lg:text-[64px] font-bold text-text-inverse leading-none tracking-tight">
                  25<span className="text-primary">+</span>
                </p>
              </div>

              <div className="col-span-2 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 lg:p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="label text-text-inverse/70 mb-4">Since</p>
                    <p className="text-[52px] lg:text-[64px] font-bold text-text-inverse leading-none tracking-tight">
                      2015
                    </p>
                    <p className="body-sm text-text-inverse/70 mt-3">
                      Trusted by enterprises
                    </p>
                  </div>
                  <div className="hidden sm:flex flex-wrap gap-2 max-w-[140px]">
                    {["Web", "Mobile", "AI", "Content"].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-text-inverse/10 text-text-inverse text-[12px] font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
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
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[11px] tracking-[0.15em] text-text-muted uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg className="w-5 h-5 text-text-muted" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
