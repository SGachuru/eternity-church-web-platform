"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/visit", label: "I'm New" },
  { href: "/events", label: "What's Happening" },
  { href: "/contact", label: "Get Connected" },
  { href: "/about", label: "About Us" },
  { href: "/sermons", label: "Media" },
  { href: "/giving", label: "Give" },
  { href: "/news", label: "Resources" },
  { href: "/livestream", label: "Watch Live" },
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
      <div className="site-page-wrap">
        <header className="site-header">
          <div className="site-header-inner">
            <Link href="/" className="site-brand" onClick={() => setIsOpen(false)}>
              <Image src="/church%20logo.JPG" alt="Eternity Gospel Church logo" width={56} height={56} className="brand-logo" />
              <div className="site-brand-text">
                <div className="brand-title">Eternity Gospel</div>
                <div className="brand-subtitle">
                  Church &amp; Ministries
                </div>
              </div>
            </Link>

            <nav className="primary-nav">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="primary-nav-link">
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-button"
            >
              {isOpen ? "Close" : "Explore"}
            </button>

            {isOpen && (
              <div className="mobile-menu-panel">
                <nav className="mobile-nav">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="mobile-nav-link"
                    >
                      <span>{item.label}</span>
                      <span aria-hidden="true">↗</span>
                    </Link>
                  ))}
                </nav>
                <div className="mobile-legal">
                  <div className="mobile-legal-title">Legal &amp; access</div>
                  <div className="mobile-legal-links">
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

        <main className="page-main">{children}</main>

        <footer className="site-footer">
          <div className="footer-social-row">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="footer-social-link">
                <Image src={social.image} alt={`${social.label} QR code`} width={64} height={64} className="footer-social-image" />
                <span className="footer-social-copy">Follow us on {social.label} ↗</span>
              </a>
            ))}
          </div>

          <div className="footer-bottom">
            <div className="footer-brand">
              <Image src="/church%20logo.JPG" alt="Eternity Gospel Church logo" width={56} height={56} className="brand-logo brand-logo-footer" />
              <div>
                <div className="footer-brand-title">Eternity Gospel</div>
                <div className="footer-brand-subtitle">Church &amp; Ministries</div>
              </div>
            </div>

            <div className="footer-links">
              <Link href="/about">About</Link>
              <Link href="/sermons">Sermons</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/giving">Give</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/cookies">Cookies</Link>
            </div>

            <div className="footer-slogan">Gather. Grow. Go.</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
