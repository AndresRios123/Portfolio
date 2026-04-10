"use client";

import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
});

function TypewriterRole({ roles }: { roles: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "waiting" | "deleting">("typing");

  useEffect(() => {
    const current = roles[currentIndex];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setPhase("waiting"), 1800);
        return () => clearTimeout(timeout);
      }
    }

    if (phase === "waiting") {
      const timeout = setTimeout(() => setPhase("deleting"), 200);
      return () => clearTimeout(timeout);
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 35);
        return () => clearTimeout(timeout);
      } else {
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        setPhase("typing");
      }
    }
  }, [displayed, phase, currentIndex, roles]);

  return (
    <span className="inline-flex items-center">
      {displayed}
      <span className="ml-[2px] inline-block h-[0.85em] w-[2px] animate-pulse rounded-sm bg-[#2563eb] dark:bg-[#60a5fa]" />
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const t = useTranslations("Hero");
  const roles = t.raw("roles") as string[];
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    const handleScroll = () => {
      if (window.scrollY > 1) {
        if (!timer) {
          timer = setTimeout(() => setShowScroll(false), 1000);
        }
      } else {
        if (timer) { clearTimeout(timer); timer = null; }
        setShowScroll(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <section
      id="inicio"
      className={`${dmSans.variable} ${dmSerif.variable} relative bg-[#f5f7fb] pt-24 transition-colors duration-300 dark:bg-[#070b14]`}
    >
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl items-center gap-10 px-8 py-14 md:grid-cols-2 md:px-12 lg:px-20">

        {/* ── Text column ── */}
        <motion.div
          className="flex flex-col items-start justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.p
            variants={itemVariants}
            className="mb-5 flex items-center gap-2.5 text-sm font-medium uppercase tracking-[0.18em] text-[#2563eb] dark:text-[#60a5fa]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            <span className="inline-block h-px w-6 bg-[#2563eb] dark:bg-[#60a5fa]" />
            {t("greeting")}
          </motion.p>

          {/* Name — serif display */}
          <motion.h1
            variants={itemVariants}
            className="mb-2 text-5xl font-normal leading-[1.0] tracking-[-0.02em] text-[#0f172a] md:text-6xl lg:text-[5.2rem] dark:text-[#f1f5f9]"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            {t("name")}
          </motion.h1>

          {/* Typewriter role — lighter sans */}
          <motion.h2
            variants={itemVariants}
            className="mb-7 min-h-[1.4em] w-full text-xl font-light leading-snug tracking-[-0.01em] text-[#2563eb] md:text-2xl lg:text-3xl dark:text-[#60a5fa]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            <TypewriterRole roles={roles} />
          </motion.h2>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="mb-7 h-px w-12 bg-[#cbd5e1] dark:bg-[#1e293b]"
          />

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mb-9 max-w-md text-[1.05rem] font-light leading-[1.8] text-[#415a77] dark:text-[#94a3b8]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {t("description")}
          </motion.p>

          {/* CTA */}
          <motion.a
            variants={itemVariants}
            href="/cv.pdf"
            download
            className="mb-9 inline-flex items-center gap-2.5 rounded-full bg-[#0f172a] px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1e293b] dark:bg-[#f1f5f9] dark:text-[#0f172a] dark:hover:bg-white"
            style={{ fontFamily: "var(--font-dm-sans)", letterSpacing: "0.04em" }}
          >
            {t("button")}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>

          {/* Social links */}
          <motion.nav
            variants={itemVariants}
            aria-label="Redes sociales"
            className="flex items-center gap-6"
          >
            {[
              { href: "https://github.com/AndresRios123", label: "GitHub", icon: <FaGithub /> },
              { href: "https://www.linkedin.com/in/andres-camilo-rios/", label: "LinkedIn", icon: <FaLinkedinIn /> },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                target="_blank"
                rel="noreferrer"
                href={href}
                aria-label={label}
                className="flex items-center gap-1.5 text-sm font-light text-[#64748b] transition-all duration-300 hover:text-[#0f172a] dark:text-[#475569] dark:hover:text-[#f1f5f9]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                <span className="text-base">{icon}</span>
                <span>{label}</span>
              </a>
            ))}
          </motion.nav>
        </motion.div>

        {/* ── Image column ── */}
        <motion.div
          className="flex items-center justify-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative flex h-[280px] w-[280px] items-center justify-center rounded-full border border-[#e2e8f0] bg-white/40 shadow-[0_0_80px_rgba(147,197,253,0.22)] transition-colors duration-300 sm:h-[340px] sm:w-[340px] lg:h-[420px] lg:w-[420px] dark:border-[#1e3a8a]/40 dark:bg-[#0f172a]/50 dark:shadow-[0_0_100px_rgba(59,130,246,0.14)]">
            <div className="relative h-[235px] w-[235px] overflow-hidden rounded-full border-[4px] border-white shadow-[0_10px_40px_rgba(15,23,42,0.1)] sm:h-[285px] sm:w-[285px] lg:h-[355px] lg:w-[355px] dark:border-[#1e293b] dark:shadow-[0_14px_40px_rgba(0,0,0,0.4)]">
              <Image
                src="/profileeee.jpg"
                alt="Foto de perfil"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Subtle name label overlaid bottom-right */}
            <div
              className="absolute -bottom-3 right-4 rounded-full border border-[#e2e8f0] bg-white/90 px-4 py-1.5 backdrop-blur-sm dark:border-[#1e293b] dark:bg-[#0f172a]/90"
            >
              <span
                className="text-xs font-medium tracking-widest text-[#64748b] uppercase dark:text-[#475569]"
                style={{ fontFamily: "var(--font-dm-sans)", letterSpacing: "0.14em" }}
              >
                {t("name")}
              </span>
            </div>

            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.12)_0%,_rgba(219,234,254,0)_65%)] dark:bg-[radial-gradient(circle,_rgba(96,165,250,0.08)_0%,_rgba(15,23,42,0)_68%)]" />
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <AnimatePresence>
        {showScroll && (
          <motion.div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10, transition: { duration: 0.4, ease: "easeInOut" } }}
            transition={{ delay: 1.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#94a3b8] dark:text-[#334155]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              scroll
            </span>
            <div className="relative flex h-[36px] w-[22px] items-start justify-center rounded-full border border-[#cbd5e1] pt-[5px] dark:border-[#1e293b]">
              <motion.div
                className="h-[6px] w-[2px] rounded-full bg-[#2563eb] dark:bg-[#3b82f6]"
                animate={{ y: [0, 11, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <motion.svg
              width="14" height="8" viewBox="0 0 14 8" fill="none"
              className="text-[#94a3b8] dark:text-[#334155]"
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            >
              <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}