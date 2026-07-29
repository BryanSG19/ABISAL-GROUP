"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const STORAGE_KEY = "abisal-cookie-consent";

type Locale = "es" | "en";

const COPY: Record<
  Locale,
  { dialogLabel: string; text: string; linkLabel: string; cookiesHref: string; accept: string }
> = {
  es: {
    dialogLabel: "Aviso de cookies",
    text: "Usamos cookies. ¿Estás de acuerdo?",
    linkLabel: "Más información.",
    cookiesHref: "/cookies/",
    accept: "Aceptar y cerrar",
  },
  en: {
    dialogLabel: "Cookie notice",
    text: "We use cookies. Do you agree?",
    linkLabel: "Learn more.",
    cookiesHref: "/en/cookies/",
    accept: "Accept and close",
  },
};

export default function CookieBanner() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/en") ? "en" : "es";
  const t = COPY[locale];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = window.localStorage.getItem(STORAGE_KEY);
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    window.localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t.dialogLabel}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-abyss/95 px-6 py-4 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-content flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <p className="text-sm leading-relaxed text-bone/90">
          {t.text}{" "}
          <Link
            href={t.cookiesHref}
            className="underline underline-offset-2 text-acid hover:text-acid-bright"
          >
            {t.linkLabel}
          </Link>
        </p>
        <button
          type="button"
          onClick={handleAccept}
          className="shrink-0 rounded-full bg-acid px-6 py-2 text-sm font-semibold text-abyss transition-colors hover:bg-acid-bright"
        >
          {t.accept}
        </button>
      </div>
    </div>
  );
}
