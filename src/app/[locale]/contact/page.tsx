"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const tContact = useTranslations("Contact");

  const typeOptions = [
    { value: "app", label: t("typeOptions.app") },
    { value: "web", label: t("typeOptions.web") },
    { value: "ai", label: t("typeOptions.ai") },
    { value: "content", label: t("typeOptions.content") },
    { value: "other", label: t("typeOptions.other") },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="pt-40 pb-16 bg-bg">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] tracking-[0.3em] text-text-muted uppercase mb-4">
              Contact
            </p>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight mb-4">
              {t("title")}
            </h1>
            <p className="text-[15px] text-text-secondary">{t("subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-32 bg-bg">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <form className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[12px] text-text-muted tracking-[0.08em] mb-3">
                      {t("companyName")}
                      <span className="text-text-muted ml-2 text-[10px]">{t("required")}</span>
                    </label>
                    <input
                      type="text"
                      placeholder={t("companyPlaceholder")}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-[14px] text-text placeholder-text-muted/50 focus:outline-none focus:border-text transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] text-text-muted tracking-[0.08em] mb-3">
                      {t("name")}
                      <span className="text-text-muted ml-2 text-[10px]">{t("required")}</span>
                    </label>
                    <input
                      type="text"
                      placeholder={t("namePlaceholder")}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-[14px] text-text placeholder-text-muted/50 focus:outline-none focus:border-text transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[12px] text-text-muted tracking-[0.08em] mb-3">
                      {t("email")}
                      <span className="text-text-muted ml-2 text-[10px]">{t("required")}</span>
                    </label>
                    <input
                      type="email"
                      placeholder={t("emailPlaceholder")}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-[14px] text-text placeholder-text-muted/50 focus:outline-none focus:border-text transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] text-text-muted tracking-[0.08em] mb-3">
                      {t("phone")}
                    </label>
                    <input
                      type="tel"
                      placeholder={t("phonePlaceholder")}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-[14px] text-text placeholder-text-muted/50 focus:outline-none focus:border-text transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] text-text-muted tracking-[0.08em] mb-3">
                    {t("type")}
                    <span className="text-text-muted ml-2 text-[10px]">{t("required")}</span>
                  </label>
                  <select className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-[14px] text-text focus:outline-none focus:border-text transition-colors appearance-none cursor-pointer">
                    <option value="">---</option>
                    {typeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] text-text-muted tracking-[0.08em] mb-3">
                    {t("message")}
                    <span className="text-text-muted ml-2 text-[10px]">{t("required")}</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder={t("messagePlaceholder")}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-[14px] text-text placeholder-text-muted/50 focus:outline-none focus:border-text transition-colors resize-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="px-10 py-4 bg-accent text-text-inverse text-[13px] font-medium tracking-[0.08em] rounded-full hover:bg-accent-soft transition-colors"
                  >
                    {t("submit")}
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 lg:col-start-9"
            >
              <div className="sticky top-28">
                <p className="text-[11px] tracking-[0.2em] text-text-muted uppercase mb-8">
                  {t("info")}
                </p>

                <div className="space-y-8 border-t border-border pt-8">
                  <div>
                    <p className="text-[11px] text-text-muted tracking-[0.1em] uppercase mb-2">Email</p>
                    <a
                      href={`mailto:${tContact("email")}`}
                      className="text-[14px] text-text hover:opacity-60 transition-opacity"
                    >
                      {tContact("email")}
                    </a>
                  </div>
                  <div>
                    <p className="text-[11px] text-text-muted tracking-[0.1em] uppercase mb-2">Phone</p>
                    <a
                      href={`tel:${tContact("phone")}`}
                      className="text-[14px] text-text hover:opacity-60 transition-opacity"
                    >
                      {tContact("phone")}
                    </a>
                  </div>
                  <div>
                    <p className="text-[11px] text-text-muted tracking-[0.1em] uppercase mb-2">Address</p>
                    <p className="text-[13px] text-text-secondary leading-[1.8]">
                      〒160-0022<br />
                      東京都新宿区新宿１-19-10<br />
                      サンモールクレスト205号
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
