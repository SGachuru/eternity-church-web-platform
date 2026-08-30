"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ministries", label: "Ministries" },
  { href: "/sermons", label: "Sermons" },
  { href: "/events", label: "Events" },
  { href: "/giving", label: "Give" },
  { href: "/prayer", label: "Prayer" },
  { href: "/contact", label: "Contact" },
  { href: "/visit", label: "Plan Your Visit" },
  { href: "/login", label: "Member Login" },
];

const legalItems = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="site-shell min-h-screen text-stone-900">
      <div className="mx-auto w-full">
        <div className="overflow-hidden bg-transparent lg:flex lg:min-h-screen">
          <aside
            className={[
              "w-full bg-stone-950 p-5 text-white transition-all duration-300 ease-out lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[300px] lg:flex-col lg:justify-between lg:border-r lg:border-stone-800",
              isOpen ? "block translate-x-0 opacity-100" : "hidden translate-x-[-12px] opacity-0 lg:block lg:translate-x-0 lg:opacity-100",
            ].join(" ")}
          >
            <div className="flex items-center justify-between gap-3">
              <Link href="/" className="flex items-center gap-3">
                <span className="brand-mark">EGC</span>
                <div>
                  <div className="text-sm font-semibold tracking-[0.02em]">Eternity Gospel</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-white/70">
                    Church &amp; Ministries
                  </div>
                </div>
              </Link>

              <button
                type="button"
                aria-label={isOpen ? "Close navigation" : "Open navigation"}
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex rounded-full border border-white/20 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white lg:hidden"
              >
                {isOpen ? "Close" : "Explore"}
              </button>
            </div>

            <nav className="mt-8 space-y-2 lg:overflow-y-auto lg:pr-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-full border border-transparent px-3 py-2 text-sm font-medium text-white/75 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                >
                  <span>{item.label}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </nav>

            <div className="mt-8 border-t border-white/10 pt-6 lg:pb-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                Legal &amp; access
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {legalItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="flex-1 bg-transparent">
            <header className="bg-white/30 px-5 py-4 backdrop-blur-sm lg:hidden">
              <div className="flex items-center justify-between gap-3">
                <Link href="/" className="flex items-center gap-3">
                  <span className="brand-mark">EGC</span>
                  <div>
                    <div className="text-sm font-semibold">Eternity Gospel</div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500">
                      Church &amp; Ministries
                    </div>
                  </div>
                </Link>
                <button
                  type="button"
                  aria-label={isOpen ? "Close navigation" : "Open navigation"}
                  onClick={() => setIsOpen(!isOpen)}
                  className="rounded-full border border-stone-300 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-800"
                >
                  {isOpen ? "Close" : "Explore"}
                </button>
              </div>
            </header>

            <main className="px-5 py-8 sm:px-8 lg:px-10 lg:py-10">{children}</main>

            <footer className="border-t border-stone-200 bg-stone-950 px-5 py-8 text-white sm:px-8 lg:px-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="flex items-center gap-3">
                  <span className="brand-mark">EGC</span>
                  <div>
                    <div className="text-sm font-semibold">Eternity Gospel</div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-white/70">
                      Church &amp; Ministries
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 text-sm text-white/80">
                  <Link href="/about">About</Link>
                  <Link href="/sermons">Sermons</Link>
                  <Link href="/contact">Contact</Link>
                  <Link href="/giving">Give</Link>
                </div>

                <div className="text-sm italic text-white/90">Gather. Grow. Go.</div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
