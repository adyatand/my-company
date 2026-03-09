import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export default function TeamPage() {
  return (
    <main className="bg-white text-[#1d1d1f]">
      <Header />

      {/* Hero */}
      <section className="bg-[#f5f5f7] px-6 pt-32 pb-0 text-center md:px-16 lg:px-24">
        <h1 className="text-4xl font-bold tracking-tight text-[#1d1d1f] md:text-5xl lg:text-6xl">
          The People Behind TalentFlux
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base font-medium text-[#86868b]">
          Two founders. Twenty years of HR expertise. One obsession — finding
          you the right person, fast.
        </p>

        {/* Company logo strip */}
        <div className="mt-12 border-t border-[#d2d2d7] pt-8 pb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d1d1f]">
            Experience from companies including
          </p>
          <div className="relative mt-6 overflow-hidden">
            <div
              className="flex w-max items-center gap-20 md:gap-28"
              style={{ animation: "marquee 25s linear infinite" }}
            >
              {[...Array(2)].map((_, setIndex) =>
                [
                  { src: "/logos/bank-of-america-logo.png", alt: "Bank of America" },
                  { src: "/logos/Delta-Air-Lines-Logo.png", alt: "Delta Air Lines" },
                  { src: "/logos/ruptok_fintech_logo.png", alt: "Ruptok Fintech" },
                  { src: "/logos/Shalimar_Paints_New_Logo.png", alt: "Shalimar Paints" },
                  { src: "/logos/Marion-Biotech-logo.png", alt: "Marion Biotech" },
                  { src: "/logos/HiLabs_logo.png", alt: "HiLabs" },
                  { src: "/logos/legajoist-logo.png", alt: "Legajoist" },
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
                      className="h-14 w-auto object-contain"
                    />
                  </div>
                ))
              )}
            </div>
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#1d1d1f]">
            And more...
          </p>
        </div>
      </section>

      {/* Team members */}
      <section className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto flex max-w-5xl flex-col gap-16">
          {/* Founder — image left, description right */}
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
            <div className="flex shrink-0 flex-col items-center">
              <div className="h-48 w-48 overflow-hidden rounded-2xl">
                <Image
                  src="/images/neelam.jpg"
                  alt="Neelam Sanjiv"
                  width={192}
                  height={192}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#3B82F6]">
                Founder &amp; CEO
              </p>
              <h3 className="mt-1 text-xl font-bold tracking-tight text-[#1d1d1f]">
                Neelam Sanjiv
              </h3>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex flex-col gap-4 md:mt-4">
                <p className="text-sm font-medium leading-relaxed text-[#86868b]">
                  Neelam brings over two decades of HR leadership experience
                  spanning recruitment, organizational development, and strategic
                  people operations across some of India&apos;s most dynamic
                  companies.
                </p>
                <p className="text-sm font-medium leading-relaxed text-[#86868b]">
                  Her career includes serving as Vice President of HR at Ruptok
                  Fintech, where she led talent acquisition and organizational
                  growth initiatives, and over five years as an HR Consultant at
                  Legajoist Solutions, where she built and scaled hiring processes
                  for growing businesses. Earlier in her career she held senior
                  marketing and communications leadership roles at Marion Biotech
                  and Shalimar Paints, giving her a rare cross-functional
                  perspective that most HR professionals simply don&apos;t have.
                </p>
                <p className="text-sm font-medium leading-relaxed text-[#86868b]">
                  Neelam&apos;s approach to recruitment goes beyond matching
                  resumes to job descriptions. She believes the right hire is
                  defined by cultural alignment, long-term performance potential,
                  and organizational fit — a philosophy that forms the foundation
                  of everything TalentFlux does.
                </p>
                <p className="text-sm font-medium leading-relaxed text-[#86868b]">
                  Today she channels that expertise into building a recruiting
                  agency that brings Fortune-500-level HR rigor to fast-growing
                  digital marketing agencies and SaaS companies — at a fraction of
                  the cost and a fraction of the time.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/neelam-sanjiv-857980a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d2d2d7] bg-white px-5 py-2 text-xs font-semibold text-[#1d1d1f] transition-all duration-300 hover:border-[#3B82F6] hover:text-[#3B82F6]"
                >
                  <svg
                    className="h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Connect on LinkedIn
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d2d2d7] bg-white px-5 py-2 text-xs font-semibold text-[#1d1d1f] transition-all duration-300 hover:border-[#3B82F6] hover:text-[#3B82F6]"
                >
                  <svg
                    className="h-3.5 w-3.5"
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

          {/* Co-Founder — description left, image right */}
          <div className="flex flex-col items-center gap-8 md:flex-row-reverse md:items-start md:gap-12">
            <div className="flex shrink-0 flex-col items-center">
              <div className="h-48 w-48 overflow-hidden rounded-2xl">
                <Image
                  src="/images/adyatan.jpg"
                  alt="Adyatan Dagar"
                  width={192}
                  height={192}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-violet-600">
                Co-Founder &amp; COO
              </p>
              <h3 className="mt-1 text-xl font-bold tracking-tight text-[#1d1d1f]">
                Adyatan Dagar
              </h3>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex flex-col gap-4 md:mt-4">
                <p className="text-sm font-medium leading-relaxed text-[#86868b]">
                  Adyatan is the Co-Founder and COO of TalentFlux, leading all US
                  operations, client acquisition, and the technology
                  infrastructure that powers the agency&apos;s AI-assisted
                  recruiting process. A Computer Science graduate from the
                  University of South Florida, he brings a rare combination of
                  technical depth and business instinct that most recruiting
                  agencies simply don&apos;t have access to.
                </p>
                <p className="text-sm font-medium leading-relaxed text-[#86868b]">
                  Before TalentFlux, Adyatan honed that technical foundation
                  across software engineering internships at Bank of America,
                  Delta Air Lines, and HiLabs — building production-level systems
                  at companies that demand precision, speed, and accountability.
                  Where most recruiting agencies still rely on manual pipelines
                  and gut instinct, TalentFlux runs on systems built and
                  maintained by someone who has shipped real code at Fortune 500
                  companies.
                </p>
                <p className="text-sm font-medium leading-relaxed text-[#86868b]">
                  Born in India and educated in the United States, Adyatan bridges
                  both worlds — understanding the ambition of growing companies
                  expanding into the US market, and the expectations of American
                  talent they need to attract.
                </p>
                <p className="text-sm font-medium leading-relaxed text-[#86868b]">
                  His belief is simple: recruiting is a data problem as much as a
                  people problem. TalentFlux exists to solve both.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/adyatan-dagar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d2d2d7] bg-white px-5 py-2 text-xs font-semibold text-[#1d1d1f] transition-all duration-300 hover:border-violet-600 hover:text-violet-600"
                >
                  <svg
                    className="h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Connect on LinkedIn
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d2d2d7] bg-white px-5 py-2 text-xs font-semibold text-[#1d1d1f] transition-all duration-300 hover:border-violet-600 hover:text-violet-600"
                >
                  <svg
                    className="h-3.5 w-3.5"
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

      {/* What We Stand For */}
      <section className="bg-[#1d1d1f] px-6 py-16 md:px-16 lg:px-24">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#e5e5e5] md:text-4xl">
          What We Stand For
        </h2>
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[#333] bg-[#2a2a2a] p-6 transition-colors duration-300 hover:border-[#444]">
            <span className="text-3xl font-bold text-white/25">01</span>
            <h4 className="mt-3 text-lg font-bold text-white">
              Niche Over Everything
            </h4>
            <p className="mt-2 text-sm font-medium leading-relaxed text-[#999]">
              We only work with digital marketing agencies and SaaS companies.
              That focus means deeper candidate pipelines, faster placements,
              and better results than any generalist agency can offer.
            </p>
          </div>
          <div className="rounded-2xl bg-[#3B82F6] p-6">
            <span className="text-3xl font-bold text-white/30">02</span>
            <h4 className="mt-3 text-lg font-bold text-white">
              Speed Without Shortcuts
            </h4>
            <p className="mt-2 text-sm font-medium leading-relaxed text-white/70">
              Fast doesn&apos;t mean sloppy. Every candidate is thoroughly
              vetted before they reach your desk.
            </p>
          </div>
          <div className="rounded-2xl border border-[#333] bg-[#2a2a2a] p-6 transition-colors duration-300 hover:border-[#444]">
            <span className="text-3xl font-bold text-white/25">03</span>
            <h4 className="mt-3 text-lg font-bold text-white">
              Skin in the Game
            </h4>
            <p className="mt-2 text-sm font-medium leading-relaxed text-[#999]">
              We only get paid when you hire. Our incentives are perfectly
              aligned with yours.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5f5f7] px-6 py-16 text-center md:px-16 lg:px-24">
        <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1f] md:text-4xl">
          Your next hire is just one message away
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base font-medium text-[#86868b]">
          Tell us about your open role and we&apos;ll fill your first position —
          completely free.
        </p>
        <Link
          href="/contact"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#1d1d1f] px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#333]"
        >
          Claim Your Free Hire
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] bg-[#141414] px-6 md:px-16 lg:px-24">
        <div className="flex flex-col gap-2 py-6">
          <span className="text-lg font-bold tracking-tight text-white">
            TalentFlux
          </span>
          <p className="text-sm font-medium text-[#555]">
            Performance recruiting for agencies and SaaS companies.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#555] transition-colors duration-300 hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:contact@talentflux.com"
              className="text-sm font-medium text-[#555] transition-colors duration-300 hover:text-white"
            >
              contact@talentflux.com
            </a>
          </div>
        </div>
        <div className="border-t border-[#1a1a1a] py-4">
          <p className="text-center text-xs font-medium text-[#333]">
            &copy; 2025 TalentFlux. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
