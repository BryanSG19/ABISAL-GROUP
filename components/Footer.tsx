"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";

const WHAT_WE_DO_LINKS = [
  "AI Literacy",
  "Applied AI Sprints",
  "AI Strategy & Adoption",
  "Custom Engines & Agents",
];

const COMPANY_LINKS = [
  { label: "Abisal Difference", href: "/abisal-difference" },
  { label: "About Us", href: "/#about-us" },
  { label: "Our Work", href: "/our-work" },
  { label: "Get in Touch", href: "/#get-in-touch" },
];

export default function Footer() {
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
            <h3 className="text-sm font-semibold text-bone">What We Do</h3>
            <ul className="mt-5 space-y-3">
              {WHAT_WE_DO_LINKS.map((label) => (
                <li key={label}>
                  <Link
                    href="/what-we-do"
                    className="text-sm text-coolgray transition-colors duration-300 hover:text-acid"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-bone">Company</h3>
            <ul className="mt-5 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-coolgray transition-colors duration-300 hover:text-acid"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div id="connect" className="col-span-2 md:col-span-1">
            <h3 className="text-sm font-semibold text-bone">Connect</h3>
            <p className="mt-5 max-w-[22ch] text-sm leading-relaxed text-coolgray">
              Stay close to what&rsquo;s next.
            </p>
            {submitted ? (
              <p className="mt-4 text-sm text-acid">
                You&rsquo;re on the list. Welcome aboard.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full rounded-full border border-bone/20 bg-transparent px-4 py-2.5 text-sm text-bone placeholder:text-mutedgray focus:border-acid focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-fit rounded-full bg-acid px-5 py-2.5 text-sm font-medium text-abyss transition-colors duration-300 hover:bg-acid-bright"
                >
                  Stay Connected
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/[0.08] py-8 text-xs text-mutedgray md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 ABISAL GROUP. All rights reserved.</p>
          <p className="flex flex-wrap gap-x-2">
            <span>Privacy Policy</span>
            <span>&middot;</span>
            <span>Terms of Use</span>
            <span>&middot;</span>
            <span>Cookie Policy</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
