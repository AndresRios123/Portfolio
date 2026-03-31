export default function About() {
  return (
    <section id="sobre-mi" className="bg-[#f5f7fb] px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="mb-14 flex flex-col items-center text-center">
            <span className="mb-5 inline-flex rounded-full bg-purple-200 px-5 py-2 text-xs font-bold uppercase tracking-wide text-purple-600">
                + SOBRE MÍ
            </span>
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Acerca de <span className="text-purple-600">mí</span>
          </h2>
        </header>

        <div>
          <div>
            <div>
              <div>
                <span>Imagen de perfil</span>
              </div>
            </div>
          </div>

          <div>
            <div>
              <p>
                Soy ingeniero de software en formación, enfocado en desarrollar
                soluciones digitales eficientes y bien estructuradas.
                Actualmente dedico gran parte de mi tiempo a fortalecer mis
                habilidades mediante proyectos y aprendizaje constante.
              </p>

              <p>
                En lo personal, disfruto explorar nuevas tecnologías, trabajar
                en ideas propias y sumergirme en videojuegos y música que
                transmiten experiencias únicas. Me caracterizo por ser curioso,
                autodidacta y siempre estar en busca de nuevos retos que me
                permitan crecer tanto profesional como personalmente.
              </p>
            </div>

            <div>
              {/* Aquí va SkillsPanel */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}