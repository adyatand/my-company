import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FlowOrbs } from "../components/FlowOrbs";
import VisionAccordionCards from "./VisionAccordionCards";

const storyDescription =
  "Learn how ArriveTalent combines deep HR expertise with AI-powered hiring to build teams for scaling businesses.";

export const metadata: Metadata = {
  title: "Our Story",
  description: storyDescription,
  openGraph: {
    title: "ArriveTalent | Our Story",
    description: storyDescription,
    url: "/story",
  },
  twitter: {
    title: "ArriveTalent | Our Story",
    description: storyDescription,
  },
  alternates: {
    canonical: "/story",
  },
};

const COMPANY_LOGOS = [
  { src: "/logos/ruptok_fintech_logo.png", alt: "Ruptok Fintech" },
  { src: "/logos/hero_logo.png", alt: "Hero" },
  { src: "/logos/bank-of-america-logo.png", alt: "Bank of America" },
  { src: "/logos/Delta-Air-Lines-Logo.png", alt: "Delta Air Lines" },
  { src: "/logos/sentiss_logo.png", alt: "Sentiss" },
  { src: "/logos/walter_bushnell_logo.png", alt: "Walter Bushnell" },
  { src: "/logos/HiLabs_logo.png", alt: "HiLabs" },
  { src: "/logos/legajoist-logo.png", alt: "Legajoist" },
  { src: "/logos/Shalimar_Paints_New_Logo.png", alt: "Shalimar Paints" },
] as const;

export default function StoryPage() {
  return (
    <main className="overflow-x-hidden bg-white text-[#1d1d1f]">
      <Header />

      {/* Hero — background image only behind title + subhead */}
      <section
        className="relative z-10 overflow-hidden bg-[#0f172a] bg-cover bg-center bg-no-repeat px-6 pt-32 pb-16 text-left md:px-16 md:pb-20 md:pt-32 lg:px-24"
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
        <div className="relative z-10 flex w-full flex-col items-start">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-[#f5f5f7] md:text-5xl lg:text-6xl">
            Our Story
          </h1>
          <p className="mt-4 max-w-3xl text-base font-semibold text-[#f5f5f7] md:text-lg">
            Building Teams For Scaling Businesses.
          </p>
        </div>
      </section>

      {/* One light band: logos → The Next Level of Hiring → Our Mission */}
      <section className="relative overflow-hidden bg-[#f8f8fa] px-6 pb-16 pt-12 md:px-16 md:pb-20 md:pt-14 lg:px-24 lg:pt-16">
        <FlowOrbs variant="light" />
        <div className="relative z-10">
          <div className="mx-auto w-full max-w-6xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#86868b]">
              bringing expertise from companies including
            </p>
            <div className="relative mt-6 overflow-hidden">
              <div
                className="flex w-max items-center gap-20 md:gap-28"
                style={{ animation: "marquee 25s linear infinite" }}
              >
                {[...Array(2)].map((_, setIndex) =>
                  COMPANY_LOGOS.map((logo) => (
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
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
              and more...
            </p>
          </div>

          <div className="relative z-10 mx-auto mt-16 w-full max-w-6xl md:mt-20">
            <div className="mx-auto flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-center lg:gap-16">
              <div className="mx-auto w-full max-w-2xl text-left">
                <h2 className="font-sans text-3xl font-bold tracking-tight text-[#1d1d1f] md:text-4xl lg:text-5xl">
                  The Next Level of Hiring
                </h2>
                <p className="mt-6 text-base font-medium leading-relaxed text-[#86868b] md:text-lg">
                  We built ArriveTalent to give growing businesses access to the
                  kind of talent acquisition that was previously only available to
                  the largest companies in the world. We bridge the gap between
                  deep HR expertise and modern AI-powered technology to serve as a
                  full-service hiring partner for businesses at every stage of
                  their growth. This is where human judgment meets intelligent
                  tooling, that is where ArriveTalent operates.
                </p>
              </div>
              <div className="w-full max-w-2xl lg:max-w-xl lg:shrink-0">
                <VisionAccordionCards />
              </div>
            </div>
          </div>

        <h2 className="relative z-10 mt-20 w-full text-center font-sans text-3xl font-bold tracking-tight text-[#1d1d1f] md:mt-24 md:text-4xl lg:text-5xl">
          Our Mission
        </h2>

        <div className="relative z-10 mx-auto mt-10 w-full max-w-6xl md:mt-12">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="flex w-full flex-col items-start text-left">
              <p className="text-base font-medium leading-relaxed text-[#86868b] md:text-lg">
                We build the talent engineering infrastructure that gives your
                company a permanent competitive advantage in hiring. While scaling
                businesses are stuck recruiting the traditional way, we help you
                succeed with the right people, found faster, vetted smarter, and
                placed with the precision your growth demands.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-none border border-[#1d1d1f] bg-transparent px-8 py-3 text-sm font-semibold tracking-wide text-[#1d1d1f] transition-colors duration-300 hover:bg-[#1d1d1f] hover:text-white"
              >
                Learn More
              </Link>
            </div>
            <div className="relative aspect-[4/3] w-full min-h-[200px] overflow-hidden rounded-2xl border border-[#e5e7eb] bg-[#e8e8ed] lg:min-h-0">
              <Image
                src="/images/mission.png"
                alt="ArriveTalent — mission"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5f5f7] px-6 py-16 text-center md:px-16 md:py-20 lg:px-24">
        <div className="w-full overflow-x-auto overflow-y-hidden pb-1 text-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <h2 className="inline-block whitespace-nowrap px-2 text-center text-[clamp(0.7rem,2.35vw,2.25rem)] font-bold leading-tight tracking-tight text-[#1d1d1f] sm:px-4 sm:text-[clamp(0.8rem,2.5vw,2.5rem)] lg:text-4xl">
            Your Next Stage of Growth Starts With the Right People.
          </h2>
        </div>
        <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-relaxed text-[#86868b] sm:text-base md:text-lg">
          Tell us where your business is headed. We will build the team that
          gets you there.
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-flex origin-center rounded-none bg-[#1d1d1f] px-8 py-3 text-sm font-semibold text-white transition duration-300 ease-out hover:scale-105 hover:bg-[#333]"
        >
          Start Building
        </Link>
      </section>

      <Footer />
    </main>
  );
}
