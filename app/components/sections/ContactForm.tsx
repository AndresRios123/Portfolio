// ContactForm.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { useState } from "react";

export default function ContactForm() {
  const t = useTranslations("contact.form");

  const [status, setStatus]   = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name:    formData.get("name")    as string,
      email:   formData.get("email")   as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(data),
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

  const inputClass = `
    h-[46px] w-full rounded-xl border border-slate-200 bg-slate-50
    px-4 text-[14px] text-slate-900 placeholder:text-slate-400
    outline-none transition-all duration-300
    focus:border-purple-400 focus:bg-white focus:ring-2 focus:ring-purple-400/20
    dark:border-white/10 dark:bg-white/[0.03] dark:text-white
    dark:placeholder:text-slate-500
    dark:focus:border-purple-500 dark:focus:bg-white/[0.06] dark:focus:ring-purple-500/20
  `;

  const labelClass = "mb-2 block text-[13px] font-semibold text-slate-700 dark:text-slate-300";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-white/10 dark:bg-[#0b1120]/80">
      {/* Top accent bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-purple-500 via-purple-400 to-transparent dark:from-purple-500 dark:via-purple-400 dark:to-transparent" />

      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_0%,rgba(139,92,246,0.06),transparent)]" />

      <form onSubmit={handleSubmit} className="relative space-y-5 p-7 md:p-8">

        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            {t("nameLabel")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder={t("namePlaceholder")}
            required
            className={inputClass}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            {t("emailLabel")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder={t("emailPlaceholder")}
            required
            className={inputClass}
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelClass}>
            {t("messageLabel")}
          </label>
          <textarea
            id="message"
            name="message"
            placeholder={t("messagePlaceholder")}
            required
            className={`${inputClass} h-auto min-h-[132px] resize-none py-3`}
          />
        </div>

        {/* Feedback */}
        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-[13.5px] font-medium text-green-700 dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-400"
          >
            <span className="text-[15px]">✓</span>
            Mensaje enviado correctamente
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13.5px] font-medium text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400"
          >
            <span className="text-[15px]">✕</span>
            {errorMsg}
          </motion.p>
        )}

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={status === "loading"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex h-[46px] w-full items-center justify-center gap-2 rounded-xl bg-purple-600 text-[14px] font-semibold text-white shadow-sm transition-all duration-300 hover:bg-purple-700 hover:shadow-[0_4px_20px_rgba(139,92,246,0.35)] disabled:cursor-not-allowed disabled:opacity-60 dark:bg-purple-600 dark:hover:bg-purple-500"
        >
          <FiSend className="text-[14px]" />
          {status === "loading" ? "Enviando..." : t("submit")}
        </motion.button>
      </form>
    </div>
  );
}