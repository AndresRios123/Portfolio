"use client";

import { useEffect, useState } from "react";
import { Languages, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "../../i18n/navigation";
import Link from "next/link";

function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-gray-600 transition-colors duration-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      aria-label="Cambiar tema"
    >
      {mounted && theme === "dark" ? (
        <Sun size={17} strokeWidth={1.9} />
      ) : (
        <Moon size={17} strokeWidth={1.9} />
      )}
    </button>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { label: t("home"), href: "#inicio" },
    { label: t("about"), href: "#sobre-mi" },
    { label: t("servicios"), href: "#servicios" },
    { label: t("projects"), href: "#proyectos" },
    { label: t("experience"), href: "#experiencia" },
    { label: t("testimonials"), href: "#testimonios" },
    { label: t("contact"), href: "#contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setIsScrolled(scrollTop > 20);
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = () => {
    const nextLocale = locale === "es" ? "en" : "es";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-gray-200/80 bg-white/80 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-md dark:border-white/10 dark:bg-[#0b1120]/80 dark:shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
          : "border-b border-transparent bg-white/40 backdrop-blur-sm dark:bg-[#0b1120]/45 dark:backdrop-blur-md"
      }`}
    >
      <div className="absolute bottom-0 left-0 h-[2px] w-full">
        <div className="absolute inset-0 bg-slate-200/60 dark:bg-white/[0.06]" />
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-500 via-violet-400 to-blue-400"
          style={{ width: `${scrollProgress}%`, transition: "none" }}
        />
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-semibold tracking-wider text-blue-600 transition-opacity hover:opacity-80 dark:text-blue-400"
        >
          {"<AR>"}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-gray-700 transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:text-purple-600 hover:after:w-full dark:text-gray-300 dark:hover:text-purple-400 dark:after:bg-purple-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-6 md:flex">
            <button
              type="button"
              onClick={changeLanguage}
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
              aria-label="Cambiar idioma"
            >
              <Languages className="translate-y-[1px]" size={17} strokeWidth={1.9} />
              <span>{t("language")}</span>
            </button>

            <ThemeButton />
          </div>

          <button
            type="button"
            className="text-gray-700 transition-colors duration-300 dark:text-gray-300 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={`absolute left-0 top-full z-50 w-full border-b border-gray-200/80 bg-white/90 shadow-md backdrop-blur-md transition-all duration-300 ease-out dark:border-white/10 dark:bg-[#0b1120]/90 dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] dark:backdrop-blur-xl md:hidden ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="px-6 py-8">
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-gray-700 transition-colors duration-300 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center justify-center gap-6 border-t border-gray-200 pt-6 dark:border-white/10">
            <button
              type="button"
              onClick={changeLanguage}
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-purple-600 dark:text-gray-400 dark:hover:text-white"
              aria-label="Cambiar idioma"
            >
              <Languages className="translate-y-[1px]" size={17} strokeWidth={1.9} />
              <span>{t("language")}</span>
            </button>

            <ThemeButton />
          </div>
        </div>
      </div>
    </header>
  );
}