import Link from "next/link";
import { SiteShell } from "../site-shell";

const leaders = [
  {
    name: "Bishop Charles Kaloki",
    title: "Founder & Senior Pastor",
    role: "Vision, spiritual formation, and church leadership",
    image: "/bishop%20charles%20and%20rev.%20miriam.JPG",
  },
  {
    name: "Rev. Miriam Kaloki",
    title: "Pastor & Prayer & Ministries Director",
    role: "Women’s ministry, pastoral care, and discipleship",
    image: "/bishop%20charles%20and%20rev.%20miriam.JPG",
  },
  {
    name: "Eternity Gospel Team",
    title: "Worship, Worship & Community Leaders",
    role: "Sons and daughters serving across ministry teams",
    image: "/church-background.jpg",
  },
];

export default function LeadershipPage() {
  return (
    <SiteShell>
      <section className="rounded-[2rem] border border-stone-200 bg-white/80 p-6 shadow-[0_20px_40px_rgba(28,20,16,0.06)] md:p-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-label"><span>01</span><span>Pastors &amp; leadership</span></p>
            <h1 className="mt-5 text-4xl text-stone-900 sm:text-5xl lg:text-6xl">
              Meet the <span className="italic text-[#b97036]">Eternity Gospel</span> leadership team.
            </h1>
          </div>
          <Link href="/contact" className="rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#b97036]">
            Contact leadership ↗
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {leaders.map((leader, index) => (
            <article key={leader.name} className="soft-card rounded-[1.75rem] p-6">
              <div className="relative">
                <div className="h-72 overflow-hidden rounded-[1.5rem] border border-white/70 bg-stone-100">
                  <img src={leader.image} alt={leader.name} className="h-full w-full object-cover" />
                </div>
                <span className="absolute left-4 top-4 rounded-full bg-[#b97036] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-6">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b97036]">
                  {leader.title}
                </div>
                <h3 className="mt-3 text-2xl text-stone-900">{leader.name}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-700">{leader.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          ["Prayer", "Prayer and spiritual care shaped by the Gospel."],
          ["Discipleship", "Growing people into mature followers of Christ."],
          ["Service", "Serving families, churches, and the wider community."],
        ].map(([title, text]) => (
          <article key={title} className="soft-card rounded-[1.5rem] p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b97036]">Leadership focus</div>
            <h3 className="mt-4 text-2xl text-stone-900">{title}</h3>
            <p className="mt-3 text-stone-700">{text}</p>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}
