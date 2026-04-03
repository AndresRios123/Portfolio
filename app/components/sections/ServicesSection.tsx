import {
  Code2,
  Database,
  Zap,
  Palette,
  Smartphone,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Desarrollo Frontend",
    description:
      "Creación de interfaces web modernas y responsivas utilizando React, HTML5, CSS3 y JavaScript. Experiencia en diseño UI/UX.",
    icon: Code2,
    cardBg: "#EEF4FB",
    borderColor: "#B9D4FB",
    iconBg: "#DCEAFE",
    iconColor: "#2563EB",
    lineColor: "#1DA1F2",
  },
  {
    title: "Desarrollo Backend",
    description:
      "Desarrollo de APIs RESTful y bases de datos escalables con Node.js, Python y gestión eficiente de datos.",
    icon: Database,
    cardBg: "#F6F0FB",
    borderColor: "#E9CFFD",
    iconBg: "#EFE1FB",
    iconColor: "#A855F7",
    lineColor: "#D946EF",
  },
  {
    title: "Aplicaciones Full Stack",
    description:
      "Desarrollo completo de aplicaciones web, desde la interfaz hasta el servidor, con arquitecturas modernas y escalables.",
    icon: Zap,
    cardBg: "#FBF6EE",
    borderColor: "#F3C798",
    iconBg: "#F9E5CC",
    iconColor: "#F97316",
    lineColor: "#FF5A1F",
  },
  {
    title: "Diseño UI/UX",
    description:
      "Diseño de interfaces intuitivas y atractivas con enfoque en la experiencia del usuario y las mejores prácticas de usabilidad.",
    icon: Palette,
    cardBg: "#FBF0F6",
    borderColor: "#F4B8D7",
    iconBg: "#F9DDEE",
    iconColor: "#EC4899",
    lineColor: "#FF4FA3",
  },
  {
    title: "Desarrollo Responsive",
    description:
      "Creación de aplicaciones web totalmente adaptables a cualquier dispositivo, garantizando una experiencia óptima.",
    icon: Smartphone,
    cardBg: "#EEF8F1",
    borderColor: "#A8E2BE",
    iconBg: "#DCF4E5",
    iconColor: "#16A34A",
    lineColor: "#22C55E",
  },
  {
    title: "Consultoría Técnica",
    description:
      "Asesoramiento en arquitectura de software, selección de tecnologías y mejores prácticas para proyectos digitales.",
    icon: Users,
    cardBg: "#EEF2FC",
    borderColor: "#C1D0FB",
    iconBg: "#DDE5FF",
    iconColor: "#4F46E5",
    lineColor: "#6366F1",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#f7f7f8] px-6 py-8 md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1150px]">
        {/* Header */}
        <div className="mx-auto mb-[42px] max-w-[640px] text-center">
          <span className="inline-flex h-[30px] items-center rounded-full bg-[#E8EEFF] px-[15px] text-[11px] font-semibold uppercase tracking-[0.02em] text-[#2563EB]">
            + Mis servicios
          </span>

          <h2 className="mt-[16px] text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0F172A] md:text-[30px]">
            ¿En qué puedo <span className="text-[#2563EB]">ayudarte?</span>
          </h2>

          <p className="mx-auto mt-[10px] max-w-[590px] text-[14px] leading-[1.9] text-[#5B6472]">
            Ofrezco servicios de desarrollo web profesional, desde el diseño hasta la
            implementación completa de soluciones digitales.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-x-[20px] gap-y-[22px] md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="min-h-[226px] rounded-[14px] border px-[22px] pt-[24px] pb-[20px]"
                style={{
                  backgroundColor: service.cardBg,
                  borderColor: service.borderColor,
                }}
              >
                <div
                  className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px]"
                  style={{ backgroundColor: service.iconBg }}
                >
                  <Icon
                    className="h-[19px] w-[19px]"
                    style={{ color: service.iconColor }}
                    strokeWidth={2.1}
                  />
                </div>

                <h3 className="mt-[18px] text-[16px] font-extrabold leading-[1.35] text-[#0F172A]">
                  {service.title}
                </h3>

                <p className="mt-[12px] max-w-[255px] text-[13px] leading-[1.75] text-[#4B5563]">
                  {service.description}
                </p>

                <div
                  className="mt-[16px] h-[3px] w-[32px] rounded-full"
                  style={{ backgroundColor: service.lineColor }}
                />
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-[40px] flex justify-center">
          <div className="flex w-full max-w-[395px] items-center justify-between rounded-[14px] bg-gradient-to-r from-[#3B82F6] to-[#A21CAF] px-[22px] py-[18px] text-white shadow-[0_12px_30px_rgba(104,76,255,0.28)] md:max-w-[395px]">
            <div>
              <h3 className="text-[17px] font-extrabold leading-[1.2]">
                ¿Tienes un proyecto en mente?
              </h3>
              <p className="mt-[6px] text-[12.5px] leading-[1.4] text-white/92">
                Trabajemos juntos para hacerlo realidad
              </p>
            </div>

            <a
              href="#contact"
              className="ml-4 inline-flex h-[40px] min-w-[106px] items-center justify-center rounded-[8px] bg-white px-[18px] text-[13px] font-semibold text-[#2563EB]"
            >
              Contáctame
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}