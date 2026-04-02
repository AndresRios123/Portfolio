// import ContactForm from "./ContactForm";

export default function Contact() {
  const socialLinks = [
    { platform: "GitHub", href: "#" },
    { platform: "LinkedIn", href: "#" },
    { platform: "Instagram", href: "#" },
    { platform: "Facebook", href: "#" },
  ];

  return (
    <section id="contacto">
      <div>
        {/* Header */}
        <div>
          <h2>Contacto</h2>
          <div />
          <p>
            ¿Tienes un proyecto en mente? Me encantaría saber de ti
          </p>
        </div>

        {/* Main content */}
        <div>
          {/* Left side */}
          <div>
            <div>
              <h3>Conecta conmigo</h3>
              <p>
                Estoy disponible para oportunidades de colaboración,
                proyectos freelance o simplemente para una conversación
                sobre tecnología.
              </p>
            </div>

            <div>
              <h4>Sígueme en redes sociales</h4>

              <div>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{social.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side */}
          <div>
            {/* <ContactForm /> */}
          </div>
        </div>
      </div>
    </section>
  );
}