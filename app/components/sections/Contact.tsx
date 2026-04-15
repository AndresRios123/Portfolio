"use client";

import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import ContactForm from "./ContactForm";
import { FiGithub, FiLinkedin } from "react-icons/fi";
// import { FiInstagram, FiFacebook } from "react-icons/fi";
import { DM_Serif_Display } from "next/font/google";


const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
});

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

const socialIcons = [
  FiGithub,
  FiLinkedin,
  // FiInstagram,
  // FiFacebook,
];

const socialColors = [
  "hover:border-slate-400 hover:text-slate-900 dark:hover:border-slate-400 dark:hover:text-white",
  "hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-300",
  // "hover:border-pink-400 hover:text-pink-600 dark:hover:border-pink-400 dark:hover:text-pink-300",
  // "hover:border-blue-500 hover:text-blue-700 dark:hover:border-blue-500 dark:hover:text-blue-300",
];

export default function Contact() {
  const t           = useTranslations("contact");
  const socialLinks = t.raw("socialLinks") as { href: string; platform: string }[];

  return (
    <section
      id="contacto"
      className="relative bg-[#f5f7fb] px-6 py-28 transition-colors duration-300 md:px-10 lg:px-16 dark:bg-[#070b14]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(139,92,246,0.05),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(139,92,246,0.09),transparent)]" />

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
              Hablemos de tu{" "}
              <span className="text-purple-600 dark:text-purple-400">proyecto</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="max-w-sm text-[15px] leading-relaxed text-slate-500 md:text-right dark:text-slate-400"
            >
              {t("subtitle")}
            </motion.p>
          </div>
        </motion.div>

        {/* ── Content ───────────────────────────────────────── */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">

          {/* ── Left — una sola card ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-white/10 dark:bg-[#0b1120]/80">

              {/* Top accent bar */}
              <div className="h-[3px] w-full bg-gradient-to-r from-purple-500 via-purple-400 to-transparent dark:from-purple-500 dark:via-purple-400 dark:to-transparent" />

              {/* Glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_0%,rgba(139,92,246,0.06),transparent)]" />

              <div className="relative flex flex-1 flex-col p-8">

                {/* Overline */}
                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-purple-400 dark:text-purple-500">
                  {t("title")}
                </p>

                {/* Título */}
                <h3 className="mb-3 text-[1.35rem] font-bold leading-snug text-slate-900 dark:text-white">
                  {t("left.title")}
                </h3>

                {/* Divisor */}
                <div className="mb-5 h-px w-10 bg-purple-300 dark:bg-purple-500/50" />

                {/* Descripción */}
                <p className="text-[15px] leading-[1.85] text-slate-500 dark:text-slate-400">
                  {t("left.description")}
                </p>

                {/* Separador interno */}
                <div className="my-7 h-px w-full bg-slate-100 dark:bg-white/[0.06]" />

                {/* Redes sociales */}
                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                  {t("left.socialTitle")}
                </p>

                <div className="flex flex-col gap-2.5">
                  {socialLinks.map((social, index) => {
                    const Icon = socialIcons[index];
                    if (!Icon) return null;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className={`
                          flex items-center gap-3.5 rounded-xl border border-slate-200
                          bg-slate-50 px-5 py-3.5 text-[14px] font-medium text-slate-600
                          transition-all duration-300
                          dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400
                          ${socialColors[index]}
                        `}
                      >
                        <Icon className="shrink-0 text-[17px]" />
                        <span>{social.platform}</span>
                        <span className="ml-auto text-[11px] text-slate-400 dark:text-slate-600">
                          →
                        </span>
                      </motion.a>
                    );
                  })}
                </div>

              </div>
            </div>
          </motion.div>

          {/* ── Right — form ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}