import Link from "next/link";
import { SiteShell } from "../site-shell";

const posts = [
  {
    title: "Worship weekend begins this Sunday",
    category: "Announcements",
    summary: "Join us for a weekend of praise, prayer, teaching, and community fellowship.",
    date: "Sep 12, 2026",
  },
  {
    title: "Prayer & discipleship gathering",
    category: "Prayer",
    summary: "A midweek night of prayer and biblical encouragement for the church family.",
    date: "Sep 18, 2026",
  },
  {
    title: "Community outreach and family care",
    category: "Community",
    summary: "We are serving across Karen and beyond with practical care and compassion.",
    date: "Sep 26, 2026",
  },
];

export default function NewsPage() {
  return (
    <SiteShell>
      <section className="rounded-[2rem] border border-stone-200 bg-white/80 p-6 shadow-[0_20px_40px_rgba(28,20,16,0.06)] md:p-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-label"><span>01</span><span>News &amp; announcements</span></p>
            <h1 className="mt-5 text-4xl text-stone-900 sm:text-5xl lg:text-6xl">
              Church <span className="italic text-[#b97036]">updates.</span>
            </h1>
          </div>
          <Link href="/events" className="rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#b97036]">
            View events ↗
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="soft-card rounded-[1.5rem] p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b97036]">{post.category}</div>
              <div className="mt-4 text-sm font-semibold text-stone-500">{post.date}</div>
              <h3 className="mt-3 text-2xl text-stone-900">{post.title}</h3>
              <p className="mt-4 text-stone-700">{post.summary}</p>
              <div className="mt-6">
                <Link href="/contact" className="text-sm font-semibold text-stone-900 underline decoration-stone-400 underline-offset-4">
                  Learn more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
