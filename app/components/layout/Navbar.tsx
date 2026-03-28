"use client";

import { useState } from "react";
import Link from "next/link";
import { Languages, Moon, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>

            {/* Logo */}  
            <Link href="/" className="text-blue-600 font-semibold text-xl tracking-wider transition hover:opacity-80">
                {"<AR>"}
            </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href}
                className="text-sm font-medium text-gray-700 transition hover:text-black"
                >{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
            {/* Desktop Icons */}
            <div className="hidden md:flex items-center gap-5">
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

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-gray-700"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
        </div>
      </nav>
    </header>
  );
}