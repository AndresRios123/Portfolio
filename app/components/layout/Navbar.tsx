export default function NavBar(){
    return(
        <header>
            <nav>
                <div>
                    <a href="/">{"<AR>"}</a>
                </div>
            </nav>

            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#sobre-mi">Sobre mí</a></li>
                <li><a href="#experiencia">Experiencia</a></li>
                <li><a href="#proyectos">Proyectos</a></li>
                <li><a href="#testimonios">Testimonios</a></li>
                <li><a href="#contacto">Contactos</a></li>
            </ul>

            <div>
                <button type="button">🌐 ES</button>
                <button type="button">◐</button>
            </div>
        </header>
    )
}