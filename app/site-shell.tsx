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
  return (
    <div className="site-shell min-h-screen text-stone-900">
      <div className="mx-auto max-w-[1500px] px-4 py-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-stone-200/80 bg-white/70 shadow-[0_25px_60px_rgba(27,20,16,0.08)] backdrop-blur-sm lg:flex">
          <aside className="w-full border-b border-stone-200 bg-stone-950 p-5 text-white lg:w-[300px] lg:border-b-0 lg:border-r">
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
                className="inline-flex rounded-full border border-white/20 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white lg:hidden"
              >
                Explore
              </button>
            </div>

            <nav className="mt-8 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-full border border-transparent px-3 py-2 text-sm font-medium text-white/75 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                >
                  <span>{item.label}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </nav>

            <div className="mt-8 border-t border-white/10 pt-6">
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
            <header className="border-b border-stone-200/80 bg-white/40 px-5 py-4 backdrop-blur-sm lg:hidden">
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
                <button type="button" className="rounded-full border border-stone-300 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-800">
                  Explore
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
