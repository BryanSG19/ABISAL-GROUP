"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "What We Do", href: "/what-we-do" },
  { label: "Abisal Difference", href: "/abisal-difference" },
  { label: "About Us", href: "/#about-us" },
  { label: "Our Work", href: "/our-work" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-abisal ${
        scrolled
          ? "bg-abyss/80 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-content flex h-[72px] md:h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/brand/logo-mark-bone.png"
            alt="ABISAL GROUP"
            width={28}
            height={24}
            className="h-6 w-auto md:h-7"
            priority
          />
          <span className="text-bone font-semibold tracking-[0.08em] text-sm md:text-base">
            ABISAL
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline text-sm text-bone/80 hover:text-acid transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/#get-in-touch"
            className="group inline-flex items-center gap-2 rounded-full border border-bone/25 px-5 py-2.5 text-sm text-bone transition-all duration-300 hover:border-acid hover:text-acid"
          >
            Get in Touch
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        <button
          aria-label="Toggle navigation menu"
          className="lg:hidden flex flex-col items-end gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`h-px bg-bone transition-all duration-300 ${
              menuOpen ? "w-6 translate-y-[3px] rotate-45" : "w-6"
            }`}
          />
          <span
            className={`h-px bg-bone transition-all duration-300 ${
              menuOpen ? "w-6 -translate-y-[3px] -rotate-45" : "w-4"
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-abyss border-b border-white/[0.06]"
          >
            <div className="container-content flex flex-col gap-6 py-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base text-bone/85 hover:text-acid transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#get-in-touch"
                onClick={() => setMenuOpen(false)}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-bone/25 px-5 py-2.5 text-sm text-bone hover:border-acid hover:text-acid transition-colors"
              >
                Get in Touch →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
