"use client";

import { useTranslations } from "next-intl";
import { FiSend } from "react-icons/fi";

export default function ContactForm() {
  const t = useTranslations("contact.form");

  return (
    <form className="rounded-[16px] border border-[#e5e7eb] bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)] md:p-7">
      <div className="space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-[14px] font-semibold text-[#0f172a]"
          >
            {t("nameLabel")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder={t("namePlaceholder")}
            className="h-[46px] w-full rounded-[8px] border border-[#cbd5e1] bg-white px-4 text-[14px] text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition-colors duration-200 focus:border-[#8b5cf6]"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-[14px] font-semibold text-[#0f172a]"
          >
            {t("emailLabel")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder={t("emailPlaceholder")}
            className="h-[46px] w-full rounded-[8px] border border-[#cbd5e1] bg-white px-4 text-[14px] text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition-colors duration-200 focus:border-[#8b5cf6]"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-[14px] font-semibold text-[#0f172a]"
          >
            {t("messageLabel")}
          </label>
          <textarea
            id="message"
            name="message"
            placeholder={t("messagePlaceholder")}
            className="min-h-[128px] w-full resize-none rounded-[8px] border border-[#cbd5e1] bg-white px-4 py-3 text-[14px] text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition-colors duration-200 focus:border-[#8b5cf6]"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="inline-flex h-[46px] w-full items-center justify-center gap-2 rounded-[8px] bg-[#4f46e5] text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#4338ca]"
        >
          <FiSend className="text-[15px]" />
          {t("submit")}
        </button>
      </div>
    </form>
  );
}