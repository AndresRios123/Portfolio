import ServiceCard from "./ServicesCard";

ServiceCard

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block text-sm px-4 py-1 rounded-full bg-blue-100 text-blue-600 mb-4">
          + MIS SERVICIOS
        </span>

        <h2 className="text-4xl font-bold mb-4">
          ¿En qué puedo <span className="text-blue-600">ayudarte?</span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-500">
          Ofrezco servicios de desarrollo web profesional, desde el diseño hasta la implementación completa de soluciones digitales.
        </p>
      </div>

      {/* Grid de servicios */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Aquí van las cards */}
        <ServiceCard
          title="Desarrollo Frontend"
          description="Creación de interfaces web modernas y responsivas utilizando React, HTML5, CSS3 y JavaScript."
        />

        <ServiceCard
          title="Desarrollo Backend"
          description="Desarrollo de APIs RESTful y bases de datos escalables con Node.js, Python y gestión eficiente."
        />

        <ServiceCard
          title="Aplicaciones Full Stack"
          description="Desarrollo completo de aplicaciones web, desde la interfaz hasta el servidor."
        />

        <ServiceCard
          title="Diseño UI/UX"
          description="Diseño de interfaces intuitivas con enfoque en experiencia de usuario."
        />

        <ServiceCard
          title="Desarrollo Responsive"
          description="Aplicaciones adaptables a cualquier dispositivo garantizando una experiencia óptima."
        />

        <ServiceCard
          title="Consultoría Técnica"
          description="Asesoramiento en arquitectura de software y mejores prácticas."
        />
      </div>

      {/* CTA */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-2xl">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            ¿Tienes un proyecto en mente?
          </h3>
          <p className="text-sm opacity-90">
            Trabajemos juntos para hacerlo realidad
          </p>
        </div>

        <button className="mt-4 md:mt-0 bg-white text-blue-600 px-6 py-2 rounded-lg font-medium">
          Contáctame
        </button>
      </div>
    </section>
  );
}