"use client";

import { Code, Palette, Database, Smartphone, Zap, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Desarrollo Frontend",
    description:
      "Creación de interfaces web modernas y responsivas utilizando React, HTML5, CSS3 y JavaScript. Experiencia en diseño UI/UX.",
    gradient: "from-blue-500 to-cyan-400",
    cardBg: "bg-blue-50",
    cardBorder: "border-blue-100",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    barColor: "from-blue-500 to-cyan-400",
  },
  {
    icon: Database,
    title: "Desarrollo Backend",
    description:
      "Desarrollo de APIs RESTful y bases de datos escalables con Node.js, Python y gestión eficiente de datos.",
    gradient: "from-violet-500 to-purple-400",
    cardBg: "bg-purple-50",
    cardBorder: "border-purple-100",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
    barColor: "from-violet-500 to-purple-400",
  },
  {
    icon: Zap,
    title: "Aplicaciones Full Stack",
    description:
      "Desarrollo completo de aplicaciones web, desde la interfaz hasta el servidor, con arquitecturas modernas y escalables.",
    gradient: "from-orange-400 to-red-400",
    cardBg: "bg-orange-50",
    cardBorder: "border-orange-100",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    barColor: "from-orange-400 to-red-400",
  },
  {
    icon: Palette,
    title: "Diseño UI/UX",
    description:
      "Diseño de interfaces intuitivas y atractivas con enfoque en la experiencia del usuario y las mejores prácticas de usabilidad.",
    gradient: "from-pink-500 to-rose-400",
    cardBg: "bg-pink-50",
    cardBorder: "border-pink-100",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-500",
    barColor: "from-pink-500 to-rose-400",
  },
  {
    icon: Smartphone,
    title: "Desarrollo Responsive",
    description:
      "Creación de aplicaciones web totalmente adaptables a cualquier dispositivo, garantizando una experiencia óptima.",
    gradient: "from-green-500 to-emerald-400",
    cardBg: "bg-green-50",
    cardBorder: "border-green-100",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    barColor: "from-green-500 to-emerald-400",
  },
  {
    icon: Users,
    title: "Consultoría Técnica",
    description:
      "Asesoramiento en arquitectura de software, selección de tecnologías y mejores prácticas para proyectos digitales.",
    gradient: "from-indigo-500 to-blue-400",
    cardBg: "bg-indigo-50",
    cardBorder: "border-indigo-100",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-500",
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-blue-100 mb-5 select-none">
            + MIS SERVICIOS
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            ¿En qué puedo{" "}
            <span className="text-blue-500">ayudarte?</span>
          </h2>

          <p className="text-base md:text-lg text-gray-500 max-w-xl leading-relaxed">
            Ofrezco servicios de desarrollo web profesional, desde el diseño
            hasta la implementación completa de soluciones digitales.
          </p>
        </div>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className={`
                  group relative flex flex-col
                  ${service.cardBg} border ${service.cardBorder}
                  rounded-2xl p-7 overflow-hidden
                  transition-all duration-300
                  hover:shadow-xl hover:-translate-y-1
                  cursor-default
                `}
              >
                {/* Icon container */}
                <div
                  className={`
                    w-14 h-14 rounded-2xl
                    ${service.iconBg} ${service.iconColor}
                    flex items-center justify-center mb-5
                    transition-transform duration-300 group-hover:scale-110
                  `}
                >
                  <Icon strokeWidth={1.75} className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Animated gradient bar */}
                <div
                  className={`
                    mt-6 h-[3px] rounded-full
                    bg-gradient-to-r ${service.barColor}
                    w-10 group-hover:w-full
                    transition-all duration-500
                  `}
                />
              </div>
            );
          })}
        </div>

        {/* ── CTA Card ── */}
        <div className="mt-5">
          <button
            onClick={handleContactClick}
            className="
              group relative w-full flex flex-col
              bg-blue-50 border border-blue-100
              rounded-2xl p-7 overflow-hidden
              transition-all duration-300
              hover:shadow-xl hover:-translate-y-1
              text-left cursor-pointer
            "
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Left: icon + text */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-500 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight strokeWidth={1.75} className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug">
                    ¿Tienes un proyecto en mente?
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Trabajemos juntos para hacerlo realidad.
                  </p>
                </div>
              </div>

              {/* Right: button */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm group-hover:shadow-md shrink-0 transition-all duration-300">
                Contáctame
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
              </div>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}