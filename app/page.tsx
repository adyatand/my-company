"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function CountUp({
  target,
  suffix,
  duration = 3000,
  delay = 0,
}: {
  target: number;
  suffix: string;
  duration?: number;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const hasPlayed = useRef(false);

  useEffect(() => {
    if (hasPlayed.current) return;
    hasPlayed.current = true;

    let frameId = 0;
    const timeoutId = setTimeout(() => {
      const startTime = performance.now();

      function tick(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 5);
        setCount(Math.round(eased * target));
        if (progress < 1) frameId = requestAnimationFrame(tick);
      }

      frameId = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [target, duration, delay]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function IndustryTile({
  label,
  file,
  className = "",
}: {
  label: string;
  file: string;
  className?: string;
}) {
  return (
    <div
      className={`relative min-h-[180px] w-full overflow-hidden rounded-2xl border border-[#e5e7eb] shadow-sm transition-shadow duration-300 hover:shadow-md sm:min-h-[200px] lg:min-h-[220px] ${className}`}
    >
      <Image
        src={`/industries/${encodeURIComponent(file)}`}
        alt={`${label} industry`}
        fill
        className="object-cover transition-transform duration-500 ease-out hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      <div
        className="absolute inset-0 bg-black/45"
        aria-hidden
      />
      <div className="absolute inset-0 flex items-center justify-center px-4 py-4">
        <span className="text-center text-sm font-semibold leading-snug tracking-tight text-white drop-shadow-md md:text-base">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  const steps = [
    {
      number: "01",
      title: "Share Your Role",
      description:
        "Send us the job description and what great looks like to you. Takes 10 minutes.",
      animation: "animate-step-1",
    },
    {
      number: "02",
      title: "We Source and Screen",
      description:
        "Our AI-assisted pipeline finds, vets, and scores candidates against your exact criteria.",
      animation: "animate-step-2",
    },
    {
      number: "03",
      title: "Receive Your Shortlist",
      description:
        "3 fully pre-screened candidates with summaries delivered within 72 hours. You interview, you hire.",
      animation: "animate-step-3",
    },
  ];

  const industryTiles = [
    { label: "Hospitality", file: "Hospitality (1).png" },
    { label: "Sales", file: "Sales (1).png" },
    { label: "Accounting & Finance", file: "Accounting_and_Finance (1).png" },
    { label: "Healthcare", file: "Healthcare (1).png" },
    { label: "Construction", file: "Construction (1).png" },
    {
      label: "Manufacturing & Engineering",
      file: "Manufacturing (1).png",
    },
    { label: "Marketing", file: "Marketing (1).png" },
    { label: "IT", file: "IT (1).png" },
    { label: "Human Resources", file: "Human_Resources (1).png" },
    { label: "Legal", file: "Legal (1).png" },
    { label: "Education", file: "Education (1).jpg" },
  ] as const;

  return (
    <main className="bg-white text-[#1d1d1f]">
      <Header />

      {/* Hero */}
      <section
        className="relative flex min-h-screen flex-col overflow-hidden bg-[#f5f5f7] bg-cover bg-center bg-no-repeat px-6 pt-24 md:px-16 lg:px-24"
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
        <div className="flex flex-1 flex-col items-start justify-center">
          <div className="relative z-10 flex w-full flex-col items-start justify-center text-left">
            <h1 className="font-display max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-[#f5f5f7] md:text-6xl lg:text-[4rem]">
              Matching the <span className="text-[#3B82F6]">right talent</span>{" "}
              with the <span className="text-[#3B82F6]">right team</span>
            </h1>

            <div className="mt-8 h-px w-12 bg-white/45" />

            <p className="mt-8 max-w-3xl text-lg font-medium tracking-wide text-[#f5f5f7] md:text-xl">
              A full-service talent acquisition partner — built to find the
              people your business needs to grow.
            </p>

          </div>

        </div>

        {/* Trust metrics */}
        <div className="relative z-10 grid grid-cols-3 gap-6 pb-14 md:gap-12">
          <div className="flex flex-col items-center gap-4">
            <div className="h-[6px] w-full max-w-[220px] bg-[#55c122]" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold tracking-tight text-[#f5f5f7] md:text-4xl">
                <CountUp target={20} suffix="+" delay={0} duration={4200} />
              </span>
              <span className="text-center text-[11px] font-medium uppercase tracking-wider text-white/80 md:text-sm">
                Years HR Expertise
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="h-[6px] w-full max-w-[220px] bg-[#f5c518]" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold tracking-tight text-[#f5f5f7] md:text-4xl">
                <CountUp target={72} suffix="hr" delay={0} duration={4200} />
              </span>
              <span className="text-center text-[11px] font-medium uppercase tracking-wider text-white/80 md:text-sm">
                Avg. Delivery
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="h-[6px] w-full max-w-[220px] bg-[#00b7c7]" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold tracking-tight text-[#f5f5f7] md:text-4xl">
                <CountUp target={90} suffix="" delay={0} duration={4200} />
              </span>
              <span className="text-center text-[11px] font-medium uppercase tracking-wider text-white/80 md:text-sm">
                Day Performance Guarantee
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why ArriveTalent */}
      <section className="bg-[#f8f8fa] px-6 py-12 md:px-16 lg:px-24">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-start">
            <h3 className="text-3xl font-bold tracking-tight text-[#1d1d1f] md:text-4xl lg:text-5xl">
              Why ArriveTalent
            </h3>
            <p className="mt-4 max-w-xl text-lg font-semibold leading-snug text-[#1d1d1f] md:text-xl">
              A full talent acquisition department, for less than the cost of
              one recruiter.
            </p>
            <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-[#86868b] md:text-lg">
              Most growing companies face the same choice: spend $75,000+ on a
              full-time recruiter, or have leadership waste hours sorting
              resumes instead of running the business. ArriveTalent solves both.
              We handle everything your Talent Acquisition department would handle, and you pay
              nothing until you hire someone who makes your team stronger.
            </p>
            <a
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-none border border-[#1d1d1f] bg-transparent px-8 py-3 text-sm font-semibold tracking-wide text-[#1d1d1f] transition-all duration-300 hover:bg-[#1d1d1f] hover:text-white"
            >
              Find Your Talent
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:pt-20">
            <div className="rounded-none bg-gradient-to-br from-white/75 to-white/45 p-6 backdrop-blur-[1px]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
                A Full TA Team
              </p>
              <h4 className="mt-3 text-base font-bold leading-snug text-[#1d1d1f] md:text-lg">
                A Full TA Team Behind Every Search
              </h4>
              <p className="mt-3 text-sm font-medium leading-relaxed text-[#1d1d1f]/70">
                Job postings, active sourcing, resume reviews, candidate
                screening, interview scheduling: all handled. Everything a full
                internal TA team does, without a single person on your payroll.
                No paid time off. No benefits. Just high quality service, every
                time.
              </p>
            </div>
            <div className="rounded-none bg-gradient-to-br from-white/75 to-white/45 p-6 backdrop-blur-[1px]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
                The Savings
              </p>
              <h4 className="mt-3 text-base font-bold leading-snug text-[#1d1d1f] md:text-lg">
                Save Up to $100,000 a Year
              </h4>
              <p className="mt-3 text-sm font-medium leading-relaxed text-[#1d1d1f]/70">
                A full-time recruiter costs $75,000+ per year before benefits and
                taxes, regardless of performance. With ArriveTalent you pay only
                when you hire. We also put a maximum cap on our monthly fees so
                you never overpay for growth. Even at high hiring volume you
                will pay us less than you would a single recruiter. The money
                you save stays in your business.
              </p>
            </div>
            <div className="rounded-none bg-gradient-to-br from-white/75 to-white/45 p-6 backdrop-blur-[1px]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
                Performance Guarantee
              </p>
              <h4 className="mt-3 text-base font-bold leading-snug text-[#1d1d1f] md:text-lg">
                A Guarantee Most Recruiters Won&apos;t Touch
              </h4>
              <p className="mt-3 text-sm font-medium leading-relaxed text-[#1d1d1f]/70">
                Every placement comes with a 90-day replacement guarantee. If it
                doesn&apos;t work out we find a replacement completely free, no
                questions asked. We offer this because we are that confident in
                who we send you.
              </p>
            </div>
            <div className="rounded-none bg-gradient-to-br from-white/75 to-white/45 p-6 backdrop-blur-[1px]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
                Candidates Who Perform
              </p>
              <h4 className="mt-3 text-base font-bold leading-snug text-[#1d1d1f] md:text-lg">
                Only Candidates Who Make You Stronger
              </h4>
              <p className="mt-3 text-sm font-medium leading-relaxed text-[#1d1d1f]/70">
                Every candidate is fully vetted before they reach your desk:
                skills assessment, cultural fit, thorough interview. You only
                meet the top candidates for your role. No resume floods. No
                wasted interviews. Just the right people for your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section
        id="how-it-works"
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
        <div className="relative z-10 w-full">
          <div className="text-center">
            <h3 className="text-3xl font-bold tracking-tight text-[#f5f5f7] md:text-4xl lg:text-5xl">
              What We Offer
            </h3>
            <p className="mx-auto mt-5 w-fit max-w-full text-base font-medium leading-relaxed text-[#f5f5f7]/90 md:text-lg">
              We integrate directly with your leadership team to handle the
              end-to-end recruitment lifecycle.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-14 lg:gap-5">
            {[
              {
                title: "Strategic Alignment & Calibration",
                body: "We sit down with your leadership to understand your growth goals, culture, and the DNA of your top performers. We don't just look for skills; we look for the people who will drive your business forward.",
              },
              {
                title: "End-to-End Search Management",
                body: "ArriveTalent takes over the heavy lifting. From writing compelling job narratives and active headhunting on premium platforms to initial screenings and technical vetting\u2014we manage every touchpoint. You only see the top 1% of candidates who are ready to hit the ground running.",
              },
              {
                title: "Seamless Coordination with Hiring Managers",
                body: "We act as your internal coordination arm. We schedule interviews, manage candidate communications, and provide detailed scorecards based on your exact criteria. We protect your time by ensuring you only meet with fully vetted, high-intent professionals.",
              },
              {
                title: "Performance-Based Growth",
                body: "You make the final decision. We handle the offer negotiations and closing process. Because we operate on a performance-based model with capped monthly fees, you get the results of a dedicated department with the flexibility of a partner who only wins when you do.",
              },
            ].map(({ title, body }) => (
              <article
                key={title}
                className="group flex flex-col border border-white/15 bg-gradient-to-br from-black/55 to-black/35 p-7 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-md transition-colors duration-300 hover:border-white/25 md:p-8"
              >
                <h4 className="text-lg font-bold leading-snug tracking-tight text-[#f5f5f7] md:text-xl">
                  {title}
                </h4>
                <p className="mt-4 text-sm font-medium leading-relaxed text-[#f5f5f7]/85 md:text-[15px] md:leading-[1.65]">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section
        id="industries"
        className="bg-white px-6 py-14 md:px-16 md:py-20 lg:px-24"
      >
        <h3 className="text-center text-3xl font-bold tracking-tight text-[#0f172a] md:text-4xl lg:text-5xl">
          Industries We Serve
        </h3>

        <div className="mx-auto mt-12 max-w-6xl">
          <div className="grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {industryTiles.slice(0, 8).map(({ label, file }) => (
              <IndustryTile key={label} label={label} file={file} />
            ))}
          </div>
          <div className="mt-3 flex flex-wrap justify-center gap-3 sm:mt-4 sm:gap-4 lg:mt-5 lg:gap-5">
            {industryTiles.slice(8).map(({ label, file }) => (
              <IndustryTile
                key={label}
                label={label}
                file={file}
                className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc((100%-3.75rem)/4)] lg:max-w-none"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="contact"
        className="bg-[#141414] px-6 py-16 text-center md:px-16 md:py-20 lg:px-24"
      >
        <h3 className="text-4xl font-bold leading-tight tracking-tight text-[#e5e5e5] md:text-5xl lg:text-6xl">
          Secure Your Competitive Advantage
        </h3>

        <p className="mt-6 text-xl font-bold tracking-tight text-white/80 md:text-2xl">
          Currently accepting our first 5 founding partner clients.
        </p>

        <div className="mx-auto mt-8 h-px w-16 bg-gradient-to-r from-transparent via-[#333] to-transparent" />

        <p className="mx-auto mt-8 max-w-lg text-sm font-medium leading-relaxed text-[#999]">
          Founding partners receive free first placement, priority service, and
          preferred pricing locked in.
        </p>

        <p className="mt-6 text-lg font-medium text-[#999] md:text-xl">
          Join Tampa Bay&apos;s fastest-growing companies already building better teams.
        </p>

        <a
          href="/contact"
          className="group mt-12 inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-base font-bold text-[#0A0A0A] transition-all duration-300 hover:bg-[#e5e5e5]"
        >
          Claim Your Founding Partner Spot
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        <p className="mt-4 text-xs font-medium text-[#555]">
          Only 3 founding partner spots remaining. Rates increase after launch
        </p>
      </section>

      <Footer />
    </main>
  );
}
