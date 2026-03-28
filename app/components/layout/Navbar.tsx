import Link from "next/link";
import { Languages, Moon } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <Link href="/" className="text-blue-600 font-semibold text-xl tracking-wider transition hover:opacity-80">
            {"<AR>"}
          </Link>
        </div>

        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href}
                className="text-sm font-medium text-gray-700 transition hover:text-black"
                >{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
            <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-gray-600 transition hover:text-gray-900"
                aria-label="Cambiar idioma"
            >
                <Languages size={18} strokeWidth={1.8}/>
                <span>ES</span>
            </button>
           <button
                type="button"
                className="text-gray-600 transition hover:text-gray-900"
                aria-label="Cambiar tema"
            >
                <Moon size={18} strokeWidth={1.8} />
            </button>
        </div>
      </nav>
    </header>
  );
}