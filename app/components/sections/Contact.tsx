import ContactForm from "./ContactForm";

export default function Contact() {
  const socialLinks = [
    { platform: "GitHub", href: "#" },
    { platform: "LinkedIn", href: "#" },
    { platform: "Instagram", href: "#" },
    { platform: "Facebook", href: "#" },
  ];

  return (
    <section
      id="contacto"
      className="bg-[#f8fafc] px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <h2 className="text-[2rem] font-bold tracking-[-0.03em] text-[#0f172a] md:text-[3rem]">
            Contacto
          </h2>

          <div className="mt-4 h-[3px] w-[54px] rounded-full bg-[#8b5cf6]" />

          <p className="mt-5 max-w-[480px] text-[14px] leading-[1.6] text-[#64748b] md:text-[15px]">
            ¿Tienes un proyecto en mente? Me encantaría saber de ti
          </p>
        </div>

        {/* Main content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left side */}
          <div className="space-y-10">
            {/* Text block */}
            <div>
              <h3 className="text-[18px] font-semibold text-[#0f172a]">
                Conecta conmigo
              </h3>

              <p className="mt-4 max-w-[420px] text-[14px] leading-[1.7] text-[#475569]">
                Estoy disponible para oportunidades de colaboración,
                proyectos freelance o simplemente para una conversación
                sobre tecnología.
              </p>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-[14px] font-semibold text-[#0f172a]">
                Sígueme en redes sociales
              </h4>

              <div className="mt-4 space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-[44px] items-center rounded-[10px] border border-[#e5e7eb] bg-white px-4 text-[14px] font-medium text-[#334155] transition-all duration-200 hover:bg-[#f8fafc]"
                  >
                    {social.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side (form) */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}