"use client";

import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";

export default function Contact() {
  const t = useTranslations("contact");

  const socialLinks = t.raw("socialLinks");
  const icons = [FiGithub, FiLinkedin, FiInstagram, FiFacebook];

  return (
    <section
      id="contacto"
      className="bg-[#f8fafc] px-6 py-24 transition-colors duration-300 md:px-10 lg:px-16 dark:bg-[#070b14]"
    >
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <h2 className="text-[2rem] font-bold tracking-[-0.03em] text-[#0f172a] md:text-[3rem] dark:text-white">
            {t("title")}
          </h2>

          <div className="mt-4 h-[3px] w-[54px] rounded-full bg-[#8b5cf6] dark:bg-[#a78bfa]" />

          <p className="mt-5 max-w-[470px] text-[14px] text-[#64748b] md:text-[15px] dark:text-[#94a3b8]">
            {t("subtitle")}
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left */}
          <div>
            <div>
              <h3 className="text-[28px] font-semibold text-[#0f172a] dark:text-white">
                {t("left.title")}
              </h3>

              <p className="mt-5 text-[15px] text-[#475569] dark:text-[#94a3b8]">
                {t("left.description")}
              </p>
            </div>

            <div className="mt-10">
              <h4 className="text-[15px] font-semibold text-[#0f172a] dark:text-white">
                {t("left.socialTitle")}
              </h4>

              <div className="mt-4 space-y-3">
                {socialLinks.map((social: any, index: number) => {
                  const Icon = icons[index];

                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex h-[46px] items-center gap-3 rounded-[8px]
                        border border-[#e5e7eb] bg-white px-4 text-[14px] text-[#334155]
                        transition-colors duration-200 hover:bg-[#f8fafc]
                        dark:border-white/10 dark:bg-[#0b1120]/80 dark:text-[#cbd5e1]
                        dark:hover:bg-white/5
                      "
                    >
                      <Icon className="text-[16px]" />
                      <span>{social.platform}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}