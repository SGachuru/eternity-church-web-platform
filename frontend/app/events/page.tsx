import Link from "next/link";
import { SiteShell } from "../site-shell";

const events = [
  { date: "06", month: "Sep", title: "Welcome lunch", detail: "New guest lunch with worship and conversation." },
  { date: "13", month: "Sep", title: "Family fun morning", detail: "Games, music, and fellowship for every generation." },
  { date: "19", month: "Sep", title: "Serve Saturday", detail: "A day of practical care and service across the community." },
  { date: "27", month: "Sep", title: "Prayer night", detail: "An evening of worship, intercession, and prayer for the city." },
];

export default function EventsPage() {
  return (
    <SiteShell>
      <section className="rounded-[2rem] border border-stone-200 bg-white/70 p-6 shadow-[0_20px_40px_rgba(28,20,16,0.06)] md:p-8">
        <p className="section-label"><span>01</span><span>Events</span></p>
        <h1 className="mt-4 text-4xl text-stone-900 sm:text-5xl">Gather with <span className="italic text-[#b97036]">the community.</span></h1>
        <p className="mt-5 max-w-2xl text-lg text-stone-700">
          From prayer gatherings to family events and outreach days, we create moments to worship, connect, and serve together.
        </p>
      </section>

      <section className="mt-16 space-y-5">
        {events.map((event) => (
          <article key={`${event.date}-${event.title}`} className="soft-card rounded-[1.5rem] p-5 md:flex md:items-center md:justify-between md:p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 flex-col items-center justify-center rounded-[1rem] bg-[#f2e4d2] text-center text-stone-900">
                <span className="text-2xl font-semibold">{event.date}</span>
                <span className="text-[10px] uppercase tracking-[0.2em]">{event.month}</span>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b97036]">Community</div>
                <h3 className="mt-2 text-2xl text-stone-900">{event.title}</h3>
              </div>
            </div>
            <p className="mt-4 max-w-xl text-stone-700 md:mt-0">{event.detail}</p>
          </article>
        ))}
      </section>

      <div className="mt-16 text-center">
        <Link href="/contact" className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white">
          Ask about upcoming events ↗
        </Link>
      </div>
    </SiteShell>
  );
}
