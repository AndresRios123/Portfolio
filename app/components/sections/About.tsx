"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SkillsPanel from "./SkillsPanel";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function About() {
  const t = useTranslations("About");

  return (
    <section
      id="sobre-mi"
      className="bg-[#f5f7fb] px-6 py-24 transition-colors duration-300 md:px-10 lg:px-16 dark:bg-[#070b14]"
    >
      <div className="mx-auto max-w-[1180px]">
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          variants={containerVariants}
          className="mb-16 flex flex-col items-center text-center"
        >
          <motion.span
            variants={fadeUp}
            className="mb-5 inline-flex rounded-full border border-purple-200 bg-purple-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-purple-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300"
          >
            {t("badge")}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl dark:text-slate-50"
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

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4 }}
          className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:p-10 lg:p-12 dark:border-white/10 dark:bg-[#0b1120]/80 dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.08),transparent_32%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_34%)]" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative grid items-center gap-10 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-14"
          >
            <motion.div
              variants={fadeLeft}
              className="flex justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotate: -1 }}
                transition={{ duration: 0.25 }}
                className="relative flex h-[250px] w-[250px] items-center justify-center rounded-[1.9rem] border border-slate-200 bg-[linear-gradient(180deg,#f3ecff_0%,#e9ddff_100%)] shadow-[0_14px_30px_rgba(15,23,42,0.10)] md:h-[300px] md:w-[300px] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(37,99,235,0.16)_0%,rgba(15,23,42,0.75)_100%)] dark:shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
              >
                <div className="absolute inset-0 rounded-[1.9rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_45%)] dark:bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.16),transparent_42%)]" />

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.45 }}
                  className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/60 bg-white/70 shadow-[0_10px_25px_rgba(15,23,42,0.10)] backdrop-blur-md dark:border-blue-400/20 dark:bg-[#0f172a]/75 dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                >
                  <span className="text-center text-sm font-semibold text-purple-700 dark:text-blue-300">
                    {t("imagePlaceholder")}
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeRight} className="flex flex-col gap-8">
              <div className="space-y-6 text-[17px] leading-8 text-slate-700 md:text-[18px] md:leading-9 dark:text-slate-300">
                <motion.p variants={fadeUp}>{t("paragraph1")}</motion.p>
                <motion.p variants={fadeUp}>{t("paragraph2")}</motion.p>
              </div>

              <motion.div
                variants={fadeUp}
                className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03]"
              >
                <SkillsPanel />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}