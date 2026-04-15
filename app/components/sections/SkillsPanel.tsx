"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const skills = [
  {
    title: "FRONTEND",
    color: "purple",
    items: [
      { name: "HTML", level: "Avanzado" },
      { name: "CSS", level: "Avanzado" },
      { name: "JavaScript", level: "Intermedio - Avanzado" },
      { name: "React", level: "Intermedio" },
    ],
  },
  {
    title: "BACKEND",
    color: "blue",
    items: [
      { name: "Node.js", level: "Intermedio" },
      { name: "Python", level: "Intermedio" },
    ],
  },
  {
    title: "HERRAMIENTAS",
    color: "gray",
    items: [
      { name: "Git", level: "Intermedio" },
      { name: "GitHub", level: "Intermedio" },
      { name: "Inteligencia Artificial", level: "Intermedio" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

type TooltipState = {
  visible: boolean;
  x: number;
  y: number;
  label: string;
  level: string;
  color: "purple" | "blue" | "gray";
};

export default function SkillsPanel() {
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    label: "",
    level: "",
    color: "purple",
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getCategoryStyles = (color: string) => {
    return {
      wrapper:
        color === "purple"
          ? "border-purple-200/70 bg-purple-50/80 dark:border-purple-400/15 dark:bg-purple-500/[0.07]"
          : color === "blue"
            ? "border-blue-200/70 bg-blue-50/80 dark:border-blue-400/15 dark:bg-blue-500/[0.07]"
            : "border-slate-200/80 bg-slate-50/80 dark:border-white/10 dark:bg-white/[0.03]",

      dot:
        color === "purple"
          ? "bg-purple-500 dark:bg-purple-400"
          : color === "blue"
            ? "bg-blue-500 dark:bg-blue-400"
            : "bg-slate-500 dark:bg-slate-400",

      title:
        color === "purple"
          ? "text-purple-700 dark:text-purple-300"
          : color === "blue"
            ? "text-blue-700 dark:text-blue-300"
            : "text-slate-700 dark:text-slate-300",

      skill:
        color === "purple"
          ? "border-purple-200 bg-white text-purple-700 hover:border-purple-300 hover:bg-purple-50 dark:border-purple-400/15 dark:bg-[#0f172a] dark:text-purple-300 dark:hover:border-purple-400/30 dark:hover:bg-purple-500/[0.08]"
          : color === "blue"
            ? "border-blue-200 bg-white text-blue-700 hover:border-blue-300 hover:bg-blue-50 dark:border-blue-400/15 dark:bg-[#0f172a] dark:text-blue-300 dark:hover:border-blue-400/30 dark:hover:bg-blue-500/[0.08]"
            : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-[#0f172a] dark:text-slate-300 dark:hover:border-white/15 dark:hover:bg-white/[0.04]",

      tooltip:
        color === "purple"
          ? "border-purple-200 bg-white text-purple-800 dark:border-purple-400/20 dark:bg-[#0b1120]/95 dark:text-purple-200"
          : color === "blue"
            ? "border-blue-200 bg-white text-blue-800 dark:border-blue-400/20 dark:bg-[#0b1120]/95 dark:text-blue-200"
            : "border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-[#0b1120]/95 dark:text-slate-200",
    };
  };

  const tooltipEl = (
    <div
      style={{
        position: "fixed",
        left: tooltip.x + 16,
        top: tooltip.y - 20,
        pointerEvents: "none",
        zIndex: 9999,
        opacity: tooltip.visible ? 1 : 0,
        transition: "opacity 0.12s ease",
      }}
      className={`
        min-w-[160px] rounded-2xl border px-4 py-3 shadow-[0_16px_40px_rgba(15,23,42,0.12)] backdrop-blur-md
        dark:shadow-[0_18px_50px_rgba(0,0,0,0.45)]
        ${getCategoryStyles(tooltip.color).tooltip}
      `}
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] opacity-60">
        {tooltip.label}
      </p>
      <p className="mt-1 text-sm font-semibold">Nivel: {tooltip.level}</p>
    </div>
  );

  return (
    <div className="relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-4"
      >
        {skills.map((category) => {
          const styles = getCategoryStyles(category.color);

          return (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -2 }}
              className={`
                rounded-[1.4rem] border p-4 transition-all duration-300
                hover:shadow-[0_14px_30px_rgba(15,23,42,0.06)]
                dark:hover:shadow-[0_18px_40px_rgba(0,0,0,0.22)]
                md:p-5
                ${styles.wrapper}
              `}
            >
              <div className="mb-4 flex items-center gap-2.5">
                <span className={`h-2.5 w-2.5 rounded-full ${styles.dot}`} />
                <h3
                  className={`
                    text-[10px] font-extrabold uppercase tracking-[0.18em]
                    ${styles.title}
                  `}
                >
                  {category.title}
                </h3>
              </div>

              <motion.div
                variants={containerVariants}
                className="flex flex-wrap gap-3"
              >
                {category.items.map((skill) => (
                  <motion.span
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ y: -3, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onMouseEnter={(e) => {
                      setTooltip({
                        visible: true,
                        x: e.clientX,
                        y: e.clientY,
                        label: skill.name,
                        level: skill.level,
                        color: category.color as "purple" | "blue" | "gray",
                      });
                    }}
                    onMouseMove={(e) => {
                      setTooltip((prev) => ({
                        ...prev,
                        x: e.clientX,
                        y: e.clientY,
                      }));
                    }}
                    onMouseLeave={() => {
                      setTooltip((prev) => ({ ...prev, visible: false }));
                    }}
                    className={`
                      cursor-pointer rounded-xl border px-4 py-2 text-sm font-semibold
                      shadow-[0_6px_14px_rgba(15,23,42,0.06)] transition-all duration-200
                      dark:shadow-[0_8px_18px_rgba(0,0,0,0.2)]
                      ${styles.skill}
                    `}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {mounted && createPortal(tooltipEl, document.body)}
    </div>
  );
}