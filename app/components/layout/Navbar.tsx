import Link from "next/link";

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

        <div className="flex items-center gap-3">
          <button 
            type="button"
            className="rounded-full border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >ES</button>
           <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-sm text-gray-700 transition hover:bg-gray-100"
            >
            🌙</button>
        </div>
      </nav>
    </header>
  );
}