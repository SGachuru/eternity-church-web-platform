import Link from "next/link";
import { SiteShell } from "../site-shell";

export default function TermsPage() {
  return (
    <SiteShell>
      <section className="rounded-[2rem] border border-stone-200 bg-white/70 p-6 shadow-[0_20px_40px_rgba(28,20,16,0.06)] md:p-8">
        <p className="section-label"><span>01</span><span>Terms</span></p>
        <h1 className="mt-4 text-4xl text-stone-900 sm:text-5xl">Church website <span className="italic text-[#b97036]">terms.</span></h1>
        <p className="mt-5 max-w-2xl text-lg text-stone-700">
          By engaging with this website, you agree to use it respectfully and in line with the mission and values of the church.
        </p>
      </section>

      <div className="mt-16 soft-card rounded-[1.5rem] p-6 text-stone-700">
        <p>All content is provided for ministry and informational purposes. We ask that visitors use the site responsibly and with respect for the church community and others.</p>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white">
          Back home ↗
        </Link>
      </div>
    </SiteShell>
  );
}
