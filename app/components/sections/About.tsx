export default function About() {
  return (
    <section id="sobre-mi" className="bg-[#f5f7fb] px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="mb-14 flex flex-col items-center text-center">
          <span className="mb-5 inline-flex rounded-full bg-purple-100 px-5 py-2 text-xs font-bold uppercase tracking-wide text-purple-600">
            + SOBRE MÍ
          </span>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Acerca de <span className="text-purple-600">mí</span>
          </h2>
        </header>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.06)] md:p-10 lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-14">
            <div className="flex justify-center lg:justify-start">
              <div className="flex h-[250px] w-[250px] items-center justify-center rounded-[1.75rem] border-4 border-white bg-[#ddd8f3] shadow-[0_10px_25px_rgba(15,23,42,0.10)] md:h-[300px] md:w-[300px]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#d8c8f5]">
                  <span className="text-sm font-medium text-purple-600">
                    Imagen de perfil
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="space-y-6 text-[18px] leading-9 text-slate-700">
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
                {/* Aquí luego va SkillsPanel */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}