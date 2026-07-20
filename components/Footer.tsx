"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type FormEvent } from "react";

type Locale = "es" | "en";

const WHAT_WE_DO_LINKS: Record<Locale, string[]> = {
  es: [
    "Formación práctica en IA",
    "Laboratorios de IA aplicada",
    "Estrategia y adopción de IA",
    "Aplicaciones y agentes personalizados",
  ],
  en: [
    "AI Literacy",
    "Applied AI Sprints",
    "AI Strategy & Adoption",
    "Custom Engines & Agents",
  ],
};

const COMPANY_LINKS: Record<Locale, { label: string; slug: string }[]> = {
  es: [
    { label: "La diferencia Abisal", slug: "/abisal-difference/" },
    { label: "Sobre nosotros", slug: "/#about-us" },
    { label: "Nuestro trabajo", slug: "/our-work/" },
    { label: "Hablemos", slug: "/#get-in-touch" },
  ],
  en: [
    { label: "Abisal Difference", slug: "/abisal-difference/" },
    { label: "About Us", slug: "/#about-us" },
    { label: "Our Work", slug: "/our-work/" },
    { label: "Get in Touch", slug: "/#get-in-touch" },
  ],
};

const COPY = {
  es: {
    whatWeDo: "Qué hacemos",
    company: "Empresa",
    connect: "Conecta",
    stayClose: "Mantente cerca de lo que viene.",
    emailPlaceholder: "Correo electrónico",
    submit: "Mantente conectado",
    submitted: "¡Listo! Ya estás en la lista.",
    rights: "© 2026 ABISAL GROUP. Todos los derechos reservados.",
    privacy: "Política de privacidad",
    terms: "Términos de uso",
    cookies: "Política de cookies",
  },
  en: {
    whatWeDo: "What We Do",
    company: "Company",
    connect: "Connect",
    stayClose: "Stay close to what’s next.",
    emailPlaceholder: "Email address",
    submit: "Stay Connected",
    submitted: "You’re on the list. Welcome aboard.",
    rights: "© 2026 ABISAL GROUP. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    cookies: "Cookie Policy",
  },
} satisfies Record<Locale, Record<string, string>>;

export default function Footer() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/en") ? "en" : "es";
  const prefix = locale === "en" ? "/en" : "";
  const t = COPY[locale];

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <footer className="relative bg-abyss pt-20">
      <div className="container-content">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          <div>
            <Image
              src="/brand/logo-mark-bone.png"
              alt="ABISAL GROUP"
              width={80}
              height={68}
              className="h-16 w-auto md:h-20"
            />
            <p className="mt-2 text-2xl font-bold text-bone md:text-3xl">
              Abisal
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-bone">
              {t.whatWeDo}
            </h3>
            <ul className="mt-5 space-y-3">
              {WHAT_WE_DO_LINKS[locale].map((label) => (
                <li key={label}>
                  <Link
                    href={`${prefix}/what-we-do/`}
                    className="text-sm text-coolgray transition-colors duration-300 hover:text-acid"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-bone">{t.company}</h3>
            <ul className="mt-5 space-y-3">
              {COMPANY_LINKS[locale].map((link) => (
                <li key={link.slug}>
                  <Link
                    href={`${prefix}${link.slug}`}
                    className="text-sm text-coolgray transition-colors duration-300 hover:text-acid"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div id="connect" className="col-span-2 md:col-span-1">
            <h3 className="text-sm font-semibold text-bone">{t.connect}</h3>
            <p className="mt-5 max-w-[22ch] text-sm leading-relaxed text-coolgray">
              {t.stayClose}
            </p>
            {submitted ? (
              <p className="mt-4 text-sm text-acid">{t.submitted}</p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="w-full rounded-full border border-bone/20 bg-transparent px-4 py-2.5 text-sm text-bone placeholder:text-mutedgray focus:border-acid focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-fit rounded-full bg-acid px-5 py-2.5 text-sm font-medium text-abyss transition-colors duration-300 hover:bg-acid-bright"
                >
                  {t.submit}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/[0.08] py-8 text-xs text-mutedgray md:flex-row md:items-center md:justify-between">
          <p>{t.rights}</p>
          <p className="flex flex-wrap items-center gap-x-2">
            <Link href="/privacy" className="transition-colors duration-300 hover:text-acid">
              {t.privacy}
            </Link>
            <span>&middot;</span>
            <Link href="/terms-of-use" className="transition-colors duration-300 hover:text-acid">
              {t.terms}
            </Link>
            <span>&middot;</span>
            <Link href="/cookies" className="transition-colors duration-300 hover:text-acid">
              {t.cookies}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
