import Link from "next/link";
import { SiteShell } from "../site-shell";

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="rounded-[2rem] border border-stone-200 bg-white/70 p-6 shadow-[0_20px_40px_rgba(28,20,16,0.06)] md:p-8">
        <p className="section-label"><span>01</span><span>Contact</span></p>
        <h1 className="mt-4 text-4xl text-stone-900 sm:text-5xl">We would love to <span className="italic text-[#b97036]">hear from you.</span></h1>
        <p className="mt-5 max-w-2xl text-lg text-stone-700">
          Whether you are visiting, seeking prayer, or wanting to connect with the church, we are glad to respond.
        </p>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="soft-card rounded-[1.5rem] p-6">
          <h2 className="text-3xl text-stone-900">Reach us</h2>
          <div className="mt-6 space-y-5 text-stone-700">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b97036]">Phone</div>
              <p className="mt-2 text-xl text-stone-900">+254 707 996816</p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b97036]">Location</div>
              <p className="mt-2 text-xl text-stone-900">Karen, Nairobi</p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b97036]">Email</div>
              <p className="mt-2 text-xl text-stone-900">hello@eternitychurch.org</p>
            </div>
          </div>
        </div>

        <div className="soft-card rounded-[1.5rem] p-6">
          <h2 className="text-3xl text-stone-900">Send a message</h2>
          <form className="mt-6 space-y-4">
            <input className="w-full rounded-full border border-stone-300 bg-white px-4 py-3 outline-none" placeholder="Your name" />
            <input className="w-full rounded-full border border-stone-300 bg-white px-4 py-3 outline-none" placeholder="Email address" />
            <textarea className="min-h-32 w-full rounded-[1.25rem] border border-stone-300 bg-white px-4 py-3 outline-none" placeholder="Your message" />
            <button type="button" className="inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white">
              Send message
            </button>
          </form>
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
