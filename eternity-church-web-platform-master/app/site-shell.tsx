"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/ministries", label: "Ministries" },
  { href: "/sermons", label: "Sermons" },
  { href: "/events", label: "Events" },
  { href: "/livestream", label: "Livestream" },
  { href: "/giving", label: "Giving / Donations" },
  { href: "/contact", label: "Contact" },
  { href: "/news", label: "News & Announcements" },
  { href: "/visit", label: "Plan Your Visit" },
];

const aboutItems = [
  { href: "/about#mission", label: "Mission" },
  { href: "/about#vision", label: "Vision" },
  { href: "/about#core-values", label: "Core Values" },
  { href: "/leadership", label: "Leadership" },
  { href: "/locations", label: "Location" },
];

const legalItems = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/eternitygospelchurch", image: "/eternity%20facebook%20qr.png" },
  { label: "Instagram", href: "https://www.instagram.com/eternitygospelchurch/", image: "/eternity%20insatgram%20qr.png" },
  { label: "YouTube", href: "https://www.youtube.com/@eternitygospelchurchministries", image: "/eternity%20youtube%20qr.png" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="site-shell min-h-screen text-stone-900">
      <div className="mx-auto w-full">
        <header className="sticky top-0 z-50 bg-stone-950/95 text-white shadow-lg shadow-stone-950/20 backdrop-blur-sm">
          <div className="relative mx-auto flex min-h-16 max-w-[1600px] items-center justify-between gap-5 px-5 py-3 sm:px-8 lg:px-10">
            <Link href="/" className="flex shrink-0 items-center gap-3" onClick={() => setIsOpen(false)}>
              <Image src="/church-logo-white.png" alt="Eternity Gospel Church logo" width={56} height={56} className="brand-logo" />
              <div>
                <div className="text-sm font-semibold tracking-[0.02em]">Eternity Gospel</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/70">
                  Church &amp; Ministries
                </div>
              </div>
            </Link>

            <nav className="hidden min-w-0 items-center gap-1 overflow-visible lg:flex">
              <div className="group relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  className="flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  About
                  <span aria-hidden="true" className="text-[10px] transition group-open:rotate-180">⌄</span>
                </button>
                <div className="invisible absolute left-0 top-full z-10 mt-2 min-w-48 rounded-xl border border-white/10 bg-stone-950 p-2 opacity-0 shadow-2xl transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {aboutItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#b97036] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-md shadow-[#b97036]/30 transition hover:bg-[#a9622d] lg:hidden"
            >
              {isOpen ? "Close" : "Explore"}
            </button>

            {isOpen && (
              <div className="absolute left-0 right-0 top-full border-t border-white/10 bg-stone-950 p-4 shadow-2xl lg:hidden">
                <nav className="grid gap-1">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white [&::-webkit-details-marker]:hidden">
                      <span>About</span>
                      <span aria-hidden="true" className="transition group-open:rotate-180">⌄</span>
                    </summary>
                    <div className="ml-3 border-l border-white/10 pl-3">
                      {aboutItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block rounded-lg px-3 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                    >
                      <span>{item.label}</span>
                      <span aria-hidden="true">↗</span>
                    </Link>
                  ))}
                </nav>
                <div className="mt-3 border-t border-white/10 pt-3">
                  <div className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                    Legal &amp; access
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 px-3 text-sm text-white/70">
                    {legalItems.map((item) => (
                      <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>

        <main className="px-5 py-8 sm:px-8 lg:px-10 lg:py-10">{children}</main>

        <footer className="border-t border-stone-200 bg-stone-950 px-5 py-8 text-white sm:px-8 lg:px-10">
          <div className="flex flex-col gap-8">
            <div className="grid gap-4 border-b border-white/10 pb-8 sm:grid-cols-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
                >
                  <Image
                    src={social.image}
                    alt={`${social.label} QR code`}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-md bg-white object-contain"
                  />
                  <span className="text-sm font-semibold text-white/85 group-hover:text-white">
                    Follow us on {social.label} ↗
                  </span>
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex items-center gap-3">
              <Image src="/church-logo-white.png" alt="Eternity Gospel Church logo" width={56} height={56} className="brand-logo brand-logo-footer" />
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
          </div>
        </footer>
      </div>
    </div>
  );
}
