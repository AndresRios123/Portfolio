import ContactForm from "./ContactForm";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";

const socialLinks = [
  {
    platform: "GitHub",
    href: "#",
    icon: FiGithub,
  },
  {
    platform: "LinkedIn",
    href: "#",
    icon: FiLinkedin,
  },
  {
    platform: "Instagram",
    href: "#",
    icon: FiInstagram,
  },
  {
    platform: "Facebook",
    href: "#",
    icon: FiFacebook,
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="bg-[#f8fafc] px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <h2 className="text-[2rem] font-bold leading-none tracking-[-0.03em] text-[#0f172a] md:text-[3rem]">
            Contacto
          </h2>

          <div className="mt-4 h-[3px] w-[54px] rounded-full bg-[#8b5cf6]" />

          <p className="mt-5 max-w-[470px] text-[14px] leading-[1.6] text-[#64748b] md:text-[15px]">
            ¿Tienes un proyecto en mente? Me encantaría saber de ti
          </p>
        </div>

        {/* Main content */}
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          {/* Left side */}
          <div className="pt-1">
            <div className="max-w-[420px]">
              <h3 className="text-[28px] font-semibold leading-tight text-[#0f172a]">
                Conecta conmigo
              </h3>

              <p className="mt-5 text-[15px] leading-[1.75] text-[#475569]">
                Estoy disponible para oportunidades de colaboración, proyectos
                freelance o simplemente para una conversación sobre tecnología.
              </p>
            </div>

            <div className="mt-10">
              <h4 className="text-[15px] font-semibold text-[#0f172a]">
                Sígueme en redes sociales
              </h4>

              <div className="mt-4 space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-[46px] items-center gap-3 rounded-[8px] border border-[#e5e7eb] bg-white px-4 text-[14px] font-medium text-[#334155] transition-colors duration-200 hover:bg-[#f8fafc]"
                    >
                      <Icon className="text-[16px] text-[#475569]" />
                      <span>{social.platform}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right side */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}