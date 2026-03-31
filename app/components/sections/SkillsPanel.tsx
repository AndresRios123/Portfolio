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
          ? "border-[#e7d8fb] bg-[#f5effd]"
          : color === "blue"
            ? "border-[#dbe5ff] bg-[#eef4ff]"
            : "border-[#e5e7eb] bg-[#f7f8fa]",

      dot:
        color === "purple"
          ? "bg-[#9333ea]"
          : color === "blue"
            ? "bg-[#4f46e5]"
            : "bg-[#64748b]",

      title:
        color === "purple"
          ? "text-[#9333ea]"
          : color === "blue"
            ? "text-[#4f46e5]"
            : "text-[#334155]",

      skill:
        color === "purple"
          ? "border-[#dcc7fb] text-[#9333ea] hover:border-[#cfaef9] hover:bg-[#fcfaff]"
          : color === "blue"
            ? "border-[#c8d7ff] text-[#4f46e5] hover:border-[#b6cbff] hover:bg-[#fbfdff]"
            : "border-[#d8dee8] text-[#475569] hover:border-[#cbd5e1] hover:bg-[#fcfcfd]",

      tooltip:
        color === "purple"
          ? "border-[#dcc7fb] bg-white text-[#6b21a8]"
          : color === "blue"
            ? "border-[#c8d7ff] bg-white text-[#3730a3]"
            : "border-[#d8dee8] bg-white text-[#334155]",
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
        transition: "opacity 0.1s ease",
      }}
      className={`
        min-w-[150px] rounded-2xl border px-4 py-3 shadow-[0_16px_40px_rgba(15,23,42,0.10)] backdrop-blur-sm
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
                rounded-[1.25rem] border p-4 transition-all duration-300
                hover:shadow-[0_12px_28px_rgba(15,23,42,0.06)]
                md:p-5
                ${styles.wrapper}
              `}
            >
              <div className="mb-4 flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${styles.dot}`} />
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
                      cursor-pointer rounded-xl border bg-white px-4 py-2 text-sm font-semibold
                      shadow-[0_4px_10px_rgba(15,23,42,0.08)] transition-all duration-200
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