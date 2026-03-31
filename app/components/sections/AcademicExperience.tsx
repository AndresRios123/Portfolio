"use client";

import { GraduationCap, CalendarDays, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { academicExperience } from "@/app/data/academicData";

export default function AcademicExperience() {
  const t = useTranslations("experience");

  return (
    <section
      id="experiencia"
      className="bg-[#f8fafc] px-6 py-20 md:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] shadow-[0_10px_30px_rgba(124,58,237,0.25)]">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-3 max-w-2xl text-sm text-slate-500 md:text-base">
            {t("subtitle")}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-7 top-0 hidden h-full w-px bg-slate-200 md:block" />

          <div className="space-y-8 md:space-y-10">
            {academicExperience.map((item) => (
              <article key={item.id} className="relative md:pl-16">
                {/* Icono timeline desktop */}
                <div className="absolute left-0 top-8 z-10 hidden h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] shadow-[0_10px_25px_rgba(124,58,237,0.25)] md:flex">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>

                {/* Card */}
                <div className="rounded-3xl border border-[#c7d2fe] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)] md:p-8">
                  <div className="flex flex-col gap-6">
                    {/* Icono mobile */}
                    <div className="flex md:hidden">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] shadow-[0_10px_25px_rgba(124,58,237,0.25)]">
                        <GraduationCap className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    {/* Top */}
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                      <div>
                        <h3 className="text-xl font-bold text-[#4f46e5] md:text-2xl">
                          {t(`items.${item.key}.title`)}
                        </h3>
                        <h4 className="mt-1 text-sm font-semibold text-slate-800 md:text-base">
                          {t(`items.${item.key}.institution`)}
                        </h4>
                      </div>

                      <div className="flex flex-col gap-2 text-sm text-slate-500 md:min-w-[160px] md:items-start">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-slate-400" />
                          <span>{item.period}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-slate-400" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Descripción */}
                    <p className="max-w-4xl text-sm leading-7 text-slate-600 md:text-[15px]">
                      {t(`items.${item.key}.description`)}
                    </p>

                    {/* Highlights */}
                    <div>
                      <h5 className="mb-3 text-sm font-semibold text-slate-700">
                        {t("highlights")}
                      </h5>

                      <ul className="space-y-2">
                        {t.raw(`items.${item.key}.highlights`).map(
                          (highlight: string, i: number) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-sm text-slate-600"
                            >
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#6366f1]" />
                              <span>{highlight}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}