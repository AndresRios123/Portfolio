"use client";

import { GraduationCap, CalendarDays, MapPin, BookOpen } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import { academicExperience } from "@/app/data/academicData";
import { DM_Serif_Display } from "next/font/google";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
});

// ── Variants ──────────────────────────────────────────────────────────────────

const headerStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

// ── Accent palette ────────────────────────────────────────────────────────────

const accents = [
  {
    dot: "bg-violet-500 dark:bg-blue-400",
    dotGlow:
      "shadow-[0_0_0_6px_rgba(139,92,246,0.12)] dark:shadow-[0_0_0_6px_rgba(59,130,246,0.15)]",
    dotPulse: "bg-violet-400/20 dark:bg-blue-400/15",
    stripe:
      "from-violet-500/10 to-transparent dark:from-blue-500/10 dark:to-transparent",
    leftBorder: "border-violet-200 dark:border-blue-500/30",
    year:
      "bg-violet-50 text-violet-600 border-violet-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20",
    icon: "text-violet-500 dark:text-blue-400",
    iconBg: "bg-violet-50 dark:bg-blue-500/10",
    badge:
      "bg-violet-50 text-violet-600 border-violet-100 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20",
    dot2: "bg-violet-400 dark:bg-blue-400",
    title: "group-hover:text-violet-700 dark:group-hover:text-blue-300",
    line: "bg-violet-200 dark:bg-blue-500/40",
  },
  {
    dot: "bg-emerald-500 dark:bg-emerald-400",
    dotGlow:
      "shadow-[0_0_0_6px_rgba(16,185,129,0.12)] dark:shadow-[0_0_0_6px_rgba(52,211,153,0.15)]",
    dotPulse: "bg-emerald-400/20 dark:bg-emerald-400/15",
    stripe:
      "from-emerald-500/10 to-transparent dark:from-emerald-500/10 dark:to-transparent",
    leftBorder: "border-emerald-200 dark:border-emerald-500/30",
    year:
      "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20",
    icon: "text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-50 dark:bg-emerald-500/10",
    badge:
      "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20",
    dot2: "bg-emerald-400 dark:bg-emerald-400",
    title: "group-hover:text-emerald-700 dark:group-hover:text-emerald-300",
    line: "bg-emerald-200 dark:bg-emerald-500/40",
  },
  {
    dot: "bg-amber-500 dark:bg-amber-400",
    dotGlow:
      "shadow-[0_0_0_6px_rgba(245,158,11,0.12)] dark:shadow-[0_0_0_6px_rgba(251,191,36,0.15)]",
    dotPulse: "bg-amber-400/20 dark:bg-amber-400/15",
    stripe:
      "from-amber-500/10 to-transparent dark:from-amber-500/10 dark:to-transparent",
    leftBorder: "border-amber-200 dark:border-amber-500/30",
    year:
      "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20",
    icon: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-50 dark:bg-amber-500/10",
    badge:
      "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20",
    dot2: "bg-amber-400 dark:bg-amber-400",
    title: "group-hover:text-amber-700 dark:group-hover:text-amber-300",
    line: "bg-amber-200 dark:bg-amber-500/40",
  },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function AcademicExperience() {
  const t = useTranslations("experience");

  return (
    <section
      id="experiencia"
      className={`${dmSerif.variable} relative bg-slate-100 px-6 py-28 transition-colors duration-300 md:px-10 lg:px-16 dark:bg-slate-950`}
    >
      {/* Fondo texturizado sutil */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(139,92,246,0.06),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(139,92,246,0.12),transparent)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(rgba(0,0,0,0.25) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-[1180px]">
        {/* ── Header ────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headerStagger}
          className="mb-20 flex flex-col items-start"
        >
          <motion.span
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300 bg-violet-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-violet-700 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-300"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-500 dark:bg-violet-400" />
            {t("badge")}
          </motion.span>

          <div className="flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <motion.h2
              variants={fadeUp}
              className="max-w-xl text-balance text-4xl font-normal tracking-tight text-slate-950 md:text-5xl lg:text-[3.5rem] lg:leading-[1.1] dark:text-white"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              {t.rich("title", {
                highlight: (chunks) => (
                  <span className="italic text-violet-600 dark:text-blue-400">
                    {chunks}
                  </span>
                ),
              })}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="max-w-sm text-[15px] leading-relaxed text-slate-500 md:text-right dark:text-slate-400"
            >
              {t("subtitle")}
            </motion.p>
          </div>
        </motion.div>

        {/* ── Timeline ──────────────────────────────────────── */}
        <div className="relative pl-6 md:pl-10">
          {/* Línea vertical */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-2 h-[calc(100%-8px)] w-px origin-top bg-gradient-to-b from-violet-400 via-slate-300 to-transparent dark:from-violet-500/60 dark:via-slate-700 dark:to-transparent"
          />

          <div className="flex flex-col gap-10">
            {academicExperience.map((item, idx) => {
              const a = accents[idx % accents.length];

              return (
                <motion.div
                  key={item.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={cardReveal}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="absolute -left-6 top-6 z-10 md:-left-10">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="relative flex items-center justify-center"
                    >
                      <span
                        className={`absolute h-7 w-7 animate-ping rounded-full opacity-20 ${a.dotPulse}`}
                      />
                      <span
                        className={`relative flex h-[13px] w-[13px] rounded-full ${a.dot} ${a.dotGlow}`}
                      />
                    </motion.div>
                  </div>

                  {/* Año pill */}
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className={`mb-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${a.year}`}
                  >
                    <CalendarDays className="h-3 w-3" strokeWidth={2} />
                    {item.period}
                  </motion.span>

                  {/* ── Card ── */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className={`group relative overflow-hidden rounded-2xl border-l-4 bg-white shadow-sm transition-all duration-500 hover:bg-slate-50 dark:bg-slate-900/80 dark:backdrop-blur-sm dark:hover:bg-slate-900 ${a.leftBorder}`}
                  >
                    {/* Stripe diagonal de fondo */}
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${a.stripe} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                    />

                    <div className="relative flex flex-col gap-5 p-6 md:flex-row md:gap-8 md:p-8">
                      {/* Columna izquierda: icono + meta */}
                      <div className="flex shrink-0 flex-row items-start gap-4 md:w-28 md:flex-col md:items-center md:gap-3">
                        {/* Icono */}
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${a.iconBg}`}
                        >
                          <GraduationCap
                            strokeWidth={1.5}
                            className={`h-6 w-6 ${a.icon}`}
                          />
                        </div>

                        {/* Periodo + ubicación en columna */}
                        <div className="flex flex-col gap-1.5 md:items-center md:text-center">
                          <span
                            className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10.5px] font-medium ${a.badge}`}
                          >
                            <CalendarDays
                              className="h-2.5 w-2.5"
                              strokeWidth={2}
                            />
                            {item.period}
                          </span>
                          <span
                            className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10.5px] font-medium ${a.badge}`}
                          >
                            <MapPin className="h-2.5 w-2.5" strokeWidth={2} />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      {/* Divisor vertical */}
                      <div
                        className={`hidden w-px self-stretch opacity-30 md:block ${a.line}`}
                      />

                      {/* Columna derecha: contenido */}
                      <div className="min-w-0 flex-1">
                        <h3
                          className={`mb-1 text-[1.05rem] font-bold leading-snug text-slate-900 transition-colors duration-300 dark:text-white ${a.title}`}
                        >
                          {t(`items.${item.key}.title`)}
                        </h3>
                        <p className="mb-4 text-[13px] font-medium text-slate-500 dark:text-slate-400">
                          {t(`items.${item.key}.institution`)}
                        </p>

                        <p className="mb-5 text-[13.5px] leading-[1.85] text-slate-500 dark:text-slate-400">
                          {t(`items.${item.key}.description`)}
                        </p>

                        {/* Highlights */}
                        <div className="border-t border-slate-100 pt-4 dark:border-slate-800">
                          <p className="mb-3 inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                            <BookOpen className="h-3 w-3" strokeWidth={2.5} />
                            {t("highlights")}
                          </p>
                          <ul className="grid gap-2 sm:grid-cols-2">
                            {(t.raw(`items.${item.key}.highlights`) as string[]).map(
                              (highlight: string, i: number) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -6 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 0.3,
                                    delay: i * 0.06,
                                    ease: [0.16, 1, 0.3, 1],
                                  }}
                                  className="flex items-start gap-2 text-[12.5px] leading-[1.7] text-slate-500 dark:text-slate-400"
                                >
                                  <span
                                    className={`mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full ${a.dot2}`}
                                  />
                                  {highlight}
                                </motion.li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}