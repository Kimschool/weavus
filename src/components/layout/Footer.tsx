"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-bg-dark text-text-inverse">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[14px] font-bold text-bg-dark">W</span>
              </div>
              <span className="text-[16px] font-semibold tracking-[0.1em]">
                WEAVUS
              </span>
            </div>
            <p className="text-[13px] text-white/40 leading-[1.8] max-w-[320px] mb-8">
              {t("description")}
            </p>
            <div className="space-y-3 text-[13px] text-white/30">
              <a href="mailto:info@weavus-group.com" className="flex items-center gap-3 hover:text-white/60 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                info@weavus-group.com
              </a>
              <a href="tel:03-4363-2456" className="flex items-center gap-3 hover:text-white/60 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                03-4363-2456
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <p className="text-[11px] tracking-[0.2em] text-white/30 uppercase mb-6">
              {t("services")}
            </p>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/services/it"
                  className="text-[13px] text-white/50 hover:text-white/80 transition-colors"
                >
                  {t("itSolutions")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/content"
                  className="text-[13px] text-white/50 hover:text-white/80 transition-colors"
                >
                  {t("creative")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.2em] text-white/30 uppercase mb-6">
              {t("company")}
            </p>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/#company"
                  className="text-[13px] text-white/50 hover:text-white/80 transition-colors"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#portfolio"
                  className="text-[13px] text-white/50 hover:text-white/80 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[13px] text-white/50 hover:text-white/80 transition-colors"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.2em] text-white/30 uppercase mb-6">
              Get Started
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-bg-dark text-[12px] font-medium tracking-[0.05em] rounded-full hover:bg-white/90 transition-colors"
            >
              Contact Us
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[11px] text-white/20 tracking-[0.03em]">{t("copyright")}</p>
          <a
            href="https://weavus-group.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-white/20 hover:text-white/40 transition-colors"
          >
            {t("privacy")}
          </a>
        </div>
      </div>
    </footer>
  );
}
