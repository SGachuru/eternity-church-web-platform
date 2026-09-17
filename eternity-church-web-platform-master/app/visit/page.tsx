import Link from "next/link";
import { SiteShell } from "../site-shell";

export default function VisitPage() {
  return (
    <SiteShell>
      <section className="rounded-[2rem] border border-stone-200 bg-white/70 p-6 shadow-[0_20px_40px_rgba(28,20,16,0.06)] md:p-8">
        <p className="section-label"><span>01</span><span>Plan your visit</span></p>
        <h1 className="mt-4 text-4xl text-stone-900 sm:text-5xl">Join us this <span className="italic text-[#b97036]">Sunday.</span></h1>
        <p className="mt-5 max-w-2xl text-lg text-stone-700">
          We would love to welcome you. Come as you are and experience worship, prayer, and biblical teaching in a warm and friendly community.
        </p>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          ["When", "Sunday gatherings begin at 9:00 AM."],
          ["Where", "Karen, Nairobi, Kenya."],
          ["What to expect", "Worship, a practical message from the Word, prayer, and a warm welcome."],
        ].map(([title, text]) => (
          <article key={title} className="soft-card rounded-[1.5rem] p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b97036]">{title}</div>
            <p className="mt-4 text-lg text-stone-700">{text}</p>
          </article>
        ))}
      </section>

      <div className="mt-16 text-center">
        <Link href="/contact" className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white">
          Contact the church ↗
        </Link>
      </div>
    </SiteShell>
  );
}
