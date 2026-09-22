import { SiteShell } from "../site-shell";

export default function LivestreamPage() {
  return (
    <SiteShell>
      <section className="rounded-[2rem] border border-stone-200 bg-white/80 p-6 shadow-[0_20px_40px_rgba(28,20,16,0.06)] md:p-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-label"><span>01</span><span>Livestream</span></p>
            <h1 className="mt-5 text-4xl text-stone-900 sm:text-5xl lg:text-6xl">
              Worship <span className="italic text-[#b97036]">with us online.</span>
            </h1>
          </div>
          <a href="https://www.youtube.com/@eternitygospelchurchministries" target="_blank" rel="noreferrer" className="rounded-full bg-[#b97036] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a9622d]">
            Join our YouTube ↗
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-stone-200 bg-stone-950 p-2 shadow-xl">
            <div className="aspect-video overflow-hidden rounded-[1.5rem] bg-stone-900">
              <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/50 text-3xl text-white">▶</span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0bd78]">Sunday Service</div>
                  <div className="mt-2 text-3xl font-semibold text-white">8:00 AM – 1:00 PM</div>
                </div>
                <div className="text-sm text-white/70">Worship • Prayer • Teaching</div>
              </div>
            </div>
          </div>

          <aside className="rounded-[2rem] bg-stone-950 p-7 text-white">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0bd78]">Today’s flow</div>
            <div className="mt-8 space-y-6">
              {[
                ["Prayer", "Opening prayer & worship"],
                ["Teaching", "Biblical message & discipleship"],
                ["Response", "Prayer, ministry, and fellowship"],
              ].map(([title, text]) => (
                <div key={title} className="border-b border-white/10 pb-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">{title}</div>
                  <div className="mt-2 text-base font-semibold text-white">{text}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
