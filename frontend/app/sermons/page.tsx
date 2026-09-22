import Link from "next/link";
import { SiteShell } from "../site-shell";

const youtubeChannelUrl = "https://www.youtube.com/@eternitygospelchurchministries";

const sermons = [
  { title: "Hope is a Practice", series: "Living in Grace", length: "28 min", href: youtubeChannelUrl },
  { title: "When God Speaks", series: "The Voice of God", length: "33 min", href: youtubeChannelUrl },
  { title: "Rooted in Prayer", series: "Power in the Spirit", length: "26 min", href: youtubeChannelUrl },
  { title: "The Courage to Keep Going", series: "Faith in Action", length: "31 min", href: youtubeChannelUrl },
];

export default function SermonsPage() {
  return (
    <SiteShell>
      <section className="rounded-[2rem] border border-stone-200 bg-white/70 p-6 shadow-[0_20px_40px_rgba(28,20,16,0.06)] md:p-8">
        <p className="section-label"><span>01</span><span>Sermons</span></p>
        <h1 className="mt-4 text-4xl text-stone-900 sm:text-5xl">Encouragement for <span className="italic text-[#b97036]">every season.</span></h1>
        <p className="mt-5 max-w-2xl text-lg text-stone-700">Watch recent teaching, worship moments, and messages from our YouTube channel as we grow in faith and deepen our understanding of God&apos;s Word.</p>
      </section>

      <section className="mt-10 overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-950 shadow-[0_25px_40px_rgba(28,20,16,0.08)]">
        <div className="aspect-video w-full bg-stone-900">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed?listType=user_uploads&list=eternitygospelchurchministries"
            title="Eternity Gospel Church sermons"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      <section className="mt-16 grid gap-5 md:grid-cols-2">
        {sermons.map((sermon) => (
          <a
            key={sermon.title}
            href={sermon.href}
            target="_blank"
            rel="noreferrer"
            className="soft-card block rounded-[1.5rem] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_20px_30px_rgba(28,20,16,0.08)]"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b97036]">{sermon.series}</div>
            <h3 className="mt-4 text-3xl text-stone-900">{sermon.title}</h3>
            <div className="mt-4 flex items-center justify-between text-sm text-stone-600">
              <span>{sermon.length}</span>
              <span>Watch on YouTube</span>
            </div>
          </a>
        ))}
      </section>

      <div className="mt-16 text-center">
        <Link href="/contact" className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white">
          Join a Sunday service
        </Link>
      </div>
    </SiteShell>
  );
}
