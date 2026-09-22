import Link from "next/link";
import { SiteShell } from "../site-shell";

export default function LoginPage() {
  return (
    <SiteShell>
      <section className="rounded-[2rem] border border-stone-200 bg-white/70 p-6 shadow-[0_20px_40px_rgba(28,20,16,0.06)] md:p-8">
        <p className="section-label"><span>01</span><span>Member login</span></p>
        <h1 className="mt-4 text-4xl text-stone-900 sm:text-5xl">Welcome back.</h1>
        <p className="mt-5 max-w-2xl text-lg text-stone-700">
          Access your church account, resources, and updates through the member portal.
        </p>
      </section>

      <section className="mt-16 soft-card rounded-[1.5rem] p-6 md:p-8">
        <form className="mx-auto max-w-lg space-y-4">
          <input aria-label="Email address" type="email" placeholder="Email address" className="w-full rounded-full border border-stone-300 bg-white px-4 py-3 outline-none" />
          <input aria-label="Password" type="password" placeholder="Password" className="w-full rounded-full border border-stone-300 bg-white px-4 py-3 outline-none" />
          <button type="button" className="inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white">
            Login
          </button>
        </form>
      </section>

      <div className="mt-8 text-center">
        <Link href="/" className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white">
          Return home ↗
        </Link>
      </div>
    </SiteShell>
  );
}
