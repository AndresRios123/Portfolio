"use client";

import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { UserRound } from "lucide-react";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="inicio" className="bg-[#f5f7fb]">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-6 py-14 md:grid-cols-2 md:px-10 lg:px-16">
        <div className="flex max-w-2xl flex-col items-start">
          <p className="mb-5 text-lg font-medium text-[#23395d] md:text-[20px]">
            {t("greeting")}
          </p>

          <h1 className="mb-4 text-5xl font-bold leading-[0.95] tracking-[-0.03em] text-[#2563eb] md:text-7xl lg:text-[5.5rem]">
            {t("name")}
          </h1>

          <h2 className="mb-8 text-3xl font-semibold leading-tight text-[#0f172a] md:text-5xl">
            {t("role")}
          </h2>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-[#415a77] md:text-[21px]">
            {t("description")}
          </p>

          <a
            href="/cv.pdf"
            download
            className="mb-10 inline-flex items-center justify-center rounded-2xl bg-[#2563eb] px-8 py-4 text-lg font-semibold text-white shadow-[0_12px_24px_rgba(37,99,235,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#1d4ed8]"
          >
            {t("button")}
          </a>

          <nav
            aria-label="Redes sociales"
            className="flex items-center gap-8 text-[#334155]"
          >
            <a
              href="#"
              aria-label="GitHub"
              className="text-[22px] transition duration-300 hover:scale-110 hover:text-[#2563eb]"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="text-[22px] transition duration-300 hover:scale-110 hover:text-[#2563eb]"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="text-[22px] transition duration-300 hover:scale-110 hover:text-[#2563eb]"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="text-[22px] transition duration-300 hover:scale-110 hover:text-[#2563eb]"
            >
              <FaFacebookF />
            </a>
          </nav>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative flex h-[320px] w-[320px] items-center justify-center rounded-full border border-[#bfd8ff] bg-[#dbeafe]/25 shadow-[0_0_80px_rgba(147,197,253,0.28)] sm:h-[380px] sm:w-[380px] lg:h-[470px] lg:w-[470px]">
            <div className="flex h-[270px] w-[270px] items-center justify-center rounded-full border-[5px] border-white bg-[#dfe7f2]/85 sm:h-[320px] sm:w-[320px] lg:h-[395px] lg:w-[395px]">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#cfe1ff] sm:h-28 sm:w-28">
                <UserRound
                  size={38}
                  strokeWidth={1.8}
                  className="text-[#7aaef7] sm:h-11 sm:w-11"
                />
              </div>
            </div>

            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.15)_0%,_rgba(219,234,254,0)_65%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}