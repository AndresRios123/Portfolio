"use client";

import { useTranslations } from "next-intl";
import { RiDoubleQuotesR } from "react-icons/ri";

type TestimonialItem = {
  name: string;
  role: string;
  initials: string;
  text: string;
};

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const items = t.raw("items") as TestimonialItem[];

  return (
    <section
      id="testimonios"
      className="bg-[#f8fafc] px-6 py-24 transition-colors duration-300 md:px-10 lg:px-16 dark:bg-[#070b14]"
    >
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <h2 className="text-[2rem] font-bold leading-none tracking-[-0.03em] text-[#0f172a] md:text-[3rem] dark:text-white">
            {t("title")}
          </h2>

          <div className="mt-4 h-[3px] w-[54px] rounded-full bg-[#8b5cf6] dark:bg-[#a78bfa]" />

          <p className="mt-5 max-w-[430px] text-[14px] leading-[1.6] text-[#64748b] md:text-[15px] dark:text-[#94a3b8]">
            {t("subtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={index}
              className="rounded-[16px] border border-[#e5e7eb] bg-white px-6 py-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-[#0b1120]/80 dark:shadow-[0_10px_30px_rgba(0,0,0,0.32)] dark:hover:shadow-[0_18px_45px_rgba(0,0,0,0.4)]"
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8b5cf6] text-[13px] font-semibold text-white dark:bg-[#7c3aed]">
                    {item.initials}
                  </div>

                  {/* Info */}
                  <div>
                    <h3 className="text-[15px] font-semibold leading-tight text-[#0f172a] dark:text-white">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-[13px] leading-none text-[#64748b] dark:text-[#94a3b8]">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Quote icon */}
                <div className="pt-1 text-[#c4b5fd] dark:text-[#8b5cf6]">
                  <RiDoubleQuotesR className="text-[26px]" />
                </div>
              </div>

              {/* Text */}
              <p className="mt-8 text-[15px] leading-[1.75] text-[#475569] dark:text-[#cbd5e1]">
                "{item.text}"
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}