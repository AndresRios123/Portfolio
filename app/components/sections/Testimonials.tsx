"use client";

import { useTranslations } from "next-intl";
import { RiDoubleQuotesR } from "react-icons/ri";

export default function Testimonials() {
  const t = useTranslations("testimonials");

  const items = t.raw("items");

  return (
    <section id="testimonios">
      <div>
        {/* Header */}
        <div>
          <h2>{t("title")}</h2>
          <div />
          <p>{t("subtitle")}</p>
        </div>

        {/* Grid */}
        <div>
          {items.map((item: any, index: number) => (
            <article key={index}>
              {/* Top */}
              <div>
                <div>
                  {/* Avatar */}
                  <div>{item.initials}</div>

                  {/* Info */}
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.role}</p>
                  </div>
                </div>

                {/* Icon */}
                <div>
                  <RiDoubleQuotesR />
                </div>
              </div>

              {/* Text */}
              <p>"{item.text}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}