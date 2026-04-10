"use client";

import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
      <span className="ml-[2px] inline-block h-[0.85em] w-[2px] animate-pulse rounded-sm bg-[#0f172a] dark:bg-[#60a5fa]" />
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: [0.22, 1, 0.36, 1] as const,
    },
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
        // Espera 1 segundo fija antes de desaparecer
        if (!timer) {
          timer = setTimeout(() => {
            setShowScroll(false);
          }, 100);
        }
      } else {
        // Si vuelve arriba, cancela el timer y la muestra de nuevo
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
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
      className="relative bg-[#f5f7fb] pt-24 transition-colors duration-300 dark:bg-[#070b14]"
    >
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl items-center gap-10 px-8 py-14 md:grid-cols-2 md:px-12 lg:px-20">
        <motion.div
          className="flex flex-col items-start justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="mb-4 text-base font-medium text-[#23395d] md:text-lg dark:text-[#93c5fd]"
          >
            {t("greeting")}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mb-3 text-4xl font-bold leading-[0.95] tracking-[-0.03em] text-[#2563eb] md:text-6xl lg:text-7xl dark:text-[#60a5fa]"
          >
            {t("name")}
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mb-6 min-h-[1.3em] w-full text-2xl font-semibold leading-tight text-[#0f172a] md:text-3xl lg:text-4xl dark:text-[#f8fafc]"
          >
            <TypewriterRole roles={roles} />
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mb-8 max-w-xl text-base leading-relaxed text-[#415a77] md:text-lg dark:text-[#94a3b8]"
          >
            {t("description")}
          </motion.p>

          <motion.a
            variants={itemVariants}
            href="/cv.pdf"
            download
            className="mb-8 inline-flex items-center justify-center rounded-2xl bg-[#2563eb] px-7 py-3.5 text-base font-semibold text-white shadow-[0_12px_24px_rgba(37,99,235,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1d4ed8] dark:bg-[#3b82f6] dark:shadow-[0_14px_30px_rgba(59,130,246,0.28)] dark:hover:bg-[#2563eb]"
          >
            {t("button")}
          </motion.a>

          <motion.nav
            variants={itemVariants}
            aria-label="Redes sociales"
            className="flex items-center gap-7 text-[#334155] dark:text-[#94a3b8]"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AndresRios123"
              aria-label="GitHub"
              className="text-xl transition-all duration-300 hover:scale-110 hover:text-[#2563eb] dark:hover:text-[#60a5fa]"
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/andres-camilo-rios/"
              aria-label="LinkedIn"
              className="text-xl transition-all duration-300 hover:scale-110 hover:text-[#2563eb] dark:hover:text-[#60a5fa]"
            >
              <FaLinkedinIn />
            </a>
          </motion.nav>
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative flex h-[280px] w-[280px] items-center justify-center rounded-full border border-[#bfd8ff] bg-[#dbeafe]/25 shadow-[0_0_80px_rgba(147,197,253,0.28)] transition-colors duration-300 sm:h-[340px] sm:w-[340px] lg:h-[420px] lg:w-[420px] dark:border-[#1e3a8a]/60 dark:bg-[#0f172a]/60 dark:shadow-[0_0_100px_rgba(59,130,246,0.18)]">
            <div className="relative h-[235px] w-[235px] overflow-hidden rounded-full border-[5px] border-white shadow-[0_10px_30px_rgba(15,23,42,0.12)] sm:h-[285px] sm:w-[285px] lg:h-[355px] lg:w-[355px] dark:border-[#1e293b] dark:shadow-[0_14px_40px_rgba(0,0,0,0.35)]">
              <Image
                src="/profileeee.jpg"
                alt="Foto de perfil"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.15)_0%,_rgba(219,234,254,0)_65%)] dark:bg-[radial-gradient(circle,_rgba(96,165,250,0.12)_0%,_rgba(15,23,42,0)_68%)]" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator — fixed en pantalla, desaparece 1s después de empezar a scrollear */}
      <AnimatePresence>
        {showScroll && (
          <motion.div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10, transition: { duration: 0.4, ease: "easeInOut" } }}
            transition={{ delay: 1.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#94a3b8] dark:text-[#475569]">
              scroll
            </span>

            <div className="relative flex h-[38px] w-[24px] items-start justify-center rounded-full border-2 border-[#94a3b8] pt-[5px] dark:border-[#475569]">
              <motion.div
                className="h-[7px] w-[3px] rounded-full bg-[#2563eb] dark:bg-[#60a5fa]"
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <motion.svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              className="text-[#94a3b8] dark:text-[#475569]"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            >
              <path
                d="M1 1L8 8L15 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}