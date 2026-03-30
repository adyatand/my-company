import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function StoryPage() {
  return (
    <main className="bg-white text-[#1d1d1f]">
      <Header />

      {/* Hero */}
      <section
        className="relative overflow-hidden bg-[#0f172a] bg-cover bg-center bg-no-repeat px-6 pt-32 pb-12 text-center md:px-16 md:pb-14 lg:px-24"
        style={{ backgroundImage: "url('/images/Hero_Section_BG.png')" }}
      >
        <div className="absolute inset-0 bg-[#0f172a]/55" />
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(115deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 35%), repeating-linear-gradient(90deg, rgba(229,231,235,0.12) 0px, rgba(229,231,235,0.12) 1px, transparent 1px, transparent 140px), repeating-linear-gradient(0deg, rgba(229,231,235,0.08) 0px, rgba(229,231,235,0.08) 1px, transparent 1px, transparent 120px)",
          }}
        />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold tracking-tight text-[#f5f5f7] md:text-5xl lg:text-6xl">
            Our Story
          </h1>
          <p className="mx-auto mt-4 text-base font-semibold text-[#f5f5f7] md:text-lg">
            Building Teams For Scaling Businesses.
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-relaxed text-[#f5f5f7]/90 md:text-lg">
            ArriveTalent was founded because the traditional recruiting model is
            broken. Our goal is to bring Fortune 500-level HR rigor to
            fast-growing businesses. Specifically designed for the next stage of
            your growth.
          </p>

          {/* Company logo strip — light panel so marks stay legible */}
          <div className="mx-auto mt-12 max-w-6xl rounded-2xl border border-white/25 bg-white/95 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-sm md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0f172a]">
              Experience from companies including
            </p>
            <div className="relative mt-6 overflow-hidden">
              <div
                className="flex w-max items-center gap-20 md:gap-28"
                style={{ animation: "marquee 25s linear infinite" }}
              >
                {[...Array(2)].map((_, setIndex) =>
                  [
                    { src: "/logos/ruptok_fintech_logo.png", alt: "Ruptok Fintech" },
                    { src: "/logos/hero_logo.png", alt: "Hero" },
                    { src: "/logos/bank-of-america-logo.png", alt: "Bank of America" },
                    { src: "/logos/Delta-Air-Lines-Logo.png", alt: "Delta Air Lines" },
                    { src: "/logos/sentiss_logo.png", alt: "Sentiss" },
                    { src: "/logos/walter_bushnell_logo.png", alt: "Walter Bushnell" },
                    { src: "/logos/HiLabs_logo.png", alt: "HiLabs" },
                    { src: "/logos/legajoist-logo.png", alt: "Legajoist" },
                    { src: "/logos/Shalimar_Paints_New_Logo.png", alt: "Shalimar Paints" },
                  ].map((logo) => (
                    <div
                      key={`${setIndex}-${logo.alt}`}
                      className="flex h-14 shrink-0 items-center"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={160}
                        height={56}
                        loading="eager"
                        priority
                        unoptimized
                        className="h-14 w-40 object-contain"
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f172a]">
              And more...
            </p>
          </div>
        </div>
      </section>

      {/* Founder bio */}
      <section className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
            <div className="flex w-full shrink-0 flex-col items-center text-center sm:items-start sm:text-left lg:w-72">
              <div className="h-56 w-56 overflow-hidden rounded-2xl sm:h-64 sm:w-64">
                <Image
                  src="/images/Neelam.jpeg"
                  alt="Neelam Sanjiv"
                  width={256}
                  height={256}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-5 text-lg font-bold tracking-tight text-[#1d1d1f]">
                Neelam Sanjiv{" "}
                <span className="font-semibold text-[#86868b]">
                  | Founder &amp; CEO
                </span>
              </p>
              <p className="mt-2 text-sm font-semibold leading-snug text-[#1d1d1f] md:text-base">
                The Architect of High-Performance Teams
              </p>
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-5 text-left">
              <p className="text-sm font-medium leading-relaxed text-[#86868b] md:text-base md:leading-[1.65]">
                Neelam brings over two decades of leadership experience across
                Strategic HR, People Operations, and Marketing Communications.
                Having served as Vice President of HR at Ruptok Fintech and led
                initiatives for global giants like Hero Group and Sentiss
                Pharma, she possesses a rare cross-functional perspective that
                most recruiters simply don&apos;t have.
              </p>
              <p className="text-sm font-medium leading-relaxed text-[#86868b] md:text-base md:leading-[1.65]">
                Neelam founded ArriveTalent to bridge the gap between
                &quot;Hiring&quot; and &quot;Scaling.&quot; Her methodology goes
                beyond matching resumes to job descriptions; it&apos;s rooted in
                Organizational Fit and Long-Term Performance Potential. Under
                her leadership, ArriveTalent has become a partner to companies
                that view talent as their most valuable financial asset.
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/neelam-sanjiv-857980a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d2d2d7] bg-white px-5 py-2.5 text-xs font-semibold text-[#1d1d1f] transition-all duration-300 hover:border-[#3B82F6] hover:text-[#3B82F6]"
                >
                  <svg
                    className="h-3.5 w-3.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Connect on LinkedIn
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d2d2d7] bg-white px-5 py-2.5 text-xs font-semibold text-[#1d1d1f] transition-all duration-300 hover:border-[#3B82F6] hover:text-[#3B82F6]"
                >
                  <svg
                    className="h-3.5 w-3.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Send a Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section
        className="relative overflow-hidden bg-[#0f172a] bg-cover bg-center bg-no-repeat px-6 py-16 md:px-16 md:py-20 lg:px-24"
        style={{ backgroundImage: "url('/images/WWO_Section_BG.png')" }}
      >
        <div className="absolute inset-0 bg-[#0f172a]/55" />
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(115deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 35%), repeating-linear-gradient(90deg, rgba(229,231,235,0.12) 0px, rgba(229,231,235,0.12) 1px, transparent 1px, transparent 140px), repeating-linear-gradient(0deg, rgba(229,231,235,0.08) 0px, rgba(229,231,235,0.08) 1px, transparent 1px, transparent 120px)",
          }}
        />
        <div className="relative z-10">
          <h2 className="text-center text-3xl font-bold tracking-tight text-[#f5f5f7] md:text-4xl">
            Our Vision
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-base font-medium leading-relaxed text-[#f5f5f7]/90 md:text-lg">
            Our goal is to give scaling businesses their time back. We focus on
            finding the right people, so you can focus on the mission.
          </p>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
            {[
              {
                title: "I. Precision Engineering Over Volume",
                body: "Most agencies spray and pray resumes. We do the opposite. We apply a rigorous, cross-functional vetting process, rooted in 20+ years of HR leadership, to ensure that when a candidate reaches your desk, they aren't just a match on paper; they are a match for your growth plan.",
              },
              {
                title: "II. Frictionless Scaling",
                body: "Hiring is often the biggest bottleneck in a growing company. We act as your Talent Acquisition Department, handling the heavy lifting of sourcing and vetting so your leadership team can stay focused on revenue and strategy, not sifting through inboxes.",
              },
              {
                title: "III. Strategic Alignment.",
                body: "We don't just fill roles; we solve problems. Whether it's an executive search or building a technical team, we look at the business case for the hire to ensure every placement acts as a multiplier for your company's value.",
              },
              {
                title: "IV. Cost-Effective Growth Architecture.",
                body: "Traditional recruiting fees often penalize fast-growing companies. We've redesigned our model to prioritize long-term partnership over short-term transaction. Our fee structure is built with a built-in ceiling, ensuring you never overpay for high-volume growth and can scale your headcount without compromising your budget.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="flex flex-col border border-white/15 bg-gradient-to-br from-black/55 to-black/35 p-7 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-md transition-colors duration-300 hover:border-white/25 md:p-8"
              >
                <h3 className="text-lg font-bold leading-snug tracking-tight text-[#f5f5f7] md:text-xl">
                  {title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-[#f5f5f7]/85 md:text-[15px] md:leading-[1.65]">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5f5f7] px-6 py-16 text-center md:px-16 md:py-20 lg:px-24">
        <h2 className="mx-auto w-fit max-w-full text-xl font-bold leading-tight tracking-tight text-[#1d1d1f] sm:text-2xl md:whitespace-nowrap md:text-[clamp(1.25rem,2.2vw,2.25rem)] lg:text-4xl">
          While You Focus on the Mission, We&apos;ll Handle the People.
        </h2>
        <p className="mx-auto mt-5 w-fit max-w-full text-sm font-medium leading-relaxed text-[#86868b] sm:text-base md:whitespace-nowrap md:text-[clamp(0.875rem,1.35vw,1.125rem)] lg:text-lg">
          Tell us about your current hiring challenges, and we&apos;ll get back to you with a plan.
        </p>
        <Link
          href="/contact"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[#1d1d1f] px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#333]"
        >
          Get in Touch
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
