"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Strengths() {
  const t = useTranslations("Strengths");

  const stats = [
    { value: 60, label: t("stat1"), unit: t("stat1unit") },
    { value: 25, label: t("stat2"), unit: t("stat2unit") },
    { value: 2015, label: t("stat3"), unit: t("stat3unit") },
    { value: 100, label: t("stat4"), unit: t("stat4unit") },
  ];

  const strengths = [
    { key: "strength1", icon: "quality" },
    { key: "strength2", icon: "global" },
    { key: "strength3", icon: "speed" },
  ];

  return (
    <section className="section-padding bg-bg">
      <div className="container-lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="label text-primary mb-4 block">{t("sectionLabel")}</span>
          <h2 className="heading-lg">{t("title")}</h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-6 lg:p-8 text-center"
            >
              <p className="label text-text-muted mb-4">{stat.label}</p>
              <p className="text-[40px] lg:text-[52px] font-bold text-text leading-none tracking-tight">
                <AnimatedCounter target={stat.value} />
                <span className="text-primary text-[16px] lg:text-[18px] font-medium ml-1">
                  {stat.unit}
                </span>
              </p>
            </motion.div>
          ))}
        </div>

        {/* Strengths Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {strengths.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="card-dark p-8 lg:p-10 h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                  {s.icon === "quality" && (
                    <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  )}
                  {s.icon === "global" && (
                    <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  )}
                  {s.icon === "speed" && (
                    <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  )}
                </div>

                <span className="label text-text-muted mb-3 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[20px] font-semibold text-text-inverse mb-4">
                  {t(s.key)}
                </h3>
                <p className="body-md text-text-muted">
                  {t(`${s.key}desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
