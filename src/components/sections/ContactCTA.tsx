"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

export default function ContactCTA() {
  const t = useTranslations("Contact");

  return (
    <section className="section-padding bg-bg-dark text-text-inverse relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 border border-white/5 rounded-full hidden lg:block" />
      <div className="absolute bottom-10 left-10 w-48 h-48 border border-white/5 rounded-full hidden lg:block" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-[800px] mx-auto"
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
            <span className="w-2 h-2 bg-white/50 rounded-full" />
            <span className="text-[11px] tracking-[0.15em] text-white/60 uppercase">
              {t("sectionLabel")}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.25] tracking-tight mb-6 text-balance">
            {t("title")}
          </h2>

          {/* Subtitle */}
          <p className="text-[15px] text-white/50 leading-[1.9] mb-10 max-w-[500px] mx-auto">
            {t("subtitle")}
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-bg-dark text-[14px] font-medium tracking-[0.05em] rounded-full hover:bg-white/90 transition-all duration-300 mb-12"
          >
            {t("ctaButton")}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <a
              href="tel:03-4363-2456"
              className="flex items-center gap-3 text-[13px] text-white/40 hover:text-white/80 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              {t("phone")}
            </a>
            <a
              href="mailto:info@weavus-group.com"
              className="flex items-center gap-3 text-[13px] text-white/40 hover:text-white/80 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              {t("email")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
