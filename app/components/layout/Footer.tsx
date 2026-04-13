"use client";

import { useTranslations } from "next-intl";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiHeart,
} from "react-icons/fi";
// import { FiInstagram, FiFacebook } from "react-icons/fi";
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
      href: "https://github.com/AndresRios123",
      label: "GitHub",
      hoverBorder: "hover:border-slate-400 hover:text-white",
    },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/andres-camilo-rios/",
      label: "LinkedIn",
      hoverBorder: "hover:border-blue-400 hover:text-blue-300",
    },
    // {
    //   icon: FiInstagram,
    //   href: "#",
    //   label: "Instagram",
    //   hoverBorder: "hover:border-pink-400 hover:text-pink-300",
    // },
    // {
    //   icon: FiFacebook,
    //   href: "#",
    //   label: "Facebook",
    //   hoverBorder: "hover:border-blue-500 hover:text-blue-300",
    // },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#060d1f] px-6 py-20 text-white transition-colors duration-300 md:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.3fr_1fr_1.1fr_1.1fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2">
              <span className="text-[22px] font-extrabold tracking-[-0.04em] text-purple-400">
                {"<AR"}
              </span>
              <span className="text-[22px] font-extrabold tracking-[-0.04em] text-white/30">
                {"/>"}
              </span>
            </div>

            <p className="mb-6 max-w-[270px] text-[14px] leading-[1.75] text-slate-400">
              {t("description")}
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[13px] text-slate-400">
              <FiMapPin className="shrink-0 text-[13px] text-purple-400" />
              <span>{t("location")}</span>
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-2">
              <HiOutlineCodeBracket className="text-[15px] text-purple-400" />
              <h3 className="text-[13px] font-bold uppercase tracking-[0.18em] text-slate-400">
                {t("navigationTitle")}
              </h3>
            </div>

            <nav>
              <ul className="space-y-3.5">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-[14px] text-slate-400 transition-colors duration-300 hover:text-white"
                    >
                      <span className="h-px w-0 bg-purple-400 transition-all duration-300 group-hover:w-4" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-2">
              <RiStackLine className="text-[15px] text-purple-400" />
              <h3 className="text-[13px] font-bold uppercase tracking-[0.18em] text-slate-400">
                {t("servicesTitle")}
              </h3>
            </div>

            <ul className="space-y-3.5">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-2 text-[14px] text-slate-400"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-purple-500/60" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-2">
              <FiMail className="text-[15px] text-purple-400" />
              <h3 className="text-[13px] font-bold uppercase tracking-[0.18em] text-slate-400">
                {t("contactTitle")}
              </h3>
            </div>

            <div className="space-y-3">
              <a
                href={`mailto:${t("email")}`}
                className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-3 text-[13px] text-slate-400 transition-all duration-300 hover:border-purple-500/30 hover:text-white"
              >
                <FiMail className="shrink-0 text-[14px] text-purple-400" />
                <span className="truncate">{t("email")}</span>
              </a>

              <a
                href={`tel:${t("phoneHref")}`}
                className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-3 text-[13px] text-slate-400 transition-all duration-300 hover:border-purple-500/30 hover:text-white"
              >
                <FiPhone className="shrink-0 text-[14px] text-purple-400" />
                <span>{t("phone")}</span>
              </a>
            </div>

            <div className="mt-7">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                {t("followMe")}
              </p>

              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className={`
                        flex h-10 w-10 items-center justify-center rounded-xl
                        border border-white/[0.07] bg-white/[0.04]
                        text-slate-400 transition-all duration-300
                        ${social.hoverBorder}
                      `}
                    >
                      <Icon className="text-[15px]" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mt-8 flex flex-col gap-4 text-[13px] text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026{" "}
            <span className="font-semibold text-purple-400">{t("name")}</span>.{" "}
            {t("rights")}
          </p>

          <p className="flex items-center gap-2">
            <span>{t("builtWith")}</span>
            <FiHeart className="text-pink-500" />
            <span>{t("passion")}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}