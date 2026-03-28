"use client";

import {useState} from "react";
import {Languages, Moon, Menu, X} from "lucide-react";
import {useLocale, useTranslations} from "next-intl";
import {useRouter, usePathname} from "../../i18n/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    {label: t("home"), href: "#inicio"},
    {label: t("about"), href: "#sobre-mi"},
    {label: t("experience"), href: "#experiencia"},
    {label: t("projects"), href: "#proyectos"},
    {label: t("testimonials"), href: "#testimonios"},
    {label: t("contact"), href: "#contacto"}
  ];

  const changeLanguage = () => {
    const nextLocale = locale === "es" ? "en" : "es";
    router.replace(pathname, {locale: nextLocale});
  };

  return (
    <header className="relative w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-semibold tracking-wider text-blue-600 transition hover:opacity-80"
        >
          {"<AR>"}
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-700 transition hover:text-black"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6">
            <button
              type="button"
              onClick={changeLanguage}
              className="flex items-center gap-1 text-sm font-medium text-gray-600 transition hover:text-gray-900"
              aria-label="Cambiar idioma"
            >
              <Languages className="translate-y-[1px]" size={17} strokeWidth={1.9} />
              <span>{t("language")}</span>
            </button>

            <button
              type="button"
              className="text-gray-600 transition hover:text-gray-900"
              aria-label="Cambiar tema"
            >
              <Moon size={17} strokeWidth={1.9} />
            </button>
          </div>

          <button
            type="button"
            className="text-gray-700 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={`absolute left-0 top-full z-50 w-full border-b border-gray-200 bg-white shadow-md transition-all duration-300 ease-out md:hidden ${
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8">
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-gray-700 transition hover:text-black"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center justify-center gap-6 border-t border-gray-200 pt-6">
            <button
              type="button"
              onClick={changeLanguage}
              className="flex items-center gap-1 text-sm font-medium text-gray-600 transition hover:text-gray-900"
              aria-label="Cambiar idioma"
            >
              <Languages className="translate-y-[1px]" size={17} strokeWidth={1.9} />
              <span>{t("language")}</span>
            </button>

            <button
              type="button"
              className="text-gray-600 transition hover:text-gray-900"
              aria-label="Cambiar tema"
            >
              <Moon size={17} strokeWidth={1.9} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}