"use client";

import { useTranslations } from "next-intl";
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
  const t = useTranslations("footer");

  const navigationLinks = t.raw("navigationLinks") as {
    label: string;
    href: string;
  }[];

  const services = t.raw("services") as string[];

  const socialLinks = [
    {
      icon: FiGithub,
      href: "#",
      label: "GitHub",
      hoverClass: "hover:bg-[#24292e]",
    },
    {
      icon: FiLinkedin,
      href: "#",
      label: "LinkedIn",
      hoverClass: "hover:bg-[#0A66C2]",
    },
    {
      icon: FiInstagram,
      href: "#",
      label: "Instagram",
      hoverClass: "hover:bg-[#E1306C]",
    },
    {
      icon: FiFacebook,
      href: "#",
      label: "Facebook",
      hoverClass: "hover:bg-[#1877F2]",
    },
  ];

  return (
    <footer className="bg-[#071633] px-6 py-16 text-white transition-colors duration-300 md:px-10 lg:px-16 dark:bg-[#020617]">
      <div className="mx-auto max-w-[1180px]">

        {/* Top */}
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.15fr_1fr_1.15fr_1.05fr]">
          
          {/* Branding */}
          <div>
            <div className="text-[22px] font-extrabold tracking-[-0.04em] text-[#4ea1ff]">
              {"<AR>"}
            </div>

            <p className="mt-8 max-w-[290px] text-[15px] leading-[1.65] text-[#b4c1da] dark:text-[#94a3b8]">
              {t("description")}
            </p>

            <div className="mt-8 flex items-center gap-2.5 text-[15px] text-[#c3d0e6] dark:text-[#94a3b8]">
              <FiMapPin className="text-[15px] text-[#4ea1ff]" />
              <span>{t("location")}</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="flex items-center gap-2.5">
              <HiOutlineCodeBracket className="text-[17px] text-[#4ea1ff]" />
              <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-white">
                {t("navigationTitle")}
              </h3>
            </div>

            <nav className="mt-7">
              <ul className="space-y-4">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[15px] text-[#c3d0e6] transition-colors duration-200 hover:text-white dark:text-[#94a3b8] dark:hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <div className="flex items-center gap-2.5">
              <RiStackLine className="text-[17px] text-[#4ea1ff]" />
              <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-white">
                {t("servicesTitle")}
              </h3>
            </div>

            <ul className="mt-7 space-y-4">
              {services.map((service) => (
                <li key={service} className="text-[15px] text-[#c3d0e6] dark:text-[#94a3b8]">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-2.5">
              <FiMail className="text-[17px] text-[#4ea1ff]" />
              <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-white">
                {t("contactTitle")}
              </h3>
            </div>

            <div className="mt-7 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-white/5">
                  <FiMail className="text-[17px] text-[#c3d0e6]" />
                </div>

                <a
                  href={`mailto:${t("email")}`}
                  className="text-[15px] text-[#c3d0e6] transition-colors duration-200 hover:text-white"
                >
                  {t("email")}
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-white/5">
                  <FiPhone className="text-[17px] text-[#c3d0e6]" />
                </div>

                <a
                  href={`tel:${t("phoneHref")}`}
                  className="text-[15px] text-[#c3d0e6] transition-colors duration-200 hover:text-white"
                >
                  {t("phone")}
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="mt-9">
              <p className="text-[15px] text-[#c3d0e6] dark:text-[#94a3b8]">
                {t("followMe")}
              </p>

              <div className="mt-4 flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`
                        flex h-10 w-10 items-center justify-center
                        rounded-[11px]
                        bg-white/5 text-[#f8fafc]
                        transition-all duration-300
                        ${social.hoverClass}
                        hover:text-white
                      `}
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

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-5 text-[15px] text-[#b4c1da] md:flex-row md:items-center md:justify-between dark:text-[#94a3b8]">
          <p>
            © 2026{" "}
            <span className="font-semibold text-[#4ea1ff]">
              {t("name")}
            </span>
            . {t("rights")}
          </p>

          <p className="flex items-center gap-2">
            <span>{t("builtWith")}</span>
            <FiHeart className="text-[#ff6b81]" />
            <span>{t("passion")}</span>
          </p>
        </div>

      </div>
    </footer>
  );
}