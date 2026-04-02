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
    <footer>
      <div>
        {/* Top section */}
        <div>
          {/* Column 1 - Branding */}
          <div>
            <div>
              <span>{"<AR>"}</span>
            </div>

            <p>
              Ingeniero de software enfocado en crear soluciones digitales
              eficientes y escalables. Apasionado por el desarrollo web y las
              nuevas tecnologías.
            </p>

            <div>
              <FiMapPin />
              <span>Colombia</span>
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <div>
              <HiOutlineCodeBracket />
              <h3>Navegación</h3>
            </div>

            <nav aria-label="Footer navigation">
              <ul>
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3 - Services */}
          <div>
            <div>
              <RiStackLine />
              <h3>Servicios</h3>
            </div>

            <ul>
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <div>
              <FiMail />
              <h3>Contacto</h3>
            </div>

            <div>
              <div>
                <FiMail />
                <a href="mailto:andresrios@example.com">
                  andresrios@example.com
                </a>
              </div>

              <div>
                <FiPhone />
                <a href="tel:+573001234567">+57 300 123 4567</a>
              </div>
            </div>

            <div>
              <p>Sígueme en:</p>

              <div>
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div />

        {/* Bottom section */}
        <div>
          <p>
            © 2026 <span>Andres Rios</span>. Todos los derechos reservados.
          </p>

          <p>
            Construido con <FiHeart /> y mucha pasión por la tecnología
          </p>
        </div>
      </div>
    </footer>
  );
}