"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { DM_Serif_Display } from "next/font/google";
import { projectsData } from "@/app/data/projectsData";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
});

const tripled = [...projectsData, ...projectsData, ...projectsData];

const tagColors: Record<string, string> = {
  React:
    "bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20",
  JavaScript:
    "bg-yellow-50 text-yellow-700 border-yellow-100 dark:bg-yellow-500/10 dark:text-yellow-300 dark:border-yellow-500/20",
  CSS:
    "bg-pink-50 text-pink-600 border-pink-100 dark:bg-pink-500/10 dark:text-pink-300 dark:border-pink-500/20",
  "Node.js":
    "bg-green-50 text-green-700 border-green-100 dark:bg-green-500/10 dark:text-green-300 dark:border-green-500/20",
  Python:
    "bg-indigo-50 text-indigo-600 border-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20",
  AI:
    "bg-purple-50 text-purple-600 border-purple-100 dark:bg-purple-500/10 dark:text-purple-300 dark:border-purple-500/20",
  API:
    "bg-orange-50 text-orange-600 border-orange-100 dark:bg-orange-500/10 dark:text-orange-300 dark:border-orange-500/20",
  "API Integration":
    "bg-orange-50 text-orange-600 border-orange-100 dark:bg-orange-500/10 dark:text-orange-300 dark:border-orange-500/20",
  "Payment API":
    "bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20",
  Dashboard:
    "bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-500/10 dark:text-slate-300 dark:border-slate-500/20",
};

const cardAccents = [
  "from-violet-500 via-purple-400 to-transparent dark:from-blue-500 dark:via-blue-400 dark:to-transparent",
  "from-blue-500 via-cyan-400 to-transparent",
  "from-pink-500 via-rose-400 to-transparent",
];

const cardGlows = [
  "hover:shadow-[0_8px_40px_rgba(139,92,246,0.13)] dark:hover:shadow-[0_8px_40px_rgba(59,130,246,0.13)]",
  "hover:shadow-[0_8px_40px_rgba(59,130,246,0.13)]",
  "hover:shadow-[0_8px_40px_rgba(236,72,153,0.13)]",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const headerStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16 } },
};

const SPEED = 0.8;

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const rafRef = useRef<number>(0);
  const scrollPos = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      if (!pausedRef.current && !isDragging.current && track) {
        const half = track.scrollWidth / 2;
        scrollPos.current += SPEED;
        if (scrollPos.current >= half) scrollPos.current -= half;
        track.scrollLeft = scrollPos.current;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartScroll.current = scrollPos.current;
    setPaused(true);
    track.style.cursor = "grabbing";
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const track = trackRef.current;
    const half = track.scrollWidth / 2;
    let newPos = dragStartScroll.current - (e.clientX - dragStartX.current);
    if (newPos >= half) newPos -= half;
    if (newPos < 0) newPos += half;
    scrollPos.current = newPos;
    track.scrollLeft = newPos;
  }, []);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    setPaused(false);
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  }, []);

  const onMouseLeave = useCallback(() => {
    if (isDragging.current) isDragging.current = false;
    setPaused(false);
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  }, []);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    isDragging.current = true;
    dragStartX.current = e.touches[0].clientX;
    dragStartScroll.current = scrollPos.current;
    setPaused(true);
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const track = trackRef.current;
    const half = track.scrollWidth / 2;
    let newPos =
      dragStartScroll.current -
      (e.touches[0].clientX - dragStartX.current);
    if (newPos >= half) newPos -= half;
    if (newPos < 0) newPos += half;
    scrollPos.current = newPos;
    track.scrollLeft = newPos;
  }, []);

  const onTouchEnd = useCallback(() => {
    isDragging.current = false;
    setPaused(false);
  }, []);

  return (
    <section
      id="proyectos"
      className={`${dmSerif.variable} relative overflow-hidden bg-[#f5f7fb] px-6 py-28 transition-colors duration-300 md:px-10 lg:px-16 dark:bg-[#070b14]`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(139,92,246,0.05),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.07),transparent)]" />

      <div className="relative mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headerStagger}
          className="mb-16 flex flex-col items-start"
        >
          <motion.span
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-purple-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-blue-400" />
            Proyectos
          </motion.span>

          <div className="flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <motion.h2
              variants={fadeUp}
              className="max-w-xl text-balance text-4xl font-normal tracking-tight text-slate-950 md:text-5xl lg:text-[3.5rem] lg:leading-[1.1] dark:text-white"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Lo que he{" "}
              <span className="italic text-purple-600 dark:text-blue-400">
                construido
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="max-w-sm text-[15px] leading-relaxed text-slate-500 md:text-right dark:text-slate-400"
            >
              Una selección de proyectos que demuestran mis habilidades en
              desarrollo web y resolución de problemas.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#f5f7fb] to-transparent dark:from-[#070b14]" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#f5f7fb] to-transparent dark:from-[#070b14]" />

          <div className="absolute -top-8 right-0 flex items-center gap-1.5 select-none text-[11px] font-medium text-slate-400 dark:text-slate-600">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 8L22 12L18 16M6 8L2 12L6 16M2 12H22" />
            </svg>
            Arrastra para explorar
          </div>

          <div
            ref={trackRef}
            className="overflow-x-hidden"
            style={{ cursor: "grab" }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex gap-6 py-4"
              style={{ width: "max-content" }}
            >
              {tripled.map((project, i) => {
                const accentIdx =
                  (project.id - 1) % cardAccents.length;
                const isUnavailable = project.liveUrl === "#";

                return (
                  <article
                    key={`${project.id}-${i}`}
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => {
                      if (!isDragging.current) setPaused(false);
                    }}
                    className={`
                      group relative flex w-[340px] shrink-0 flex-col overflow-hidden
                      rounded-2xl border border-slate-200/80 bg-white
                      shadow-sm transition-all duration-500
                      hover:-translate-y-1.5 hover:border-purple-200/80
                      ${cardGlows[accentIdx]}
                      dark:border-white/10 dark:bg-[#0b1120]/80
                      dark:hover:border-blue-500/30
                      select-none
                    `}
                  >
                    <div
                      className={`h-[3px] w-full bg-gradient-to-r ${cardAccents[accentIdx]}`}
                    />

                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(139,92,246,0.06),transparent)] dark:bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(59,130,246,0.09),transparent)]" />

                    <span className="pointer-events-none absolute right-5 top-4 select-none text-6xl font-black leading-none text-slate-100 transition-opacity duration-500 group-hover:opacity-60 dark:text-white/[0.04]">
                      {String(project.id).padStart(2, "0")}
                    </span>

                    <div className="relative flex flex-1 flex-col p-7">
                      <h3 className="mb-3 text-[1.1rem] font-bold leading-snug text-slate-900 dark:text-white">
                        {project.title}
                      </h3>

                      <p className="mb-5 flex-1 text-[13.5px] leading-[1.8] text-slate-500 dark:text-slate-400">
                        {project.description}
                      </p>

                      <div className="mb-6 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`rounded-full border px-3 py-1 text-[11px] font-medium ${
                              tagColors[tag] ??
                              "bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-500/10 dark:text-slate-300 dark:border-slate-500/20"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2.5 border-t border-slate-100 pt-5 dark:border-white/[0.06]">
                        {isUnavailable ? (
                          <span className="inline-flex h-9 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 text-[13px] font-medium text-slate-400 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-500">
                            Próximamente
                          </span>
                        ) : (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-xl bg-purple-600 px-4 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-purple-700 dark:bg-blue-600 dark:hover:bg-blue-500"
                          >
                            <FiExternalLink className="text-[13px]" />
                            Ver proyecto
                          </a>
                        )}

                        <a
                          href={
                            project.codeUrl === "#"
                              ? undefined
                              : project.codeUrl
                          }
                          target="_blank"
                          rel="noreferrer"
                          aria-disabled={project.codeUrl === "#"}
                          className={`inline-flex h-9 items-center justify-center gap-1.5 rounded-xl border px-4 text-[13px] font-medium transition-all duration-300 ${
                            project.codeUrl === "#"
                              ? "pointer-events-none border-slate-200 bg-slate-50 text-slate-400 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-500"
                              : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-transparent dark:text-slate-300 dark:hover:bg-white/5"
                          }`}
                        >
                          <FiGithub className="text-[13px]" />
                          Código
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}