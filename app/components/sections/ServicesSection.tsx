"use client";

import { Code, Palette, Database, Smartphone, Zap, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Desarrollo Frontend",
    description:
      "Creación de interfaces web modernas y responsivas utilizando React, HTML5, CSS3 y JavaScript. Experiencia en diseño UI/UX.",
    gradient: "from-blue-500 to-cyan-400",
    cardBg: "bg-blue-50 dark:bg-blue-500/10",
    cardBorder: "border-blue-100 dark:border-blue-400/20",
    iconBg: "bg-blue-100 dark:bg-blue-500/20",
    iconColor: "text-blue-500 dark:text-blue-300",
    barColor: "from-blue-500 to-cyan-400",
  },
  {
    icon: Database,
    title: "Desarrollo Backend",
    description:
      "Desarrollo de APIs RESTful y bases de datos escalables con Node.js, Python y gestión eficiente de datos.",
    gradient: "from-violet-500 to-purple-400",
    cardBg: "bg-purple-50 dark:bg-purple-500/10",
    cardBorder: "border-purple-100 dark:border-purple-400/20",
    iconBg: "bg-purple-100 dark:bg-purple-500/20",
    iconColor: "text-purple-500 dark:text-purple-300",
    barColor: "from-violet-500 to-purple-400",
  },
  {
    icon: Zap,
    title: "Aplicaciones Full Stack",
    description:
      "Desarrollo completo de aplicaciones web, desde la interfaz hasta el servidor, con arquitecturas modernas y escalables.",
    gradient: "from-orange-400 to-red-400",
    cardBg: "bg-orange-50 dark:bg-orange-500/10",
    cardBorder: "border-orange-100 dark:border-orange-400/20",
    iconBg: "bg-orange-100 dark:bg-orange-500/20",
    iconColor: "text-orange-500 dark:text-orange-300",
    barColor: "from-orange-400 to-red-400",
  },
  {
    icon: Palette,
    title: "Diseño UI/UX",
    description:
      "Diseño de interfaces intuitivas y atractivas con enfoque en la experiencia del usuario y las mejores prácticas de usabilidad.",
    gradient: "from-pink-500 to-rose-400",
    cardBg: "bg-pink-50 dark:bg-pink-500/10",
    cardBorder: "border-pink-100 dark:border-pink-400/20",
    iconBg: "bg-pink-100 dark:bg-pink-500/20",
    iconColor: "text-pink-500 dark:text-pink-300",
    barColor: "from-pink-500 to-rose-400",
  },
  {
    icon: Smartphone,
    title: "Desarrollo Responsive",
    description:
      "Creación de aplicaciones web totalmente adaptables a cualquier dispositivo, garantizando una experiencia óptima.",
    gradient: "from-green-500 to-emerald-400",
    cardBg: "bg-green-50 dark:bg-green-500/10",
    cardBorder: "border-green-100 dark:border-green-400/20",
    iconBg: "bg-green-100 dark:bg-green-500/20",
    iconColor: "text-green-600 dark:text-green-300",
    barColor: "from-green-500 to-emerald-400",
  },
  {
    icon: Users,
    title: "Consultoría Técnica",
    description:
      "Asesoramiento en arquitectura de software, selección de tecnologías y mejores prácticas para proyectos digitales.",
    gradient: "from-indigo-500 to-blue-400",
    cardBg: "bg-indigo-50 dark:bg-indigo-500/10",
    cardBorder: "border-indigo-100 dark:border-indigo-400/20",
    iconBg: "bg-indigo-100 dark:bg-indigo-500/20",
    iconColor: "text-indigo-500 dark:text-indigo-300",
    barColor: "from-indigo-500 to-blue-400",
  },
];

export function ServicesSection() {
  const handleContactClick = () => {
    const el = document.getElementById("contacto");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="servicios"
      className="bg-white px-4 py-20 transition-colors duration-300 sm:px-6 lg:px-8 dark:bg-[#070b14]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="mb-5 inline-flex select-none items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-300">
            + MIS SERVICIOS
          </span>

          <h2 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-5xl">
            ¿En qué puedo{" "}
            <span className="text-blue-500 dark:text-blue-400">ayudarte?</span>
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-gray-500 dark:text-gray-400 md:text-lg">
            Ofrezco servicios de desarrollo web profesional, desde el diseño
            hasta la implementación completa de soluciones digitales.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className={`
                  group relative flex flex-col
                  ${service.cardBg} border ${service.cardBorder}
                  cursor-default overflow-hidden rounded-2xl p-7
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl
                  dark:hover:shadow-[0_20px_45px_rgba(0,0,0,0.25)]
                `}
              >
                <div
                  className={`
                    mb-5 flex h-14 w-14 items-center justify-center rounded-2xl
                    ${service.iconBg} ${service.iconColor}
                    transition-transform duration-300 group-hover:scale-110
                  `}
                >
                  <Icon strokeWidth={1.75} className="h-7 w-7" />
                </div>

                <h3 className="mb-2 text-lg font-bold leading-snug text-gray-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="flex-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {service.description}
                </p>

                <div
                  className={`
                    mt-6 h-[3px] rounded-full
                    bg-gradient-to-r ${service.barColor}
                    w-10 transition-all duration-500 group-hover:w-full
                  `}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-5">
          <button
            onClick={handleContactClick}
            className="
              group relative flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl
              border border-blue-100 bg-blue-50 p-7 text-left
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-xl
              dark:border-blue-400/20 dark:bg-blue-500/10
              dark:hover:shadow-[0_20px_45px_rgba(0,0,0,0.25)]
            "
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-500 transition-transform duration-300 group-hover:scale-110 dark:bg-blue-500/20 dark:text-blue-300">
                  <ArrowRight strokeWidth={1.75} className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-snug text-gray-900 dark:text-white">
                    ¿Tienes un proyecto en mente?
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    Trabajemos juntos para hacerlo realidad.
                  </p>
                </div>
              </div>

              <div className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 group-hover:shadow-md">
                Contáctame
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}