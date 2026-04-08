"use client";

import { GraduationCap, CalendarDays, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { academicExperience } from "@/app/data/academicData";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const highlightVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.38,
      delay: i * 0.07,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function AcademicExperience() {
  const t = useTranslations("experience");

  return (
    <section
      id="experiencia"
      className="bg-[#f8fafc] px-6 py-24 transition-colors duration-300 md:px-10 lg:px-16 dark:bg-[#070b14]"
    >
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 8 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef0ff] dark:bg-[#1e1b4b]/60"
          >
            <GraduationCap
              className="h-4 w-4 text-[#6c63ff] dark:text-[#a78bfa]"
              strokeWidth={1.8}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[2rem] font-bold leading-none tracking-[-0.03em] text-[#0f172a] md:text-[3rem] dark:text-white"
          >
            {t("title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-[14px] font-normal text-[#64748b] md:text-[15px] dark:text-[#94a3b8]"
          >
            {t("subtitle")}
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[25px] top-8 hidden h-[calc(100%-4rem)] w-px origin-top bg-gradient-to-b from-[#c7d2fe] via-[#ddd6fe] to-[#e7ecf5] md:block dark:from-[#3730a3] dark:via-[#4c1d95] dark:to-[#334155]"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-5 md:space-y-6"
          >
            {academicExperience.map((item) => (
              <motion.article
                key={item.id}
                variants={itemVariants}
                className="relative md:pl-14"
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-[18px] top-8 z-20 hidden md:block"
                >
                  <span className="relative flex h-4 w-4 items-center justify-center">
                    <span className="absolute h-4 w-4 rounded-full bg-[#e9e7ff] dark:bg-[#2e1065]" />
                    <span className="absolute h-2.5 w-2.5 rounded-full bg-[#7c4dff] dark:bg-[#a78bfa]" />
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4, scale: 1.003 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group rounded-[18px] border border-[#dbe4ff] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(91,79,247,0.08)] md:px-6 md:py-6 dark:border-white/10 dark:bg-[#0b1120]/80 dark:shadow-[0_10px_30px_rgba(0,0,0,0.32)] dark:hover:shadow-[0_18px_45px_rgba(0,0,0,0.4)]"
                >
                  <div className="flex gap-4 md:gap-5">
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: -4 }}
                        transition={{ duration: 0.2 }}
                        className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#7c4dff] to-[#9333ea] shadow-[0_8px_16px_rgba(124,77,255,0.25)] md:h-10 md:w-10 dark:shadow-[0_10px_24px_rgba(124,77,255,0.18)]"
                      >
                        <GraduationCap className="h-4 w-4 text-white" strokeWidth={2} />
                      </motion.div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div className="min-w-0">
                          <h3 className="text-[17px] font-semibold leading-tight text-[#5b4ff7] transition-colors duration-300 group-hover:text-[#4f46e5] md:text-[19px] dark:text-[#a78bfa] dark:group-hover:text-[#c4b5fd]">
                            {t(`items.${item.key}.title`)}
                          </h3>
                          <h4 className="mt-1 text-[13px] font-semibold text-[#0f172a] md:text-[14px] dark:text-white">
                            {t(`items.${item.key}.institution`)}
                          </h4>
                        </div>

                        <div className="flex shrink-0 flex-col gap-1 text-[12.5px] text-[#64748b] md:items-start dark:text-[#94a3b8]">
                          <div className="flex items-center gap-1.5">
                            <CalendarDays
                              className="h-[12px] w-[12px] text-[#94a3b8] dark:text-[#64748b]"
                              strokeWidth={1.8}
                            />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin
                              className="h-[12px] w-[12px] text-[#94a3b8] dark:text-[#64748b]"
                              strokeWidth={1.8}
                            />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="mt-4 text-[13.5px] leading-[1.8] text-[#475569] md:text-[14px] dark:text-[#94a3b8]">
                        {t(`items.${item.key}.description`)}
                      </p>

                      <div className="mt-4">
                        <h5 className="mb-2.5 text-[12.5px] font-semibold uppercase tracking-wide text-[#334155] dark:text-[#cbd5e1]">
                          {t("highlights")}
                        </h5>
                        <ul className="space-y-1.5">
                          {(t.raw(`items.${item.key}.highlights`) as string[]).map(
                            (highlight: string, i: number) => (
                              <motion.li
                                key={i}
                                custom={i}
                                variants={highlightVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex items-start gap-2.5 text-[13px] leading-[1.7] text-[#475569] dark:text-[#94a3b8]"
                              >
                                <span className="mt-[9px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#6c63ff] dark:bg-[#a78bfa]" />
                                <span>{highlight}</span>
                              </motion.li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}