"use client";

import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import SkillsPanel from "./SkillsPanel";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function About() {
  const t = useTranslations("About");

  const pillars = [
    { key: "pillar1" },
    { key: "pillar2" },
    { key: "pillar3" },
  ] as const;

  return (
    <section
      id="sobre-mi"
      className="relative bg-[#f5f7fb] px-6 py-28 transition-colors duration-300 md:px-10 lg:px-16 dark:bg-[#070b14]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(168,85,247,0.05),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.07),transparent)]" />

      <div className="relative mx-auto max-w-[1180px]">

        {/* ── Header ─────────────────────────────────────────── */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={stagger}
          className="mb-20 flex flex-col items-start"
        >
          <motion.span
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-purple-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-blue-400" />
            {t("badge")}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="max-w-2xl text-balance text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-[3.5rem] lg:leading-[1.1] dark:text-slate-50"
          >
            {t.rich("title", {
              highlight: (chunks) => (
                <span className="text-purple-600 dark:text-blue-400">
                  {chunks}
                </span>
              ),
            })}
          </motion.h2>
        </motion.header>

        {/* ── Two-column layout ──────────────────────────────── */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_420px] lg:gap-12 xl:gap-16">

          {/* ── Left — narrative card ──────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="flex flex-col justify-center"
          >
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-500 hover:border-purple-200 hover:shadow-[0_8px_40px_rgba(168,85,247,0.12)] dark:border-white/10 dark:bg-[#0b1120]/80 dark:hover:border-blue-500/30 dark:hover:shadow-[0_8px_40px_rgba(59,130,246,0.12)]"
            >
              {/* Top accent bar */}
              <div className="h-[3px] w-full bg-gradient-to-r from-purple-500 via-purple-400 to-transparent dark:from-blue-500 dark:via-blue-400 dark:to-transparent" />

              {/* Glow layer */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(168,85,247,0.07),transparent)] dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(59,130,246,0.1),transparent)]" />

              <div className="relative p-8 md:p-10">

                {/* Overline */}
                <motion.p
                  variants={fadeUp}
                  className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-purple-400 dark:text-blue-500"
                >
                  {t("badge")}
                </motion.p>

                {/* Lead paragraph */}
                <motion.p
                  variants={fadeUp}
                  className="mb-7 text-[1.3rem] font-bold leading-[1.45] text-slate-900 md:text-[1.5rem] dark:text-white"
                >
                  {t("paragraph1")}
                </motion.p>

                {/* Body with left accent */}
                <motion.div
                  variants={fadeIn}
                  className="mb-8 border-l-[3px] border-purple-300 pl-5 transition-colors duration-500 group-hover:border-purple-400 dark:border-blue-500/60 dark:group-hover:border-blue-400"
                >
                  <motion.p
                    variants={fadeUp}
                    className="text-[15.5px] leading-[1.9] text-slate-500 dark:text-slate-400"
                  >
                    {t("paragraph2")}
                  </motion.p>
                </motion.div>

                {/* Pillars row */}
                <motion.div
                  variants={fadeUp}
                  className="flex flex-col gap-2.5 border-t border-slate-100 pt-6 sm:flex-row sm:gap-3 dark:border-white/[0.06]"
                >
                  {pillars.map(({ key }) => (
                    <div
                      key={key}
                      className="flex items-center gap-2 rounded-xl border border-purple-100 bg-purple-50/70 px-4 py-2.5 transition-colors duration-500 group-hover:border-purple-200 group-hover:bg-purple-50 dark:border-blue-500/15 dark:bg-blue-500/[0.07] dark:group-hover:border-blue-500/30 dark:group-hover:bg-blue-500/[0.12]"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400 dark:bg-blue-400" />
                      <span className="text-[13px] font-medium text-purple-800 dark:text-blue-200">
                        {t(`pillars.${key}`)}
                      </span>
                    </div>
                  ))}
                </motion.div>

              </div>
            </motion.div>
          </motion.div>

          {/* ── Right — skills card ────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5 }}
            className="flex flex-col"
          >
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-500 hover:border-purple-200 hover:shadow-[0_8px_40px_rgba(168,85,247,0.12)] dark:border-white/10 dark:bg-[#0b1120]/80 dark:hover:border-blue-500/30 dark:hover:shadow-[0_8px_40px_rgba(59,130,246,0.12)]">

              {/* Glow layer */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(168,85,247,0.07),transparent)] dark:bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(59,130,246,0.1),transparent)]" />

              {/* Panel header */}
              <div className="relative flex items-center gap-3 border-b border-slate-100 px-6 py-4 transition-colors duration-500 group-hover:border-purple-100 dark:border-white/[0.06] dark:group-hover:border-blue-500/20">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-slate-200 transition-colors duration-500 group-hover:bg-purple-200 dark:bg-slate-700 dark:group-hover:bg-blue-500/40" />
                  <span className="h-3 w-3 rounded-full bg-slate-200 transition-colors duration-500 group-hover:bg-purple-200 dark:bg-slate-700 dark:group-hover:bg-blue-500/40" />
                  <span className="h-3 w-3 rounded-full bg-slate-200 transition-colors duration-500 group-hover:bg-purple-200 dark:bg-slate-700 dark:group-hover:bg-blue-500/40" />
                </div>
                <span className="text-xs font-medium text-slate-400 transition-colors duration-500 group-hover:text-purple-400 dark:text-slate-500 dark:group-hover:text-blue-400">
                  skills.ts
                </span>
              </div>

              {/* Skills content */}
              <div className="relative p-6">
                <SkillsPanel />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}