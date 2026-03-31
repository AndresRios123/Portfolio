import { GraduationCap, CalendarDays, MapPin } from "lucide-react";
import { academicExperience } from "@/app/data/academicData";

export default function AcademicExperience() {
  return (
    <section id="academic-experience">
      <div>
        {/* Header */}
        <div>
          <div>
            <GraduationCap />
          </div>

          <h2>Experiencia Académica</h2>
          <p>Mi trayectoria educativa y desarrollo profesional</p>
        </div>

        {/* Timeline */}
        <div>
          {academicExperience.map((item, index) => (
            <article key={item.id}>
              {/* Línea vertical */}
              <div />

              {/* Card */}
              <div>
                {/* Top */}
                <div>
                  {/* Icono izquierdo */}
                  <div>
                    <GraduationCap />
                  </div>

                  {/* Contenido principal */}
                  <div>
                    <div>
                      <div>
                        <h3>{item.title}</h3>
                        <h4>{item.institution}</h4>
                      </div>

                      <div>
                        <div>
                          <CalendarDays />
                          <span>{item.period}</span>
                        </div>

                        <div>
                          <MapPin />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Descripción */}
                    <p>{item.description}</p>

                    {/* Highlights */}
                    <div>
                      <h5>Aspectos destacados:</h5>
                      <ul>
                        {item.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}