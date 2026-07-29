"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useState, type FormEvent } from "react";

type Locale = "es" | "en";

const COPY = {
  es: {
    eyebrow: "Contáctanos",
    heading: "Sumerjámonos en lo que sigue para tu organización.",
    intro:
      "Contanos en qué estás trabajando y en qué punto del proceso te encontrás. Te responderemos en menos de 24 horas.",
    email: "contacto@abisalgroup.com",
    fields: {
      name: "Nombre",
      email: "Correo electrónico",
      company: "Empresa",
      message: "Mensaje",
    },
    submit: "Enviar mensaje",
    submitting: "Enviando...",
    submitted: "¡Gracias! Recibimos tu mensaje y te contactaremos pronto.",
    error: "Algo salió mal. Por favor, intentá de nuevo o escribinos directamente.",
  },
  en: {
    eyebrow: "Contact Us",
    heading: "Let's dive into what's next for your organization.",
    intro:
      "Tell us what you're working on and where you are in the process. We'll get back to you within 24 hours.",
    email: "contacto@abisalgroup.com",
    fields: {
      name: "Name",
      email: "Email address",
      company: "Company",
      message: "Message",
    },
    submit: "Send message",
    submitting: "Sending...",
    submitted: "Thanks! We've received your message and will be in touch soon.",
    error: "Something went wrong. Please try again or email us directly.",
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    heading: string;
    intro: string;
    email: string;
    fields: { name: string; email: string; company: string; message: string };
    submit: string;
    submitting: string;
    submitted: string;
    error: string;
  }
>;

export default function ContactSection({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const t = COPY[locale];
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted" | "error">(
    "idle"
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/contact-handler.php", {
        method: "POST",
        body: new FormData(e.currentTarget),
      });
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      if (!data.ok) throw new Error(data.error ?? "Request failed");
      setStatus("submitted");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-bone section-pad"
      style={{
        backgroundImage:
          "radial-gradient(rgba(0,14,25,0.08) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >
      <div className="container-content relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="mb-8 inline-block -rotate-2 bg-acid px-4 py-1.5 text-xl font-semibold uppercase tracking-[0.15em] text-abyss shadow-[6px_6px_0_0_rgba(0,14,25,0.12)] md:text-2xl">
              {t.eyebrow}
            </p>
            <h1 className="text-3xl font-thin leading-[1.15] tracking-tight text-abyss sm:text-4xl">
              {t.heading}
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-slate/80">
              {t.intro}
            </p>
            <a
              href={`mailto:${t.email}`}
              className="mt-8 inline-flex items-center gap-2 text-base font-medium text-abyss hover:text-acid transition-colors duration-300"
            >
              <Mail className="h-5 w-5" />
              {t.email}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl bg-abyss p-8 md:p-10">
              {status === "submitted" ? (
                <p className="text-lg leading-relaxed text-bone">
                  {t.submitted}
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="relative space-y-6">
                  <input type="hidden" name="type" value="contact" />
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  />
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm text-coolgray">
                        {t.fields.name}
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full rounded-lg border border-bone/20 bg-transparent px-4 py-3 text-sm text-bone placeholder:text-mutedgray focus:border-acid focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-coolgray">
                        {t.fields.email}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full rounded-lg border border-bone/20 bg-transparent px-4 py-3 text-sm text-bone placeholder:text-mutedgray focus:border-acid focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-coolgray">
                      {t.fields.company}
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="w-full rounded-lg border border-bone/20 bg-transparent px-4 py-3 text-sm text-bone placeholder:text-mutedgray focus:border-acid focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-coolgray">
                      {t.fields.message}
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full resize-none rounded-lg border border-bone/20 bg-transparent px-4 py-3 text-sm text-bone placeholder:text-mutedgray focus:border-acid focus:outline-none"
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-sm text-red-400">{t.error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group inline-flex items-center gap-2 rounded-full bg-acid px-9 py-4 text-sm font-medium text-abyss transition-all duration-300 hover:bg-acid-bright disabled:opacity-60"
                  >
                    {status === "submitting" ? t.submitting : t.submit}
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
