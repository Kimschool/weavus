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
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setHidden(y > 400 && y > lastY);
      setLastY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "bg-bg-card/95 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-[14px] font-bold text-text-inverse">W</span>
            </div>
            <span className="text-[16px] font-semibold tracking-[0.1em] text-text group-hover:text-text-secondary transition-colors">
              WEAVUS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-[13px] text-text-secondary hover:text-text transition-colors tracking-[0.03em] py-2 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Language + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1 text-[12px]">
              {Object.entries(localeLabels).map(([loc, label], i) => (
                <span key={loc} className="flex items-center">
                  {i > 0 && <span className="mx-2 text-border">|</span>}
                  <button
                    onClick={() => switchLocale(loc)}
                    className={`px-1 py-1 transition-colors tracking-wider ${
                      locale === loc
                        ? "text-text font-medium"
                        : "text-text-muted hover:text-text"
                    }`}
                  >
                    {label}
                  </button>
                </span>
              ))}
            </div>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-accent text-text-inverse text-[12px] font-medium tracking-[0.08em] rounded-full hover:bg-accent-hover transition-colors"
            >
              {t("contact")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-bg-soft transition-colors"
            aria-label="Menu"
          >
            <div className="relative w-5 h-3.5">
              <span
                className={`absolute left-0 right-0 h-[2px] bg-text rounded-full transition-all duration-300 ${
                  mobileOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-[2px] bg-text rounded-full transition-all duration-300 ${
                  mobileOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[80px] bg-bg-card transition-all duration-500 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="px-6 py-10 flex flex-col h-full">
          <nav className="flex flex-col gap-0 flex-1">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-[24px] font-medium text-text py-5 border-b border-border transition-colors hover:text-text-secondary"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-[24px] font-medium text-text py-5 border-b border-border transition-colors hover:text-text-secondary"
            >
              {t("contact")}
            </Link>
          </nav>
          <div className="flex items-center gap-4 py-8 border-t border-border">
            {Object.entries(localeLabels).map(([loc, label]) => (
              <button
                key={loc}
                onClick={() => {
                  switchLocale(loc);
                  setMobileOpen(false);
                }}
                className={`text-[14px] tracking-wider transition-colors px-3 py-2 rounded-lg ${
                  locale === loc
                    ? "text-text font-medium bg-bg-soft"
                    : "text-text-muted hover:text-text"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
