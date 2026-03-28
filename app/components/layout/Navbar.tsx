const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function NavBar(){
    return(
        <header>
            <nav>

                <div>
                    <a href="/">{"<AR>"}</a>
                </div>

                <ul>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                <div>
                    <button type="button">🌐 ES</button>
                    <button type="button">◐</button>
                </div>
            </nav>
        </header>
    )
}