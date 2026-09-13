import Link from "next/link";
import { SiteShell } from "../site-shell";

export default function GivingPage() {
  return (
    <SiteShell>
      <section className="rounded-[2rem] border border-stone-200 bg-white/70 p-6 shadow-[0_20px_40px_rgba(28,20,16,0.06)] md:p-8">
        <p className="section-label"><span>01</span><span>Giving</span></p>
        <h1 className="mt-4 text-4xl text-stone-900 sm:text-5xl">Give with <span className="italic text-[#b97036]">purpose.</span></h1>
        <p className="mt-5 max-w-2xl text-lg text-stone-700">
          Your generosity supports worship, discipleship, outreach, and the practical care of people in need across our community and beyond.
        </p>
      </section>

      <section className="mt-16 grid gap-5 md:grid-cols-3">
        {[
          ["Mission", "Support gospel outreach and discipleship across our church community."],
          ["Ministry", "Help fund prayer gatherings, teaching, youth work, and family care."],
          ["Care", "Provide practical assistance and support for those who are hurting or in need."],
        ].map(([title, text]) => (
          <article key={title} className="soft-card rounded-[1.5rem] p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b97036]">Purpose</div>
            <h3 className="mt-4 text-2xl text-stone-900">{title}</h3>
            <p className="mt-3 text-stone-700">{text}</p>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-white md:p-8">
        <h2 className="text-4xl sm:text-5xl">Partner with us in <span className="italic text-[#e6b57d]">God&apos;s work.</span></h2>
        <p className="mt-4 max-w-2xl text-stone-300">
          We welcome your generosity and are grateful for every act of faithful sharing.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-900">
            Enquire about giving ↗
          </Link>
          <Link href="/visit" className="inline-flex rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white">
            Plan a visit ↗
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
