import Link from "next/link";
import { SiteShell } from "./site-shell";

const featureCards = [
  {
    index: "01",
    title: "Worship in Karen",
    description: "Join us in person for worship, biblical teaching, prayer, and community.",
    href: "/visit",
  },
  {
    index: "02",
    title: "Watch online",
    description: "Find encouragement through teaching and messages from wherever you are.",
    href: "https://www.youtube.com/@eternitygospelchurchministries",
  },
  {
    index: "03",
    title: "Grow together",
    description: "Discover ministries and practical ways to live out the Love of Christ.",
    href: "/ministries",
  },
];

const ministryHighlights = [
  {
    title: "Prayer & Word",
    blurb: "Go deeper through biblical teaching and a life of prayer.",
  },
  { title: "Evangelism", blurb: "Share the good news and the Love of Christ with the world." },
  {
    title: "Family & fellowship",
    blurb: "Find encouragement, friendship, and a place to serve.",
  },
];

const eventRows = [
  {
    date: "06",
    month: "Sep",
    title: "Welcome lunch",
    type: "Community",
    description: "Meet the team, share a meal, and get to know your new church family.",
  },
  {
    date: "13",
    month: "Sep",
    title: "Family fun morning",
    type: "Kids",
    description: "Games, crafts, and a little joyful chaos for every generation.",
  },
  {
    date: "19",
    month: "Sep",
    title: "Serve Saturday",
    type: "Community",
    description: "Join a team caring for local schools, streets, and shared spaces.",
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      <section className="hero-photo relative isolate -mx-5 min-h-[620px] overflow-hidden px-6 py-10 text-white shadow-[0_20px_40px_rgba(28,20,16,0.18)] sm:-mx-8 sm:px-10 lg:-mx-10 lg:min-h-[720px] lg:px-16 lg:py-16">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,12,18,0.88),rgba(8,12,18,0.55)_48%,rgba(8,12,18,0.18))]" />
        <div className="relative flex min-h-[540px] max-w-3xl flex-col justify-center lg:min-h-[588px]">
          <p className="section-label text-white/75"><span className="bg-white/15 text-white">01</span><span>Welcome to Eternity Gospel Church</span></p>
          <h1 className="mt-6 max-w-2xl text-5xl leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            Join us for <span className="italic text-[#f0bd78]">worship.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85 sm:text-xl">
            Eternity Gospel Church and Ministries, Karen Nairobi Kenya. Come as
            you are for biblical teaching, prayer, and a welcoming community.
          </p>

          <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
            <div className="rounded-[1rem] border border-white/20 bg-black/25 p-5 backdrop-blur-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0bd78]">Sunday service</div>
              <div className="mt-2 text-2xl font-semibold text-white">8:00 AM – 1:00 PM</div>
              <div className="mt-1 text-sm text-white/70">Worship, discipleship, and teaching</div>
            </div>
            <div className="rounded-[1rem] border border-white/20 bg-black/25 p-5 backdrop-blur-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0bd78]">Hosts</div>
              <div className="mt-2 text-2xl font-semibold text-white">Bishop Charles &amp; Rev Miriam</div>
              <div className="mt-1 text-sm text-white/70">Touching lives with the eternal love of God</div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/visit" className="rounded-full bg-[#b97036] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a9622d]">
              Plan your visit ↗
            </Link>
            <a
              href="https://www.youtube.com/@eternitygospelchurchministries"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-white underline decoration-white/50 underline-offset-4"
            >
              Watch online
            </a>
          </div>
        </div>
      </section>

      <section className="mt-20" id="about">
        <div className="mb-8 flex items-end justify-between gap-6">
          <p className="section-label"><span>02</span><span>Who we are</span></p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="max-w-lg text-4xl text-stone-900 sm:text-5xl">
              A ministry that <span className="italic text-[#b97036]">touches</span>{" "}
              the world.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-stone-700">
              Founded on the Rock, Jesus Christ, Eternity Gospel Church and
              Ministries places the teaching of the Word and prayer at the heart
              of its calling. We seek to touch the world with the Love of Christ.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-base font-semibold text-stone-900 underline decoration-stone-400 underline-offset-4"
            >
              Find your place →
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ["01", "Rooted", "Anchored in the story of Jesus."],
            ["02", "Open", "Curious, honest, and generous."],
            ["03", "Present", "Here for our neighbors."],
          ].map(([n, title, text]) => (
            <div key={n} className="soft-card rounded-[1.5rem] p-6">
              <div className="mb-4 text-sm font-semibold text-[#b97036]">{n}</div>
              <h3 className="text-2xl text-stone-900">{title}</h3>
              <p className="mt-2 text-stone-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20" id="connect">
        <div className="mb-8 flex items-end justify-between gap-6">
          <p className="section-label"><span>03</span><span>Find your place</span></p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <h2 className="text-4xl text-stone-900 sm:text-5xl">
              Find the right <span className="italic text-[#b97036]">experience.</span>
            </h2>
          </div>
          <p className="max-w-xl text-lg text-stone-700">
            Whether you join us in Karen or connect from wherever you are, there
            is a next step for you.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {featureCards.map(({ index, title, description, href }) => (
            <Link
              key={index}
              href={href}
              className="soft-card group rounded-[1.5rem] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-stone-500">{index}</span>
                <span className="text-xl text-[#b97036]">✦</span>
              </div>
              <h3 className="mt-6 text-3xl text-stone-900">{title}</h3>
              <p className="mt-3 text-stone-700">{description}</p>
              <div className="mt-6 text-base font-semibold text-stone-900">↗</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-20" id="ministries">
        <div className="mb-8 flex items-end justify-between gap-6">
          <p className="section-label"><span>04</span><span>Community</span></p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <h2 className="text-4xl text-stone-900 sm:text-5xl">
              Discover your <span className="italic text-[#b97036]">community.</span>
            </h2>
          </div>
          <p className="max-w-xl text-lg text-stone-700">
            There are many ways to belong, grow in faith, and take part in what
            God is doing through this ministry.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {ministryHighlights.map(({ title, blurb }, index) => (
            <div key={title} className="soft-card rounded-[1.5rem] p-6">
              <div className="text-sm font-semibold text-[#b97036]">0{index + 1}</div>
              <h3 className="mt-4 text-2xl text-stone-900">{title}</h3>
              <p className="mt-3 text-stone-700">{blurb}</p>
              <div className="mt-5 text-base font-semibold text-stone-900">↗</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20" id="events">
        <div className="mb-8 flex items-end justify-between gap-6">
          <p className="section-label"><span>05</span><span>Coming up</span></p>
        </div>
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <h2 className="text-4xl text-stone-900 sm:text-5xl">
            Make some <span className="italic text-[#b97036]">plans.</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {['All', 'Community', 'Kids'].map((filter, idx) => (
              <button
                key={filter}
                type="button"
                className={`rounded-full border px-4 py-2 text-sm font-medium ${
                  idx === 0
                    ? 'border-stone-900 bg-stone-900 text-white'
                    : 'border-stone-300 bg-white text-stone-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {eventRows.map((event) => (
            <article
              key={event.title}
              className="soft-card flex flex-col gap-4 rounded-[1.5rem] p-5 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-stone-900 text-center text-white">
                  <span className="text-2xl font-semibold">{event.date}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em]">{event.month}</span>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b97036]">
                    {event.type}
                  </span>
                  <h3 className="mt-1 text-2xl text-stone-900">{event.title}</h3>
                  <p className="mt-1 text-stone-700">{event.description}</p>
                </div>
              </div>
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 bg-white text-xl text-stone-900"
              >
                ↗
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 border-y border-stone-200/80 py-10 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-label"><span>06</span><span>Announcements</span></p>
            <h2 className="mt-5 text-4xl text-stone-900 sm:text-5xl">Stay in the loop.</h2>
          </div>
          <div className="space-y-4 text-stone-700">
            <div className="soft-card rounded-[1.25rem] p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b97036]">This week</div>
              <p className="mt-2 text-lg text-stone-900">Prayer and worship service continues every Sunday at 9:00 AM.</p>
            </div>
            <div className="soft-card rounded-[1.25rem] p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b97036]">Community</div>
              <p className="mt-2 text-lg text-stone-900">Serve Saturday is open to volunteers from every age group.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-8 flex items-end justify-between gap-6">
          <p className="section-label"><span>07</span><span>Testimonials</span></p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["“The church feels like family. We are encouraged, prayed for, and equipped.”", "– A worshipper"],
            ["“The teaching is clear, practical, and rooted in God’s Word.”", "– A new visitor"],
            ["“Our church is a place of hope, prayer, and real community.”", "– A ministry leader"],
          ].map(([quote, byline]) => (
            <div key={quote} className="soft-card rounded-[1.5rem] p-6">
              <p className="text-lg text-stone-700">{quote}</p>
              <div className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#b97036]">{byline}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 bg-stone-950 px-6 py-10 text-white md:px-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="section-label text-white"><span className="bg-white/10 text-white">08</span><span>Location</span></p>
            <h2 className="mt-5 text-4xl sm:text-5xl">Find us in <span className="italic text-[#e6b57d]">Karen.</span></h2>
            <p className="mt-4 text-stone-300">
              Join us for worship, prayer, and community in a place where people can encounter the Love of Christ.
            </p>
            <div className="mt-6 text-lg font-semibold">Karen, Nairobi</div>
          </div>
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-stone-900 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
            <iframe
              title="Eternity Gospel Church location"
              src="https://www.google.com/maps?q=Eternity+Gospel+Church+and+Ministries+Karen+Nairobi&z=16&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-stone-950/80 px-4 py-3 text-sm text-white/80">
              <span>Map and directions</span>
              <a
                href="https://maps.app.goo.gl/UP3ha3xDkjWA3oj88"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#e6b57d] underline-offset-4 hover:underline"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 border-y border-stone-200/80 py-10 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="section-label"><span>09</span><span>Newsletter</span></p>
            <h2 className="mt-5 text-4xl text-stone-900 sm:text-5xl">Stay encouraged.</h2>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              aria-label="Email address"
              type="email"
              placeholder="Email address"
              className="w-full rounded-full border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none focus:border-stone-500"
            />
            <button type="button" className="rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white">
              Join newsletter
            </button>
          </form>
        </div>
      </section>

      <section className="mt-20 grid gap-8 bg-stone-950 p-5 text-white shadow-[0_20px_36px_rgba(27,28,31,0.12)] md:grid-cols-[0.9fr_1.1fr] md:p-8">
        <div className="flex min-h-[260px] items-center justify-center rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_center,#e0b277_0%,#7d4623_35%,#171b1d_100%)]">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/10 text-2xl">▶</div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="section-label mb-4 text-white">
            <span className="bg-white/10 text-white">06</span>
            <span>Latest message</span>
          </p>
          <h2 className="text-4xl sm:text-5xl">
            Good news for <span className="italic text-[#e6b57d]">every season.</span>
          </h2>
          <p className="mt-4 max-w-xl text-stone-300">
            Listen to biblical teaching and encouragement from Eternity Gospel
            Church and Ministries wherever you are.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-300">
            <span>Online</span>
            <span>•</span>
            <span>YouTube</span>
          </div>
          <a
            href="https://www.youtube.com/@eternitygospelchurchministries"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-fit rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200"
          >
            Watch message ↗
          </a>
        </div>
      </section>

      <section className="mt-20" id="visit">
        <div className="grid gap-8 border-y border-stone-200/80 py-10 md:grid-cols-2 md:py-12">
          <div>
            <p className="section-label"><span>07</span><span>Your first Sunday</span></p>
            <h2 className="mt-5 text-4xl text-stone-900 sm:text-5xl">
              Come as <span className="italic text-[#b97036]">you are.</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg text-stone-700">
              Join Eternity Gospel Church and Ministries for worship, biblical
              teaching, prayer, and community in Karen. We would love to welcome
              you.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-5 rounded-[1.5rem] bg-stone-100 p-5">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                Location
              </div>
              <div className="mt-2 text-2xl font-semibold text-stone-900">
                Karen, Nairobi
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                Contact
              </div>
              <div className="mt-2 text-2xl font-semibold text-stone-900">
                +254 707 996816
              </div>
            </div>
            <Link
              href="/visit"
              className="inline-flex w-fit rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white"
            >
              Plan your visit ↗
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-20 bg-[#b97036] px-6 py-10 text-white md:flex md:items-center md:justify-between md:px-8 md:py-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            The Love of Christ in action
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl">
            Give with <span className="italic text-[#f4d3a7]">purpose.</span>
          </h2>
        </div>
        <div className="mt-5 md:mt-0 md:max-w-xl">
          <p className="text-lg text-white/90">
            Your generosity helps Eternity Gospel Church and Ministries teach the
            Word, strengthen prayer, and touch the world with the Love of Christ.
          </p>
          <Link
            href="/giving"
            className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-900"
          >
            Give or enquire ↗
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
