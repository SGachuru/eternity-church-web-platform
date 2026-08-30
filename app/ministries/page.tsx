import Link from "next/link";
import { SiteShell } from "../site-shell";

const ministries = [
  { title: "Prayer & Word", description: "Scripture teaching, prayer gatherings, and spiritual formation." },
  { title: "Evangelism", description: "Outreach and discipleship that share the good news with those around us." },
  { title: "Family & Fellowship", description: "Spaces for belonging, relationship, and care across every season of life." },
  { title: "Youth & Young Adults", description: "A place for purpose, mentoring, and joyful faith-filled community." },
  { title: "Children & Education", description: "Helping children know God, grow in wisdom, and thrive in faith." },
  { title: "Community Care", description: "Meeting practical needs with compassion and Christ-like service." },
];

export default function MinistriesPage() {
  return (
    <SiteShell>
      <section className="rounded-[2rem] border border-stone-200 bg-white/70 p-6 shadow-[0_20px_40px_rgba(28,20,16,0.06)] md:p-8">
        <p className="section-label"><span>01</span><span>Ministries</span></p>
        <h1 className="mt-4 text-4xl text-stone-900 sm:text-5xl">Find your place to <span className="italic text-[#b97036]">grow.</span></h1>
        <p className="mt-5 max-w-2xl text-lg text-stone-700">
          Every believer is invited to discover purpose, belong to a caring community, and live out the love of Christ in practical ways.
        </p>
      </section>

      <section className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {ministries.map((ministry, index) => (
          <article key={ministry.title} className="soft-card rounded-[1.5rem] p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b97036]">0{index + 1}</div>
            <h3 className="mt-4 text-2xl text-stone-900">{ministry.title}</h3>
            <p className="mt-3 text-stone-700">{ministry.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-[2rem] border border-stone-200 bg-[#b97036] p-6 text-white md:p-8">
        <h2 className="text-4xl sm:text-5xl">Serve with <span className="italic text-[#f4d3a7]">purpose.</span></h2>
        <p className="mt-4 max-w-2xl text-lg text-white/90">
          Whether you are a first-time guest or a long-time member, there is a place for you to participate in ministry, service, and fellowship.
        </p>
        <div className="mt-6">
          <Link href="/contact" className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-900">
            Connect with us ↗
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
