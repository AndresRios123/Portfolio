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
      className="bg-[#f5f7fb] px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1180px]">
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
          className="mb-14 flex flex-col items-center text-center"
        >
          <motion.span
            variants={fadeUp}
            className="mb-5 inline-flex rounded-full bg-purple-100 px-5 py-2 text-xs font-bold uppercase tracking-wide text-purple-600"
          >
            {t("badge")}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl"
          >
            {t.rich("title", {
              highlight: (chunks) => (
                <span className="text-purple-600">{chunks}</span>
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
          className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:p-10 lg:p-12"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid items-center gap-10 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-14"
          >
            <motion.div
              variants={fadeLeft}
              className="flex justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotate: -1 }}
                transition={{ duration: 0.25 }}
                className="flex h-[250px] w-[250px] items-center justify-center rounded-[1.75rem] border-4 border-white bg-[#ddd8f3] shadow-[0_10px_25px_rgba(15,23,42,0.10)] md:h-[300px] md:w-[300px]"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.45 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-[#d8c8f5]"
                >
                  <span className="text-sm font-medium text-purple-600">
                    {t("imagePlaceholder")}
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeRight} className="flex flex-col gap-8">
              <div className="space-y-6 text-[18px] leading-9 text-slate-700">
                <motion.p variants={fadeUp}>{t("paragraph1")}</motion.p>
                <motion.p variants={fadeUp}>{t("paragraph2")}</motion.p>
              </div>

              <motion.div variants={fadeUp}>
                <SkillsPanel />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}