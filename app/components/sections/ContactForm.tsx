"use client";

import { useTranslations } from "next-intl";
import { FiSend } from "react-icons/fi";
import { useState } from "react";

export default function ContactForm() {
  const t = useTranslations("contact.form");

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Error desconocido");
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setErrorMsg(err.message);
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[16px] border border-[#e5e7eb] bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-colors duration-300 md:p-7 dark:border-white/10 dark:bg-[#0b1120]/80 dark:shadow-[0_10px_30px_rgba(0,0,0,0.32)]"
    >
      <div className="space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-[14px] font-semibold text-[#0f172a] dark:text-white"
          >
            {t("nameLabel")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder={t("namePlaceholder")}
            required
            className="h-[46px] w-full rounded-[8px] border border-[#cbd5e1] bg-white px-4 text-[14px] text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition-colors duration-200 focus:border-[#8b5cf6] dark:border-white/10 dark:bg-[#0f172a] dark:text-white dark:placeholder:text-[#64748b] dark:focus:border-[#a78bfa]"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-[14px] font-semibold text-[#0f172a] dark:text-white"
          >
            {t("emailLabel")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder={t("emailPlaceholder")}
            required
            className="h-[46px] w-full rounded-[8px] border border-[#cbd5e1] bg-white px-4 text-[14px] text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition-colors duration-200 focus:border-[#8b5cf6] dark:border-white/10 dark:bg-[#0f172a] dark:text-white dark:placeholder:text-[#64748b] dark:focus:border-[#a78bfa]"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-[14px] font-semibold text-[#0f172a] dark:text-white"
          >
            {t("messageLabel")}
          </label>
          <textarea
            id="message"
            name="message"
            placeholder={t("messagePlaceholder")}
            required
            className="min-h-[128px] w-full resize-none rounded-[8px] border border-[#cbd5e1] bg-white px-4 py-3 text-[14px] text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition-colors duration-200 focus:border-[#8b5cf6] dark:border-white/10 dark:bg-[#0f172a] dark:text-white dark:placeholder:text-[#64748b] dark:focus:border-[#a78bfa]"
          />
        </div>

        {/* Feedback */}
        {status === "success" && (
          <p className="text-[14px] font-medium text-green-600 dark:text-green-400">
            ✅ Mensaje enviado correctamente
          </p>
        )}
        {status === "error" && (
          <p className="text-[14px] font-medium text-red-500 dark:text-red-400">
            ❌ {errorMsg}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-[46px] w-full items-center justify-center gap-2 rounded-[8px] bg-[#4f46e5] text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#4338ca] disabled:cursor-not-allowed disabled:opacity-60 dark:bg-[#6366f1] dark:hover:bg-[#4f46e5]"
        >
          <FiSend className="text-[15px]" />
          {status === "loading" ? "Enviando..." : t("submit")}
        </button>
      </div>
    </form>
  );
}