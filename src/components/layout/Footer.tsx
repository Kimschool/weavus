"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-bg-dark text-text-inverse border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="text-[18px] font-semibold tracking-[0.15em] mb-4">
              WEAVUS
            </p>
            <p className="text-[13px] text-white/30 leading-[1.8] max-w-[300px]">
              {t("description")}
            </p>
            <div className="mt-8 text-[12px] text-white/20 space-y-1">
              <p>info@weavus-group.com</p>
              <p>03-4363-2456</p>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <p className="text-[11px] tracking-[0.2em] text-white/30 uppercase mb-5">
              {t("services")}
            </p>
            <ul className="space-y-3">
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
          <div className="md:col-span-3">
            <p className="text-[11px] tracking-[0.2em] text-white/30 uppercase mb-5">
              {t("company")}
            </p>
            <ul className="space-y-3">
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
                  href="/contact"
                  className="text-[13px] text-white/50 hover:text-white/80 transition-colors"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[11px] text-white/20 tracking-[0.05em]">{t("copyright")}</p>
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
