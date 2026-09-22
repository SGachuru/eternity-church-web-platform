import Link from "next/link";
import { SiteShell } from "../site-shell";

export default function PrayerPage() {
  return (
    <SiteShell>
      <section className="rounded-[2rem] border border-stone-200 bg-white/70 p-6 shadow-[0_20px_40px_rgba(28,20,16,0.06)] md:p-8">
        <p className="section-label"><span>01</span><span>Prayer</span></p>
        <h1 className="mt-4 text-4xl text-stone-900 sm:text-5xl">We believe <span className="italic text-[#b97036]">God hears.</span></h1>
        <p className="mt-5 max-w-2xl text-lg text-stone-700">
          Prayer is central to our life together. We invite you to bring your needs, your praise, and your hopes before the Lord.
        </p>
      </section>

      <section className="mt-16 grid gap-5 md:grid-cols-2">
        {[
          ["Prayer requests", "Share your needs and we will stand with you in intercession."],
          ["Praise & thanksgiving", "Celebrate the goodness of God in your life and in the church."],
          ["Healing & restoration", "Pray for strength, peace, and spiritual renewal."],
          ["Guidance", "Seek wisdom and discernment for life, family, work, and purpose."],
        ].map(([title, text]) => (
          <article key={title} className="soft-card rounded-[1.5rem] p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b97036]">Support</div>
            <h3 className="mt-4 text-2xl text-stone-900">{title}</h3>
            <p className="mt-3 text-stone-700">{text}</p>
          </article>
        ))}
      </section>

      <div className="mt-16 text-center">
        <Link href="/contact" className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white">
          Submit a prayer request ↗
        </Link>
      </div>
    </SiteShell>
  );
}
