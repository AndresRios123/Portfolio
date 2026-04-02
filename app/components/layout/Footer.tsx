import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiHeart,
} from "react-icons/fi";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { RiStackLine } from "react-icons/ri";

export default function Footer() {
  const navigationLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Experiencia Académica", href: "#experiencia" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Testimonios", href: "#testimonios" },
  ];

  const services = [
    "Desarrollo Web Frontend",
    "Desarrollo Web Backend",
    "Aplicaciones Full Stack",
    "Diseño de Interfaces",
    "Consultoría Técnica",
  ];

  const socialLinks = [
    { icon: FiGithub, href: "#", label: "GitHub" },
    { icon: FiLinkedin, href: "#", label: "LinkedIn" },
    { icon: FiInstagram, href: "#", label: "Instagram" },
    { icon: FiFacebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-[#071633] px-6 py-16 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1180px]">
        {/* Top section */}
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.15fr_1fr_1.15fr_1.05fr]">
          {/* Column 1 - Branding */}
          <div>
            <div className="text-[22px] font-extrabold tracking-[-0.04em] text-[#4ea1ff]">
              {"<AR>"}
            </div>

            <p className="mt-8 max-w-[290px] text-[15px] leading-[1.65] text-[#b4c1da]">
              Ingeniero de software enfocado en crear soluciones digitales
              eficientes y escalables. Apasionado por el desarrollo web y las
              nuevas tecnologías.
            </p>

            <div className="mt-8 flex items-center gap-2.5 text-[15px] text-[#c3d0e6]">
              <FiMapPin className="text-[15px] text-[#4ea1ff]" />
              <span>Colombia</span>
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <div className="flex items-center gap-2.5">
              <HiOutlineCodeBracket className="text-[17px] text-[#4ea1ff]" />
              <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-white">
                Navegación
              </h3>
            </div>

            <nav aria-label="Footer navigation" className="mt-7">
              <ul className="space-y-4">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[15px] text-[#c3d0e6] transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3 - Services */}
          <div>
            <div className="flex items-center gap-2.5">
              <RiStackLine className="text-[17px] text-[#4ea1ff]" />
              <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-white">
                Servicios
              </h3>
            </div>

            <ul className="mt-7 space-y-4">
              {services.map((service) => (
                <li key={service} className="text-[15px] text-[#c3d0e6]">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <div className="flex items-center gap-2.5">
              <FiMail className="text-[17px] text-[#4ea1ff]" />
              <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-white">
                Contacto
              </h3>
            </div>

            <div className="mt-7 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-white/5">
                  <FiMail className="text-[17px] text-[#c3d0e6]" />
                </div>

                <a
                  href="mailto:andresrios@example.com"
                  className="text-[15px] text-[#c3d0e6] transition-colors duration-200 hover:text-white"
                >
                  andresrios@example.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-white/5">
                  <FiPhone className="text-[17px] text-[#c3d0e6]" />
                </div>

                <a
                  href="tel:+573001234567"
                  className="text-[15px] text-[#c3d0e6] transition-colors duration-200 hover:text-white"
                >
                  +57 300 123 4567
                </a>
              </div>
            </div>

            <div className="mt-9">
              <p className="text-[15px] text-[#c3d0e6]">Sígueme en:</p>

              <div className="mt-4 flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-[11px] bg-white/5 text-[#f8fafc] transition-all duration-200 hover:bg-white/10"
                    >
                      <Icon className="text-[16px]" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px w-full bg-white/10" />

        {/* Bottom section */}
        <div className="mt-8 flex flex-col gap-5 text-[15px] text-[#b4c1da] md:flex-row md:items-center md:justify-between">
          <p>
            © 2026{" "}
            <span className="font-semibold text-[#4ea1ff]">Andres Rios</span>.
            {" "}Todos los derechos reservados.
          </p>

          <p className="flex items-center gap-2">
            <span>Construido con</span>
            <FiHeart className="text-[#ff6b81]" />
            <span>y mucha pasión por la tecnología</span>
          </p>
        </div>
      </div>
    </footer>
  );
}