"use client";

import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
      <span className="ml-[2px] inline-block h-[0.85em] w-[2px] animate-pulse rounded-sm bg-[#0f172a]" />
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

  return (
    <section id="inicio" className="bg-[#f5f7fb] pt-24">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl items-center gap-10 px-8 py-14 md:grid-cols-2 md:px-12 lg:px-20">

        <motion.div
          className="flex flex-col items-start justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="mb-4 text-base font-medium text-[#23395d] md:text-lg"
          >
            {t("greeting")}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mb-3 text-4xl font-bold leading-[0.95] tracking-[-0.03em] text-[#2563eb] md:text-6xl lg:text-7xl"
          >
            {t("name")}
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mb-6 min-h-[1.3em] w-full text-2xl font-semibold leading-tight text-[#0f172a] md:text-3xl lg:text-4xl"
          >
            <TypewriterRole roles={roles} />
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mb-8 text-base leading-relaxed text-[#415a77] md:text-lg"
          >
            {t("description")}
          </motion.p>

          <motion.a
            variants={itemVariants}
            href="/cv.pdf"
            download
            className="mb-8 inline-flex items-center justify-center rounded-2xl bg-[#2563eb] px-7 py-3.5 text-base font-semibold text-white shadow-[0_12px_24px_rgba(37,99,235,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#1d4ed8]"
          >
            {t("button")}
          </motion.a>

          <motion.nav
            variants={itemVariants}
            aria-label="Redes sociales"
            className="flex items-center gap-7 text-[#334155]"
          >
            <a
              target="_blank"
              href="https://github.com/AndresRios123"
              aria-label="GitHub"
              className="text-xl transition duration-300 hover:scale-110 hover:text-[#2563eb]"
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/andres-camilo-rios/"
              aria-label="LinkedIn"
              className="text-xl transition duration-300 hover:scale-110 hover:text-[#2563eb]"
            >
              <FaLinkedinIn />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/camilo_rios__17/"
              aria-label="Instagram"
              className="text-xl transition duration-300 hover:scale-110 hover:text-[#2563eb]"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/camilo.maya.92/"
              aria-label="Facebook"
              className="text-xl transition duration-300 hover:scale-110 hover:text-[#2563eb]"
            >
              <FaFacebookF />
            </a>
          </motion.nav>
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative flex h-[280px] w-[280px] items-center justify-center rounded-full border border-[#bfd8ff] bg-[#dbeafe]/25 shadow-[0_0_80px_rgba(147,197,253,0.28)] sm:h-[340px] sm:w-[340px] lg:h-[420px] lg:w-[420px]">
            <div className="flex h-[235px] w-[235px] items-center justify-center rounded-full border-[5px] border-white bg-[#dfe7f2]/85 sm:h-[285px] sm:w-[285px] lg:h-[355px] lg:w-[355px]">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#cfe1ff] sm:h-24 sm:w-24">
                <UserRound
                  size={34}
                  strokeWidth={1.8}
                  className="text-[#7aaef7] sm:h-10 sm:w-10"
                />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.15)_0%,_rgba(219,234,254,0)_65%)]" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
