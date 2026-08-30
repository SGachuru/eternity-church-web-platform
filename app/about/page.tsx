import Link from "next/link";
import { SiteShell } from "../site-shell";

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="rounded-[2rem] border border-stone-200 bg-white/70 p-6 shadow-[0_20px_40px_rgba(28,20,16,0.06)] md:p-8">
        <p className="section-label"><span>01</span><span>Our story</span></p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <h1 className="text-4xl text-stone-900 sm:text-5xl">
            Rooted in the Word, <span className="italic text-[#b97036]">led by grace.</span>
          </h1>
          <div className="space-y-5 text-lg text-stone-700">
            <p>
              Eternity Gospel Church and Ministries is an autonomous Pentecostal and
              Evangelistic Ministry committed to the proclamation of the Gospel and the
              spiritual growth of every believer.
            </p>
            <p>
              Our mission is to teach the Word of God, pray with power, serve the
              community, and touch the world with the Love of Christ.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Christ-centered", "Our preaching, worship, and community life are rooted in the person and work of Jesus Christ."],
            ["Prayerful", "We believe prayer is essential to spiritual renewal, discernment, and effective discipleship."],
            ["Compassionate", "We serve with generosity, kindness, and a heart for neighborly care in our community."],
          ].map(([title, text]) => (
            <article key={title} className="soft-card rounded-[1.5rem] p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b97036]">Value</div>
              <h3 className="mt-4 text-2xl text-stone-900">{title}</h3>
              <p className="mt-3 text-stone-700">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-white md:p-8">
        <p className="section-label text-white"><span className="bg-white/10 text-white">03</span><span>Mission</span></p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="text-4xl sm:text-5xl">Gathering people <span className="italic text-[#e6b57d]">to grow in faith.</span></h2>
          <div className="space-y-5 text-stone-300">
            <div>
              <strong className="block text-lg text-white">Teach</strong>
              <p>We equip believers with biblical teaching that renews minds and transforms lives.</p>
            </div>
            <div>
              <strong className="block text-lg text-white">Pray</strong>
              <p>We create spaces for personal and communal intercession, healing, and spiritual breakthrough.</p>
            </div>
            <div>
              <strong className="block text-lg text-white">Serve</strong>
              <p>We respond to the needs of people with love, practical support, and meaningful service.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Leadership", "Our leaders invest in discipleship, pastoral care, and the spiritual health of the church."],
            ["Families", "We encourage growing in faith together through worship, fellowship, and shared care."],
            ["Outreach", "We carry the Love of Christ beyond the church walls through outreach, service, and evangelism."],
          ].map(([title, text]) => (
            <article key={title} className="soft-card rounded-[1.5rem] p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b97036]">Community</div>
              <h3 className="mt-4 text-2xl text-stone-900">{title}</h3>
              <p className="mt-3 text-stone-700">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-16 text-center">
        <Link href="/visit" className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white">
          Plan your visit ↗
        </Link>
      </div>
    </SiteShell>
  );
}
