import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="inicio" className="bg-[#f8f9fb]">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10 lg:px-16">
        <div className="flex max-w-xl flex-col items-start">
          <p className="mb-4 text-[18px] font-medium text-[#23395d]">
            Hola, mi nombre es
          </p>

          <h1 className="mb-4 text-5xl font-bold leading-tight text-[#2563eb] md:text-7xl">
            Andres Rios
          </h1>

          <h2 className="mb-6 text-3xl font-semibold text-[#0f172a] md:text-5xl">
            Ingeniero de software
          </h2>

          <p className="mb-10 max-w-lg text-lg leading-relaxed text-[#415a77] md:text-[20px]">
            enfocado en desarrollar soluciones tecnológicas eficientes,
            escalables y bien diseñadas.
          </p>

          <div className="mb-10">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center rounded-2xl bg-[#2563eb] px-8 py-4 text-lg font-semibold text-white shadow-[0_8px_18px_rgba(37,99,235,0.25)] transition hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
            >
              Descargar CV
            </a>
          </div>

          <nav
            aria-label="Redes sociales"
            className="flex items-center gap-8 text-[#334155]"
          >
            <a
              href="#"
              className="transition hover:scale-110 hover:text-[#2563eb]"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="#"
              className="transition hover:scale-110 hover:text-[#2563eb]"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={22} />
            </a>

            <a
              href="#"
              className="transition hover:scale-110 hover:text-[#2563eb]"
              aria-label="Instagram"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href="#"
              className="transition hover:scale-110 hover:text-[#2563eb]"
              aria-label="Facebook"
            >
              <FaFacebookF size={22} />
            </a>
          </nav>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex h-[380px] w-[380px] items-center justify-center rounded-full border border-[#bfdbfe] bg-[#dbeafe]/30 shadow-[0_0_80px_rgba(147,197,253,0.35)] md:h-[460px] md:w-[460px]">
            <div className="flex h-[320px] w-[320px] items-center justify-center rounded-full border-[6px] border-white bg-[#e2e8f0]/80 md:h-[390px] md:w-[390px]">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#dbeafe]">
                <div className="h-10 w-10 rounded-full border-2 border-[#93c5fd]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}