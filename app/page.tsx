"use client";

import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function TypewriterText({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [displayed, setDisplayed] = useState("");
  const hasPlayed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed.current) {
          hasPlayed.current = true;
          let i = 0;
          const interval = setInterval(() => {
            i++;
            setDisplayed(text.slice(0, i));
            if (i >= text.length) clearInterval(interval);
          }, 65);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [text]);

  return (
    <h3
      ref={ref}
      className="mt-14 text-center text-lg font-bold leading-tight tracking-tight text-[#e5e5e5] md:text-xl lg:text-2xl"
    >
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-[#e5e5e5] align-middle animate-pulse ml-0.5" />
      )}
    </h3>
  );
}

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
  const ref = useRef<HTMLSpanElement>(null);
  const hasPlayed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed.current) {
          hasPlayed.current = true;

          const timeout = setTimeout(() => {
            const startTime = performance.now();

            function tick(now: number) {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 5);
              setCount(Math.round(eased * target));
              if (progress < 1) requestAnimationFrame(tick);
            }

            requestAnimationFrame(tick);
          }, delay);

          return () => clearTimeout(timeout);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, delay]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
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

  return (
    <main className="bg-white text-[#1d1d1f]">
      <Header />

      {/* Hero */}
      <section className="flex min-h-screen flex-col bg-[#f5f5f7] px-6 pt-24 md:px-16 lg:px-24">
        <div className="flex flex-1 flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left — copy */}
          <div className="flex flex-1 flex-col items-start justify-center">
            <h1 className="max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-[#1d1d1f] md:text-5xl lg:text-[3.5rem]">
              <span className="text-[#3B82F6]">Pre-screened</span> qualified
              candidates
              <br />
              delivered to you in{" "}
              <span className="text-[#3B82F6]">72&nbsp;hours</span>.
            </h1>

            <div className="mt-8 h-px w-12 bg-[#d2d2d7]" />

            <p className="mt-8 text-base font-medium tracking-wide text-[#86868b]">
              Built for Tampa Bay&apos;s fastest-growing digital marketing
              agencies and SaaS teams.
            </p>

            <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1d1d1f] px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#333]"
              >
                Claim Your First Hire Free
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <div className="flex items-center gap-2.5 rounded-full border border-[#d2d2d7] bg-white px-8 py-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm font-medium text-[#86868b]">
                  Now accepting new clients
                </span>
              </div>
            </div>
          </div>

          {/* Right — floating candidate cards */}
          <div className="relative hidden h-[520px] w-full max-w-[340px] shrink-0 md:block lg:max-w-[380px]">
            {/* Card 1 */}
            <div className="absolute top-0 right-4 left-0 animate-[fadeSlideUp_0.8s_ease-out_0.2s_both] rounded-2xl border border-[#d2d2d7] bg-white p-5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3B82F6]/10 text-sm font-bold text-[#3B82F6]">
                  SR
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1d1d1f]">Sarah R.</p>
                  <p className="text-xs font-medium text-[#86868b]">
                    Senior Media Buyer
                  </p>
                </div>
                <span className="ml-auto rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600">
                  97% match
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className="rounded-full bg-[#f5f5f7] px-2.5 py-1 text-[11px] font-medium text-[#86868b]">
                  Meta Ads
                </span>
                <span className="rounded-full bg-[#f5f5f7] px-2.5 py-1 text-[11px] font-medium text-[#86868b]">
                  Google Ads
                </span>
                <span className="rounded-full bg-[#f5f5f7] px-2.5 py-1 text-[11px] font-medium text-[#86868b]">
                  $2M+ managed
                </span>
              </div>
              <div className="mt-4 flex items-center gap-1.5">
                <div className="h-1.5 flex-1 rounded-full bg-[#f5f5f7]">
                  <div className="h-1.5 w-[97%] rounded-full bg-[#3B82F6]" />
                </div>
                <span className="text-[10px] font-semibold text-[#3B82F6]">
                  97%
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="absolute top-[175px] right-0 left-6 animate-[fadeSlideUp_0.8s_ease-out_0.5s_both] rounded-2xl border border-[#d2d2d7] bg-white p-5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/10 text-sm font-bold text-violet-600">
                  JM
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1d1d1f]">James M.</p>
                  <p className="text-xs font-medium text-[#86868b]">
                    Account Executive
                  </p>
                </div>
                <span className="ml-auto rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600">
                  94% match
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className="rounded-full bg-[#f5f5f7] px-2.5 py-1 text-[11px] font-medium text-[#86868b]">
                  B2B SaaS
                </span>
                <span className="rounded-full bg-[#f5f5f7] px-2.5 py-1 text-[11px] font-medium text-[#86868b]">
                  $1.2M ARR closed
                </span>
                <span className="rounded-full bg-[#f5f5f7] px-2.5 py-1 text-[11px] font-medium text-[#86868b]">
                  HubSpot
                </span>
              </div>
              <div className="mt-4 flex items-center gap-1.5">
                <div className="h-1.5 flex-1 rounded-full bg-[#f5f5f7]">
                  <div className="h-1.5 w-[94%] rounded-full bg-violet-500" />
                </div>
                <span className="text-[10px] font-semibold text-violet-600">
                  94%
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="absolute top-[350px] right-3 left-2 animate-[fadeSlideUp_0.8s_ease-out_0.8s_both] rounded-2xl border border-[#d2d2d7] bg-white p-5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 text-sm font-bold text-amber-600">
                  KP
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1d1d1f]">Karen P.</p>
                  <p className="text-xs font-medium text-[#86868b]">
                    SEO Specialist
                  </p>
                </div>
                <span className="ml-auto rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600">
                  91% match
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className="rounded-full bg-[#f5f5f7] px-2.5 py-1 text-[11px] font-medium text-[#86868b]">
                  Technical SEO
                </span>
                <span className="rounded-full bg-[#f5f5f7] px-2.5 py-1 text-[11px] font-medium text-[#86868b]">
                  Ahrefs
                </span>
                <span className="rounded-full bg-[#f5f5f7] px-2.5 py-1 text-[11px] font-medium text-[#86868b]">
                  5 yrs exp
                </span>
              </div>
              <div className="mt-4 flex items-center gap-1.5">
                <div className="h-1.5 flex-1 rounded-full bg-[#f5f5f7]">
                  <div className="h-1.5 w-[91%] rounded-full bg-amber-500" />
                </div>
                <span className="text-[10px] font-semibold text-amber-600">
                  91%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust metrics */}
        <div className="grid grid-cols-3 gap-4 pb-14 md:gap-6">
          <div className="flex flex-col items-center gap-2 overflow-hidden rounded-xl border border-[#d2d2d7] bg-white">
            <div className="h-[2px] w-full bg-gradient-to-r from-[#3B82F6] to-[#3B82F6]/40" />
            <div className="flex flex-col items-center gap-1 py-5">
              <span className="text-2xl font-bold tracking-tight text-[#1d1d1f]">
                <CountUp target={20} suffix="+" delay={0} duration={2500} />
              </span>
              <span className="text-center text-[11px] font-medium uppercase tracking-wider text-[#86868b]">
                Years HR Expertise
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 overflow-hidden rounded-xl border border-[#d2d2d7] bg-white">
            <div className="h-[2px] w-full bg-gradient-to-r from-[#3B82F6] to-[#3B82F6]/40" />
            <div className="flex flex-col items-center gap-1 py-5">
              <span className="text-2xl font-bold tracking-tight text-[#1d1d1f]">
                <CountUp target={72} suffix="hr" delay={2500} duration={2000} />
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-[#86868b]">
                Avg. Delivery
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 overflow-hidden rounded-xl border border-[#d2d2d7] bg-white">
            <div className="h-[2px] w-full bg-gradient-to-r from-[#3B82F6] to-[#3B82F6]/40" />
            <div className="flex flex-col items-center gap-1 py-5">
              <span className="text-2xl font-bold tracking-tight text-[#1d1d1f]">
                $<CountUp target={0} suffix="" delay={4500} duration={1500} />
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-[#86868b]">
                Upfront Cost
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Here's What You Get — moved right after hero */}
      <section className="bg-white px-6 py-12 md:px-16 lg:px-24">
        <h3 className="text-center text-3xl font-bold tracking-tight text-[#1d1d1f] md:text-4xl lg:text-5xl">
          Here&apos;s what you get
        </h3>

        {/* Desktop — expandable horizontal cards */}
        <div className="group/row mx-auto mt-14 hidden h-[280px] gap-3 md:flex">
          {/* Expertise */}
          <div className="group/card relative flex flex-[1] cursor-default flex-col justify-between overflow-hidden rounded-2xl bg-[#dbeafe] p-6 transition-all duration-500 ease-in-out hover:flex-[2.5]">
            <div>
              <span className="text-5xl font-bold leading-none tracking-tight text-[#1d1d1f] lg:text-6xl">
                20<span className="text-3xl lg:text-4xl">+</span>
              </span>
              <span className="mt-1 block text-lg font-medium text-[#1d1d1f]/40">
                Years
              </span>
            </div>
            <div>
              <p className="text-sm font-bold text-[#3B82F6]">Expertise</p>
              <p className="mt-1 max-h-0 overflow-hidden text-sm font-medium leading-relaxed text-[#1d1d1f]/60 opacity-0 transition-all duration-500 ease-in-out group-hover/card:max-h-24 group-hover/card:opacity-100">
                Screened with the rigor of a seasoned HR professional with 20+
                years of experience — not a junior recruiter following a
                checklist.
              </p>
            </div>
          </div>

          {/* Match */}
          <div className="group/card relative flex flex-[1] cursor-default flex-col justify-between overflow-hidden rounded-2xl bg-[#3B82F6] p-6 transition-all duration-500 ease-in-out hover:flex-[2.5]">
            <div>
              <span className="text-5xl font-bold leading-none tracking-tight text-white lg:text-6xl">
                72<span className="text-3xl lg:text-4xl">hr</span>
              </span>
              <span className="mt-1 block text-lg font-medium text-white/40">
                Average
              </span>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Turnaround</p>
              <p className="mt-1 max-h-0 overflow-hidden text-sm font-medium leading-relaxed text-white/70 opacity-0 transition-all duration-500 ease-in-out group-hover/card:max-h-24 group-hover/card:opacity-100">
                AI-assisted sourcing combines human judgment with powerful tools
                — delivering faster shortlists and better-matched candidates.
              </p>
            </div>
          </div>

          {/* Zero Risk */}
          <div className="group/card relative flex flex-[1] cursor-default flex-col justify-between overflow-hidden rounded-2xl bg-[#1d1d1f] p-6 transition-all duration-500 ease-in-out hover:flex-[2.5]">
            <div>
              <span className="text-5xl font-bold leading-none tracking-tight text-white lg:text-6xl">
                $0
              </span>
              <span className="mt-1 block text-lg font-medium text-white/30">
                Risk
              </span>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Zero Risk</p>
              <p className="mt-1 max-h-0 overflow-hidden text-sm font-medium leading-relaxed text-white/60 opacity-0 transition-all duration-500 ease-in-out group-hover/card:max-h-24 group-hover/card:opacity-100">
                Your first placement is completely free. After that, our fee is
                12–15% of the hired candidate&apos;s first-year salary — only
                charged when you make a hire. Includes a 90-day replacement
                guarantee. No retainers. No upfront costs. Ever.
              </p>
            </div>
          </div>

          {/* Candidates Per Role */}
          <div className="group/card relative flex flex-[1] cursor-default flex-col justify-between overflow-hidden rounded-2xl bg-[#bae6fd] p-6 transition-all duration-500 ease-in-out hover:flex-[2.5]">
            <div>
              <span className="text-5xl font-bold leading-none tracking-tight text-[#1d1d1f] lg:text-6xl">
                3<span className="text-3xl lg:text-4xl">x</span>
              </span>
              <span className="mt-1 block text-lg font-medium text-[#1d1d1f]/40">
                Per Role
              </span>
            </div>
            <div>
              <p className="text-sm font-bold text-[#1d1d1f]">
                Candidates Per Role
              </p>
              <p className="mt-1 max-h-0 overflow-hidden text-sm font-medium leading-relaxed text-[#1d1d1f]/60 opacity-0 transition-all duration-500 ease-in-out group-hover/card:max-h-24 group-hover/card:opacity-100">
                Every search delivers exactly three fully pre-screened candidates
                — no floods of resumes, no wasted interviews. Just three strong
                fits, every time.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile — stacked cards */}
        <div className="mt-14 flex flex-col gap-3 md:hidden">
          <div className="rounded-2xl bg-[#dbeafe] p-6">
            <span className="text-4xl font-bold tracking-tight text-[#1d1d1f]">
              20<span className="text-2xl">+</span>
            </span>
            <p className="mt-3 text-sm font-bold text-[#3B82F6]">Years Expertise</p>
            <p className="mt-1 text-sm font-medium leading-relaxed text-[#1d1d1f]/60">
              Screened with the rigor of a seasoned HR professional with 20+
              years of experience — not a junior recruiter following a
              checklist.
            </p>
          </div>
          <div className="rounded-2xl bg-[#3B82F6] p-6">
            <span className="text-4xl font-bold tracking-tight text-white">
              72<span className="text-2xl">hr</span>
            </span>
            <p className="mt-3 text-sm font-bold text-white">Turnaround</p>
            <p className="mt-1 text-sm font-medium leading-relaxed text-white/70">
              AI-assisted sourcing combines human judgment with powerful tools —
              delivering faster shortlists and better-matched candidates.
            </p>
          </div>
          <div className="rounded-2xl bg-[#1d1d1f] p-6">
            <span className="text-4xl font-bold tracking-tight text-white">
              $0
            </span>
            <p className="mt-3 text-sm font-bold text-white">Zero Risk</p>
            <p className="mt-1 text-sm font-medium leading-relaxed text-white/60">
              Your first placement is completely free. After that, our fee is
              12–15% of the hired candidate&apos;s first-year salary — only
              charged when you make a hire. Includes a 90-day replacement
              guarantee. No retainers. No upfront costs. Ever.
            </p>
          </div>
          <div className="rounded-2xl bg-[#bae6fd] p-6">
            <span className="text-4xl font-bold tracking-tight text-[#1d1d1f]">
              3<span className="text-2xl">x</span>
            </span>
            <p className="mt-3 text-sm font-bold text-[#1d1d1f]">
              Candidates Per Role
            </p>
            <p className="mt-1 text-sm font-medium leading-relaxed text-[#1d1d1f]/60">
              Every search delivers exactly three fully pre-screened candidates
              — no floods of resumes, no wasted interviews. Just three strong
              fits, every time.
            </p>
          </div>
        </div>

        <p className="mt-14 text-center text-lg font-bold leading-tight tracking-tight text-[#1d1d1f] md:text-xl lg:text-2xl">
          Our model only works if yours does. So we make sure yours does.
        </p>
      </section>

      {/* How We Work */}
      <section id="how-it-works" className="bg-[#1d1d1f] px-6 py-16 md:px-16 md:py-20 lg:px-24">
        <h3 className="text-center text-3xl font-bold tracking-tight text-[#e5e5e5] md:text-4xl lg:text-5xl">
          How We Work
        </h3>

        {/* Desktop — horizontal cards with big numbers */}
        <div className="mx-auto mt-14 hidden h-[300px] gap-3 md:flex">
          {/* Step 1 */}
          <div className="group relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl border border-[#333] bg-gradient-to-br from-[#2a2a2a] to-[#222] p-6 transition-all duration-300 hover:border-[#3B82F6]/40">
            <div>
              <span className="text-6xl font-bold leading-none tracking-tight text-white/25 lg:text-7xl">
                01
              </span>
              <h4 className="mt-3 text-lg font-bold text-white">
                Share Your Role
              </h4>
              <p className="mt-2 max-w-[240px] text-sm font-medium leading-relaxed text-[#999]">
                Send us the job description and what great looks like to you.
                Takes 10 minutes.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3B82F6]/10">
                <svg
                  className="h-4 w-4 text-[#3B82F6]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs font-medium text-[#999]">
                10 min setup
              </span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl bg-[#3B82F6] p-6 transition-all duration-300">
            <div>
              <span className="text-6xl font-bold leading-none tracking-tight text-white/30 lg:text-7xl">
                02
              </span>
              <h4 className="mt-3 text-lg font-bold text-white">
                We Source &amp; Screen
              </h4>
              <p className="mt-2 max-w-[240px] text-sm font-medium leading-relaxed text-white/70">
                Our AI-assisted pipeline finds, vets, and scores candidates
                against your exact criteria.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs font-medium text-white/80">
                AI-powered, human-verified
              </span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl border border-[#333] bg-gradient-to-br from-[#2a2a2a] to-[#222] p-6 transition-all duration-300 hover:border-[#3B82F6]/40">
            <div>
              <span className="text-6xl font-bold leading-none tracking-tight text-white/25 lg:text-7xl">
                03
              </span>
              <h4 className="mt-3 text-lg font-bold text-white">
                Receive Your Shortlist
              </h4>
              <p className="mt-2 max-w-[240px] text-sm font-medium leading-relaxed text-[#999]">
                3 fully pre-screened candidates with summaries delivered within
                72 hours. You interview, you hire.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3B82F6]/10">
                <svg
                  className="h-4 w-4 text-[#3B82F6]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs font-medium text-[#999]">
                72 hours delivery
              </span>
            </div>
          </div>
        </div>

        {/* Mobile — stacked cards */}
        <div className="mt-14 flex flex-col gap-3 md:hidden">
          <div className="rounded-2xl border border-[#333] bg-gradient-to-br from-[#2a2a2a] to-[#222] p-6">
            <span className="text-5xl font-bold leading-none tracking-tight text-white/25">01</span>
            <h4 className="mt-3 text-lg font-bold text-white">Share Your Role</h4>
            <p className="mt-2 text-sm font-medium leading-relaxed text-[#999]">
              Send us the job description and what great looks like to you. Takes 10 minutes.
            </p>
          </div>
          <div className="rounded-2xl bg-[#3B82F6] p-6">
            <span className="text-5xl font-bold leading-none tracking-tight text-white/30">02</span>
            <h4 className="mt-3 text-lg font-bold text-white">We Source &amp; Screen</h4>
            <p className="mt-2 text-sm font-medium leading-relaxed text-white/70">
              Our AI-assisted pipeline finds, vets, and scores candidates against your exact criteria.
            </p>
          </div>
          <div className="rounded-2xl border border-[#333] bg-gradient-to-br from-[#2a2a2a] to-[#222] p-6">
            <span className="text-5xl font-bold leading-none tracking-tight text-white/25">03</span>
            <h4 className="mt-3 text-lg font-bold text-white">Receive Your Shortlist</h4>
            <p className="mt-2 text-sm font-medium leading-relaxed text-[#999]">
              3 fully pre-screened candidates with summaries delivered within 72 hours. You interview, you hire.
            </p>
          </div>
        </div>

        <TypewriterText text="This is what hiring was always supposed to feel like." />
      </section>

      {/* Who We Serve */}
      <section className="bg-[#f5f5f7] px-6 py-12 md:px-16 lg:px-24">
        <h3 className="text-center text-3xl font-bold tracking-tight text-[#1d1d1f] md:text-4xl lg:text-5xl">
          Who We Serve
        </h3>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
          {/* Digital Marketing Agencies */}
          <div className="overflow-hidden rounded-xl border border-[#d2d2d7] bg-white transition-all duration-300 hover:border-[#86868b]">
            <div className="h-[2px] bg-gradient-to-r from-[#3B82F6] to-[#3B82F6]/40" />
            <div className="p-8 md:p-10">
              <h4 className="text-xl font-bold text-[#1d1d1f]">
                Digital Marketing Agencies
              </h4>
              <ul className="mt-6 flex flex-col gap-3.5">
                {[
                  "Media Buyers",
                  "Account Managers",
                  "SEO Specialists",
                  "Copywriters",
                  "Social Media Managers",
                  "Email Marketing Specialists",
                  "Creative Directors & more",
                ].map((role) => (
                  <li
                    key={role}
                    className="flex items-center gap-3 text-sm font-medium text-[#86868b]"
                  >
                    <svg
                      className="h-4 w-4 shrink-0 text-[#3B82F6]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SaaS Companies */}
          <div className="overflow-hidden rounded-xl border border-[#d2d2d7] bg-white transition-all duration-300 hover:border-[#86868b]">
            <div className="h-[2px] bg-gradient-to-r from-[#3B82F6] to-[#3B82F6]/40" />
            <div className="p-8 md:p-10">
              <h4 className="text-xl font-bold text-[#1d1d1f]">
                SaaS Companies
              </h4>
              <ul className="mt-6 flex flex-col gap-3.5">
                {[
                  "Sales Development Reps",
                  "Account Executives",
                  "Customer Success Managers",
                  "Revenue Operations Specialists",
                  "Product Marketing Managers",
                  "Onboarding Specialists & more",
                ].map((role) => (
                  <li
                    key={role}
                    className="flex items-center gap-3 text-sm font-medium text-[#86868b]"
                  >
                    <svg
                      className="h-4 w-4 shrink-0 text-[#3B82F6]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="contact"
        className="bg-[#141414] px-6 py-16 text-center md:px-16 md:py-20 lg:px-24"
      >
        <h3 className="text-4xl font-bold leading-tight tracking-tight text-[#e5e5e5] md:text-5xl lg:text-6xl">
          Ready to hire faster?
        </h3>

        <p className="mt-6 text-xl font-bold tracking-tight text-white/80 md:text-2xl">
          Currently accepting our first 5 founding partner clients.
        </p>

        <div className="mx-auto mt-8 h-px w-16 bg-gradient-to-r from-transparent via-[#333] to-transparent" />

        <p className="mx-auto mt-8 max-w-lg text-sm font-medium leading-relaxed text-[#999]">
          Founding partners receive free first placement, priority service, and
          preferred pricing locked in permanently.
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
          Only 3 founding partner spots remaining — rates increase after launch
        </p>
      </section>

      <Footer />
    </main>
  );
}
