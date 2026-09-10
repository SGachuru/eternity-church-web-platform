import Link from "next/link";
import { SiteShell } from "../site-shell";

const locations = [
  {
    title: "Karen Campus",
    body: "Main worship gathering, prayer gatherings, teaching, and family fellowship.",
    details: "Karen, Nairobi, Kenya",
  },
  {
    title: "Outreach & Community",
    body: "Local outreach service, evangelism, care, and prayer ministry in nearby communities.",
    details: "Across Nairobi and surrounding areas",
  },
  {
    title: "Online Church",
    body: "Online worship, messages, pastoral teaching, prayer, and global community.",
    details: "YouTube · Livestream · Prayer",
  },
];

export default function LocationsPage() {
  return (
    <SiteShell>
      <section className="rounded-[2rem] border border-stone-200 bg-white/80 p-6 shadow-[0_20px_40px_rgba(28,20,16,0.06)] md:p-8">
        <div className="mb-8">
          <p className="section-label"><span>01</span><span>Locations</span></p>
          <h1 className="mt-5 text-4xl text-stone-900 sm:text-5xl lg:text-6xl">
            Join us <span className="italic text-[#b97036]">in person or online.</span>
          </h1>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {locations.map((loc, index) => (
            <article key={loc.title} className="soft-card rounded-[1.5rem] p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b97036]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-2xl text-stone-900">{loc.title}</h3>
              <p className="mt-4 text-stone-700">{loc.body}</p>
              <div className="mt-5 border-t border-stone-200 pt-4 text-sm font-semibold text-stone-900">
                {loc.details}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] bg-stone-950 p-8 text-white">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0bd78]">Plan your visit</div>
              <h2 className="mt-4 text-4xl">Eternity Gospel Church, Karen</h2>
              <p className="mt-4 text-stone-300">
                Come worship with us in Karen. You’ll find a warm welcome, sound teaching, prayer, and a loving community.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-[1rem] border border-white/10 bg-white/5 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">Service times</div>
                <div className="mt-2 text-lg font-semibold text-white">8:00 AM – 1:00 PM</div>
              </div>
              <div className="rounded-[1rem] border border-white/10 bg-white/5 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">Contact</div>
                <div className="mt-2 text-lg font-semibold text-white">info@eternitygospelchurch.org</div>
              </div>
              <Link href="/visit" className="inline-flex w-fit rounded-full bg-[#b97036] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a9622d]">
                Plan your visit ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
