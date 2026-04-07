"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

const localeLabels: Record<string, string> = {
  ja: "JP",
  ko: "KR",
  en: "EN",
};

export default function Header() {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as "ja" | "ko" | "en" });
  };

  const navItems = [
    { href: "/#services", label: t("services") },
    { href: "/#portfolio", label: t("portfolio") },
    { href: "/#company", label: t("company") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-lg">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-[22px] font-bold tracking-[-0.02em] text-text">
              WEAVUS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] text-text-secondary font-medium hover:text-text transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Language Selector */}
            <div className="flex items-center gap-1 text-[13px]">
              {Object.entries(localeLabels).map(([loc, label], i) => (
                <span key={loc} className="flex items-center">
                  {i > 0 && <span className="text-border mx-1">/</span>}
                  <button
                    onClick={() => switchLocale(loc)}
                    className={`px-1 py-1 transition-colors duration-200 font-medium ${
                      locale === loc
                        ? "text-text"
                        : "text-text-muted hover:text-text"
                    }`}
                  >
                    {label}
                  </button>
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="btn-primary py-3 px-6 text-[14px]"
            >
              {t("contact")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center"
            aria-label="Menu"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-[2px] bg-text rounded-full transition-all duration-300 origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[9px]" : ""
                }`}
              />
              <span
                className={`block h-[2px] bg-text rounded-full transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] bg-text rounded-full transition-all duration-300 origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-bg transition-all duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="container-lg py-8 flex flex-col h-full">
          <nav className="flex flex-col flex-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-[24px] font-semibold text-text py-5 border-b border-border hover:text-text-secondary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-[24px] font-semibold text-text py-5 border-b border-border hover:text-text-secondary transition-colors"
            >
              {t("contact")}
            </Link>
          </nav>
          
          <div className="py-8 border-t border-border">
            <div className="flex items-center gap-4">
              {Object.entries(localeLabels).map(([loc, label]) => (
                <button
                  key={loc}
                  onClick={() => {
                    switchLocale(loc);
                    setMobileOpen(false);
                  }}
                  className={`text-[14px] font-medium px-4 py-2 rounded-full transition-all ${
                    locale === loc
                      ? "bg-accent text-text-inverse"
                      : "bg-bg-muted text-text-secondary hover:text-text"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
