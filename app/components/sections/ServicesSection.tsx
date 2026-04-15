"use client";

import { motion, Variants } from "framer-motion";
import { Code, Palette, Database, Smartphone, Zap, Users, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { DM_Serif_Display } from "next/font/google";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
});

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

const headerStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16 } },
};

export function ServicesSection() {
  const t = useTranslations("services");

  const services = [
    {
      icon: Code,
      title: t("items.frontend.title"),
      description: t("items.frontend.description"),
      cardBg: "bg-blue-50 dark:bg-blue-500/10",
      cardBorder: "border-blue-100 dark:border-blue-400/20",
      iconBg: "bg-blue-100 dark:bg-blue-500/20",
      iconColor: "text-blue-500 dark:text-blue-300",
      barColor: "from-blue-500 to-cyan-400",
      numberColor: "text-blue-100 dark:text-blue-500/30",
    },
    {
      icon: Database,
      title: t("items.backend.title"),
      description: t("items.backend.description"),
      cardBg: "bg-purple-50 dark:bg-purple-500/10",
      cardBorder: "border-purple-100 dark:border-purple-400/20",
      iconBg: "bg-purple-100 dark:bg-purple-500/20",
      iconColor: "text-purple-500 dark:text-purple-300",
      barColor: "from-violet-500 to-purple-400",
      numberColor: "text-purple-100 dark:text-purple-500/30",
    },
    {
      icon: Zap,
      title: t("items.fullstack.title"),
      description: t("items.fullstack.description"),
      cardBg: "bg-orange-50 dark:bg-orange-500/10",
      cardBorder: "border-orange-100 dark:border-orange-400/20",
      iconBg: "bg-orange-100 dark:bg-orange-500/20",
      iconColor: "text-orange-500 dark:text-orange-300",
      barColor: "from-orange-400 to-red-400",
      numberColor: "text-orange-100 dark:text-orange-500/30",
    },
    {
      icon: Palette,
      title: t("items.uiux.title"),
      description: t("items.uiux.description"),
      cardBg: "bg-pink-50 dark:bg-pink-500/10",
      cardBorder: "border-pink-100 dark:border-pink-400/20",
      iconBg: "bg-pink-100 dark:bg-pink-500/20",
      iconColor: "text-pink-500 dark:text-pink-300",
      barColor: "from-pink-500 to-rose-400",
      numberColor: "text-pink-100 dark:text-pink-500/30",
    },
    {
      icon: Smartphone,
      title: t("items.responsive.title"),
      description: t("items.responsive.description"),
      cardBg: "bg-green-50 dark:bg-green-500/10",
      cardBorder: "border-green-100 dark:border-green-400/20",
      iconBg: "bg-green-100 dark:bg-green-500/20",
      iconColor: "text-green-600 dark:text-green-300",
      barColor: "from-green-500 to-emerald-400",
      numberColor: "text-green-100 dark:text-green-500/30",
    },
    {
      icon: Users,
      title: t("items.consulting.title"),
      description: t("items.consulting.description"),
      cardBg: "bg-indigo-50 dark:bg-indigo-500/10",
      cardBorder: "border-indigo-100 dark:border-indigo-400/20",
      iconBg: "bg-indigo-100 dark:bg-indigo-500/20",
      iconColor: "text-indigo-500 dark:text-indigo-300",
      barColor: "from-indigo-500 to-blue-400",
      numberColor: "text-indigo-100 dark:text-indigo-500/30",
    },
  ];

  const handleContactClick = () => {
    const el = document.getElementById("contacto");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="servicios"
      className={`${dmSerif.variable} relative bg-white px-6 py-28 transition-colors duration-300 md:px-10 lg:px-16 dark:bg-[#070b14]`}
    >
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
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-300"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
            {t("badge")}
          </motion.span>

          <div className="flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <motion.h2
              variants={fadeUp}
              className="max-w-xl text-balance text-4xl font-normal tracking-tight text-gray-900 md:text-5xl lg:text-[3.5rem] lg:leading-[1.1] dark:text-white"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              {t.rich("title", {
                highlight: (chunks) => (
                  <span className="italic text-blue-500 dark:text-blue-400">{chunks}</span>
                ),
              })}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="max-w-sm text-[15px] leading-relaxed text-gray-500 md:text-right dark:text-gray-400"
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
          variants={stagger}
          className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            const num = String(i + 1).padStart(2, "0");

            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`
                  group relative flex flex-col overflow-hidden rounded-2xl
                  border ${service.cardBorder} ${service.cardBg}
                  p-7 cursor-default
                  transition-all duration-500
                  hover:-translate-y-1.5
                  hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]
                  dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]
                `}
              >
                {/* Número decorativo */}
                <span
                  className={`pointer-events-none absolute right-5 top-4 select-none text-6xl font-black leading-none ${service.numberColor} transition-opacity duration-500 group-hover:opacity-60`}
                >
                  {num}
                </span>

                {/* Icono */}
                <div
                  className={`
                    mb-6 flex h-12 w-12 items-center justify-center rounded-xl
                    ${service.iconBg} ${service.iconColor}
                    transition-transform duration-500 group-hover:scale-110
                  `}
                >
                  <Icon strokeWidth={1.75} className="h-6 w-6" />
                </div>

                {/* Texto */}
                <h3 className="mb-2.5 text-[1rem] font-bold leading-snug text-gray-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="flex-1 text-[13.5px] leading-[1.8] text-gray-500 dark:text-gray-400">
                  {service.description}
                </p>

                {/* Barra inferior */}
                <div
                  className={`
                    mt-7 h-[2.5px] rounded-full
                    bg-gradient-to-r ${service.barColor}
                    w-8 transition-all duration-500 ease-out group-hover:w-full
                  `}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── CTA ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={handleContactClick}
            className="
              group relative w-full overflow-hidden rounded-2xl
              border border-blue-100 bg-blue-50
              p-7 text-left cursor-pointer
              transition-all duration-500
              hover:-translate-y-1 hover:border-blue-200
              hover:shadow-[0_12px_40px_rgba(59,130,246,0.1)]
              dark:border-blue-400/20 dark:bg-blue-500/10
              dark:hover:border-blue-400/40
              dark:hover:shadow-[0_12px_40px_rgba(59,130,246,0.1)]
            "
          >
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(ellipse_50%_80%_at_0%_50%,rgba(59,130,246,0.07),transparent)]" />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-500 transition-transform duration-500 group-hover:scale-110 dark:bg-blue-500/20 dark:text-blue-300">
                  <ArrowRight strokeWidth={1.75} className="h-6 w-6" />
                </div>
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-400 dark:text-blue-500">
                    {t("cta.badge")}
                  </p>
                  <h3 className="text-lg font-bold leading-snug text-gray-900 dark:text-white">
                    {t("cta.title")}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t("cta.description")}
                  </p>
                </div>
              </div>

              <div className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-500 group-hover:shadow-[0_4px_20px_rgba(59,130,246,0.35)]">
                {t("cta.button")}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </div>
            </div>
          </button>
        </motion.div>

      </div>
    </section>
  );
}