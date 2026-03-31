"use client";

import { projectsData } from "@/app/data/projectsData";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { HiOutlineCode } from "react-icons/hi";

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="bg-[#f8fafc] px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <h2 className="text-[2rem] font-bold tracking-[-0.03em] text-[#0f172a] md:text-[3rem]">
            Proyectos
          </h2>

          <div className="mt-4 h-[3px] w-[52px] rounded-full bg-[#8b5cf6]" />

          <p className="mt-5 max-w-[470px] text-[14px] leading-[1.6] text-[#64748b] md:text-[15px]">
            Una selección de proyectos que demuestran mis habilidades en
            desarrollo web y resolución de problemas
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-[16px] border border-[#dbe4ff] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(15,23,42,0.08)]"
            >
              {/* Preview / luego aquí pondrás imagen real */}
              <div className="relative flex h-[180px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#ddd6fe] via-[#e9d5ff] to-[#f5d0fe]">
                {/* Cuando pongas imagen real, reemplazas este bloque */}
                <HiOutlineCode className="text-[64px] text-[#a78bfa]" />

                {/* Ejemplo futuro:
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
                */}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-[18px] font-semibold text-[#0f172a]">
                  {project.title}
                </h3>

                <p className="mt-3 text-[14px] leading-[1.75] text-[#475569]">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f3f4f6] px-3 py-[6px] text-[11px] font-medium text-[#6366f1]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-[40px] flex-1 items-center justify-center gap-2 rounded-[9px] bg-[#4f46e5] px-4 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-[#4338ca]"
                  >
                    <FiExternalLink className="text-[15px]" />
                    Ver proyecto
                  </a>

                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-[40px] items-center justify-center gap-2 rounded-[9px] border border-[#cbd5e1] bg-white px-4 text-[14px] font-medium text-[#0f172a] transition-all duration-200 hover:bg-[#f8fafc]"
                  >
                    <FiGithub className="text-[15px]" />
                    Código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}