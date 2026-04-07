"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

export default function ContactCTA() {
  const t = useTranslations("Contact");

  return (
    <section className="section-padding bg-bg-dark text-text-inverse relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} 
        />
      </div>

      {/* Subtle accent lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent hidden lg:block" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent hidden lg:block" />

      <div className="max-w-[1100px] mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-10"
        >
          {/* Label */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-accent-gold/50" />
            <span className="text-[11px] tracking-[0.15em] text-white/50 uppercase font-medium">
              {t("sectionLabel")}
            </span>
            <div className="h-px w-12 bg-accent-gold/50" />
          </div>

          {/* Main Headline */}
          <div>
            <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-light leading-[1.2] tracking-tight mb-6 text-balance">
              {t("title")}
            </h2>
            <p className="text-[16px] text-white/60 leading-[1.85] max-w-[620px] mx-auto font-normal">
              {t("subtitle")}
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 px-12 py-5 bg-white text-bg-dark text-[14px] font-medium tracking-[0.05em] rounded-xl hover:bg-accent-gold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            {t("ctaButton")}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 pt-4">
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              href="tel:03-4363-2456"
              className="flex items-center gap-4 group hover:opacity-70 transition-opacity"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-accent-gold group-hover:text-bg-dark transition-all duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] text-white/40 uppercase tracking-[0.08em] font-semibold mb-1">
                  {t("phone")}
                </p>
                <p className="text-[14px] text-white/80 font-medium">03-4363-2456</p>
              </div>
            </motion.a>

            <div className="hidden sm:block w-px h-12 bg-white/10" />

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              href="mailto:info@weavus-group.com"
              className="flex items-center gap-4 group hover:opacity-70 transition-opacity"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-accent-gold group-hover:text-bg-dark transition-all duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] text-white/40 uppercase tracking-[0.08em] font-semibold mb-1">
                  {t("email")}
                </p>
                <p className="text-[14px] text-white/80 font-medium">info@weavus-group.com</p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
