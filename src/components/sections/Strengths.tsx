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
    { key: "strength1" },
    { key: "strength2" },
    { key: "strength3" },
  ];

  return (
    <section className="section-padding bg-bg-soft">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28"
        >
          <p className="text-[11px] tracking-[0.3em] text-text-muted uppercase mb-4">
            {t("sectionLabel")}
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.2] tracking-tight">
            {t("title")}
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-20 md:mb-28">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-bg-soft p-8 md:p-12 text-center"
            >
              <div className="text-[clamp(2.5rem,5vw,4rem)] font-light tracking-tight text-text leading-none mb-3">
                <AnimatedCounter target={stat.value} />
                <span className="text-[clamp(1rem,2vw,1.5rem)] text-text-muted ml-0.5">
                  {stat.unit}
                </span>
              </div>
              <p className="text-[12px] text-text-muted tracking-[0.1em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Strength Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {strengths.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-bg-soft p-8 md:p-12"
            >
              <span className="text-[11px] text-text-muted tracking-[0.2em]">0{i + 1}</span>
              <h3 className="text-[18px] font-semibold mt-4 mb-4 tracking-tight">{t(s.key)}</h3>
              <p className="text-[13px] text-text-secondary leading-[1.9]">
                {t(`${s.key}desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
