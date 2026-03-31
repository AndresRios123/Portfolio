"use client";

import { GraduationCap, CalendarDays, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { academicExperience } from "@/app/data/academicData";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function AcademicExperience() {
  const t = useTranslations("experience");

  return (
    <section
      id="experiencia"
      className="bg-[#f8fafc] px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 8 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.45 }}
            className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef0ff]"
          >
            <GraduationCap
              className="h-4 w-4 text-[#6c63ff]"
              strokeWidth={1.8}
            />
          </motion.div>

          <h2 className="text-[2rem] font-bold leading-none tracking-[-0.03em] text-[#0f172a] md:text-[3rem]">
            {t("title")}
          </h2>

          <p className="mt-3 text-[14px] font-normal text-[#64748b] md:text-[15px]">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* línea vertical */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[25px] top-8 hidden h-[calc(100%-4rem)] w-px origin-top bg-gradient-to-b from-[#c7d2fe] via-[#ddd6fe] to-[#e7ecf5] md:block"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="space-y-5 md:space-y-6"
          >
            {academicExperience.map((item) => (
              <motion.article
                key={item.id}
                variants={itemVariants}
                className="relative md:pl-14"
              >
                {/* punto del timeline */}
                <div className="absolute left-[18px] top-8 z-20 hidden md:block">
                  <span className="relative flex h-4 w-4 items-center justify-center">
                    <span className="absolute h-4 w-4 rounded-full bg-[#e9e7ff]" />
                    <span className="absolute h-2.5 w-2.5 rounded-full bg-[#7c4dff]" />
                  </span>
                </div>

                <motion.div
                  whileHover={{ y: -4, scale: 1.003 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group rounded-[18px] border border-[#dbe4ff] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(91,79,247,0.08)] md:px-6 md:py-6"
                >
                  <div className="flex gap-4 md:gap-5">
                    {/* icon */}
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.06, rotate: -3 }}
                        transition={{ duration: 0.2 }}
                        className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#7c4dff] to-[#9333ea] shadow-[0_8px_16px_rgba(124,77,255,0.25)] md:h-10 md:w-10"
                      >
                        <GraduationCap
                          className="h-4 w-4 text-white"
                          strokeWidth={2}
                        />
                      </motion.div>
                    </div>

                    {/* content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        {/* left */}
                        <div className="min-w-0">
                          <h3 className="text-[18px] font-semibold leading-tight text-[#5b4ff7] transition-colors duration-300 group-hover:text-[#4f46e5] md:text-[20px]">
                            {t(`items.${item.key}.title`)}
                          </h3>

                          <h4 className="mt-1 text-[13px] font-semibold text-[#0f172a] md:text-[14px]">
                            {t(`items.${item.key}.institution`)}
                          </h4>
                        </div>

                        {/* right meta */}
                        <div className="flex flex-col gap-1 text-[13px] text-[#64748b] md:min-w-[140px] md:items-start">
                          <div className="flex items-center gap-2">
                            <CalendarDays
                              className="h-[13px] w-[13px] text-[#64748b]"
                              strokeWidth={1.8}
                            />
                            <span>{item.period}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <MapPin
                              className="h-[13px] w-[13px] text-[#64748b]"
                              strokeWidth={1.8}
                            />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* description */}
                      <p className="mt-5 max-w-[890px] text-[13.5px] leading-[1.8] text-[#475569] md:text-[14px]">
                        {t(`items.${item.key}.description`)}
                      </p>

                      {/* highlights */}
                      <div className="mt-5">
                        <h5 className="mb-3 text-[13px] font-semibold text-[#334155]">
                          {t("highlights")}
                        </h5>

                        <ul className="space-y-2">
                          {t.raw(`items.${item.key}.highlights`).map(
                            (highlight: string, i: number) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.35,
                                  delay: i * 0.06,
                                }}
                                className="flex items-start gap-3 text-[13px] leading-[1.7] text-[#475569]"
                              >
                                <span className="mt-[8px] h-[4px] w-[4px] rounded-full bg-[#6c63ff]" />
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