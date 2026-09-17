import Link from "next/link";
import { SiteShell } from "../site-shell";

export default function CookiesPage() {
  return (
    <SiteShell>
      <section className="rounded-[2rem] border border-stone-200 bg-white/70 p-6 shadow-[0_20px_40px_rgba(28,20,16,0.06)] md:p-8">
        <p className="section-label"><span>01</span><span>Cookies</span></p>
        <h1 className="mt-4 text-4xl text-stone-900 sm:text-5xl">We use <span className="italic text-[#b97036]">minimal cookies.</span></h1>
        <p className="mt-5 max-w-2xl text-lg text-stone-700">
          We keep cookie use minimal and only where it improves the site experience and functionality.
        </p>
      </section>

      <div className="mt-16 soft-card rounded-[1.5rem] p-6 text-stone-700">
        <p>Cookies may be used to support essential site behavior and improve usability. This information is kept simple and limited to what is necessary for the website to function appropriately.</p>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white">
          Back home ↗
        </Link>
      </div>
    </SiteShell>
  );
}
