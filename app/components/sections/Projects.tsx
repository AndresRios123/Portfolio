"use client";

import { projectsData } from "@/app/data/projectsData";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { HiOutlineCode } from "react-icons/hi";

export default function Projects() {
  return (
    <section id="proyectos" className="px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Proyectos
          </h2>

          {/* Línea decorativa */}
          <div className="mx-auto mt-3 h-[3px] w-14 rounded-full bg-purple-500" />

          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500 md:text-base">
            Una selección de proyectos que demuestran mis habilidades en
            desarrollo web y resolución de problemas
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-2xl border bg-white"
            >
              {/* Preview */}
              <div className="flex h-40 items-center justify-center bg-purple-200">
                <HiOutlineCode className="text-4xl text-purple-500" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-slate-900">
                  {project.key}
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Aquí irá la descripción del proyecto, explicando brevemente su
                  funcionalidad y propósito.
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex gap-3 pt-5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white"
                  >
                    <FiExternalLink />
                    Ver proyecto
                  </a>

                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    <FiGithub />
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