"use client";

import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import { RiDoubleQuotesR } from "react-icons/ri";

type TestimonialItem = {
  name: string;
  role: string;
  initials: string;
  text: string;
};

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

const cardStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

const avatarColors = [
  {
    bg:       "bg-violet-100 dark:bg-violet-500/20",
    text:     "text-violet-700 dark:text-violet-300",
    ring:     "ring-2 ring-violet-300 dark:ring-violet-500/30",
    quote:    "text-violet-300 dark:text-violet-500/50",
    accent:   "from-violet-500 via-purple-400 to-purple-100 dark:from-violet-500 dark:via-purple-500 dark:to-transparent",
    border:   "border-violet-200 hover:border-violet-300 dark:border-white/10 dark:hover:border-violet-500/30",
    glow:     "hover:shadow-[0_8px_40px_rgba(139,92,246,0.13)] dark:hover:shadow-[0_8px_40px_rgba(139,92,246,0.12)]",
    roleText: "text-violet-600 dark:text-violet-400",
    cardBg:   "bg-violet-50/60",
  },
  {
    bg:       "bg-blue-100 dark:bg-blue-500/20",
    text:     "text-blue-700 dark:text-blue-300",
    ring:     "ring-2 ring-blue-300 dark:ring-blue-500/30",
    quote:    "text-blue-300 dark:text-blue-500/50",
    accent:   "from-blue-500 via-cyan-400 to-cyan-100 dark:from-blue-500 dark:via-cyan-400 dark:to-transparent",
    border:   "border-blue-200 hover:border-blue-300 dark:border-white/10 dark:hover:border-blue-500/30",
    glow:     "hover:shadow-[0_8px_40px_rgba(59,130,246,0.13)] dark:hover:shadow-[0_8px_40px_rgba(59,130,246,0.12)]",
    roleText: "text-blue-600 dark:text-blue-400",
    cardBg:   "bg-blue-50/60",
  },
  {
    bg:       "bg-emerald-100 dark:bg-emerald-500/20",
    text:     "text-emerald-700 dark:text-emerald-300",
    ring:     "ring-2 ring-emerald-300 dark:ring-emerald-500/30",
    quote:    "text-emerald-300 dark:text-emerald-500/50",
    accent:   "from-emerald-500 via-teal-400 to-teal-100 dark:from-emerald-500 dark:via-teal-400 dark:to-transparent",
    border:   "border-emerald-200 hover:border-emerald-300 dark:border-white/10 dark:hover:border-emerald-500/30",
    glow:     "hover:shadow-[0_8px_40px_rgba(16,185,129,0.13)] dark:hover:shadow-[0_8px_40px_rgba(16,185,129,0.12)]",
    roleText: "text-emerald-700 dark:text-emerald-400",
    cardBg:   "bg-emerald-50/60",
  },
];

export default function Testimonials() {
  const t     = useTranslations("testimonials");
  const items = t.raw("items") as TestimonialItem[];

  return (
    <section
      id="testimonios"
      className="relative bg-white px-6 py-28 transition-colors duration-300 md:px-10 lg:px-16 dark:bg-[#070b14]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(139,92,246,0.04),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(139,92,246,0.08),transparent)]" />

      <div className="relative mx-auto max-w-[1180px]">

        {/* ── Header ─────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headerStagger}
          className="mb-16 flex flex-col items-start"
        >
          <motion.span
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-purple-700 dark:border-purple-500/20 dark:bg-purple-500/10 dark:text-purple-300"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-purple-400" />
            {t("title")}
          </motion.span>

          <div className="flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <motion.h2
              variants={fadeUp}
              className="max-w-xl text-balance text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-[3.5rem] lg:leading-[1.1] dark:text-white"
            >
              Lo que{" "}
              <span className="text-purple-600 dark:text-purple-400">dicen</span>{" "}
              de mí
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="max-w-sm text-[15px] leading-relaxed text-slate-500 md:text-right dark:text-slate-400"
            >
              {t("subtitle")}
            </motion.p>
          </div>
        </motion.div>

        {/* ── Grid ──────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardStagger}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {items.map((item, index) => {
            const c = avatarColors[index % avatarColors.length];

            return (
              <motion.article
                key={index}
                variants={cardReveal}
                className={`
                  group relative flex flex-col overflow-hidden
                  rounded-2xl border-2 bg-white
                  shadow-sm transition-all duration-500
                  ${c.border} ${c.glow}
                  dark:bg-[#0b1120]/80
                `}
              >
                {/* Top accent bar */}
                <div className={`h-[4px] w-full bg-gradient-to-r ${c.accent}`} />

                {/* Glow overlay */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(139,92,246,0.04),transparent)]" />

                <div className={`relative flex flex-1 flex-col p-7 ${c.cardBg} dark:bg-transparent`}>

                  {/* Avatar + info + quote icon */}
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[13px] font-bold ${c.bg} ${c.text} ${c.ring}`}
                      >
                        {item.initials}
                      </motion.div>

                      <div>
                        <h3 className="text-[14.5px] font-bold leading-tight text-slate-900 dark:text-white">
                          {item.name}
                        </h3>
                        <p className={`mt-0.5 text-[12px] font-semibold ${c.roleText}`}>
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <RiDoubleQuotesR className={`shrink-0 text-[28px] transition-colors duration-500 ${c.quote}`} />
                  </div>

                  {/* Divisor */}
                  <div className="mb-5 h-px w-full bg-slate-200/80 dark:bg-white/[0.06]" />

                  {/* Texto */}
                  <p className="flex-1 text-[14px] leading-[1.85] text-slate-600 dark:text-slate-400">
                    "{item.text}"
                  </p>

                  {/* Estrellas */}
                  <div className="mt-6 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: 0.4 + i * 0.06,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="text-[14px] text-amber-400 dark:text-amber-300"
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}