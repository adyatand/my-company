"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useId, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function CountUp({
  target,
  suffix,
  duration = 3000,
  delay = 0,
  startWhenVisible = false,
}: {
  target: number;
  suffix: string;
  duration?: number;
  delay?: number;
  /** When true, count begins only after this element enters the viewport (once). */
  startWhenVisible?: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasPlayed = useRef(false);
  const elRef = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(!startWhenVisible);

  useEffect(() => {
    if (!startWhenVisible) return;
    const el = elRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [startWhenVisible]);

  useEffect(() => {
    if (!inView || hasPlayed.current) return;
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
  }, [inView, target, duration, delay]);

  return (
    <span ref={elRef}>
      {count}
      {suffix}
    </span>
  );
}

/** Solid circular shapes (no blur — reads as crisp disks, not gradients). */
function FlowOrb({ style, zIndex }: { style: CSSProperties; zIndex: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none"
      style={{
        position: "absolute",
        zIndex,
        borderRadius: "50%",
        ...style,
      }}
    />
  );
}

function FlowOrbs({ variant }: { variant: "light" | "white" | "cta" }) {
  if (variant === "light") {
    return (
      <>
        <FlowOrb
          zIndex={0}
          style={{
            width: "min(88vw, 440px)",
            height: "min(88vw, 440px)",
            top: "-12%",
            left: "-18%",
            backgroundColor: "rgba(59, 130, 246, 0.14)",
          }}
        />
        <FlowOrb
          zIndex={0}
          style={{
            width: "min(88vw, 480px)",
            height: "min(88vw, 480px)",
            bottom: "-38%",
            right: "-14%",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
          }}
        />
      </>
    );
  }
  if (variant === "white") {
    return (
      <>
        <FlowOrb
          zIndex={0}
          style={{
            width: "min(78vw, 380px)",
            height: "min(78vw, 380px)",
            top: "8%",
            left: "-16%",
            backgroundColor: "rgba(59, 130, 246, 0.18)",
          }}
        />
        <FlowOrb
          zIndex={0}
          style={{
            width: "min(72vw, 320px)",
            height: "min(72vw, 320px)",
            bottom: "0%",
            right: "-10%",
            backgroundColor: "rgba(15, 23, 42, 0.08)",
          }}
        />
      </>
    );
  }
  return (
    <>
      <FlowOrb
        zIndex={1}
        style={{
          width: "min(70vw, 400px)",
          height: "min(70vw, 400px)",
          top: "50%",
          left: "-14%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(59, 130, 246, 0.22)",
        }}
      />
      <FlowOrb
        zIndex={1}
        style={{
          width: "min(75vw, 380px)",
          height: "min(75vw, 380px)",
          bottom: "5%",
          right: "-8%",
          backgroundColor: "rgba(59, 130, 246, 0.14)",
        }}
      />
    </>
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
        sizes="(max-width: 1024px) 50vw, 25vw"
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

const HIRING_ACCORDION_ITEMS = [
  {
    id: "roles-revenue",
    title: "Roles Filled. Revenue Recovered.",
    preview:
      "The average company takes 42 days to fill a role. Every...",
    body: "The average company takes 42 days to fill a role. Every vacant seat costs real money — lost pipeline, missed targets, and a team stretched thin. Our AI-powered sourcing stack actively scans thousands of profiles and initiates outreach simultaneously, compressing the entire timeline. Pre-screened, interview-ready candidates are on your desk within days of kickoff.",
  },
  {
    id: "beyond-job-board",
    title: "Beyond the Job Board.",
    preview:
      "Job boards only reach 27% of available talent. The other 73% are passive...",
    body: "Job boards only reach 27% of available talent. The other 73% are passive, not job searching, and completely invisible to a standard hiring process. Those are the people you actually want. Our AI-driven tools map the full talent landscape for your role, identifying passive candidates by skills, experience, and fit. Then initiating personalized outreach at scale to start conversations your job posting never could.",
  },
  {
    id: "finalists",
    title: "Finalists Only. No Noise.",
    preview:
      "The average internal process requires 20 first round interviews per hire...",
    body: "The average internal process requires 20 first round interviews per hire. Which means 25 hours of leadership time per role. We eliminate that. Our AI screening layer filters every candidate against your exact criteria first. Those who pass go through a structured interview with our HR leaders assessing communication, cultural fit, and long-term potential. You only receive the finalists and a one-page brief on each. A few final conversations. One hire.",
  },
  {
    id: "savings-guarantee",
    title: "Built-In Savings. Built-In Guarantee",
    preview:
      "A full-time internal recruiter costs between $76,000 and $108,000 per year in salary...",
    body: "A full-time internal recruiter costs between $76,000 and $108,000 per year in salary, benefits, taxes, and tools — guaranteed, whether they fill two roles or twenty. ArriveTalent gives you a complete AI-powered hiring department working on a success-based model with a maximum fee cap. You only pay when you hire. You always pay less than a full-time hire. And every placement includes a 90-day replacement guarantee. We only win when you win.",
  },
] as const;

function HiringAccordionCards() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:pt-20">
      {HIRING_ACCORDION_ITEMS.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="grid grid-cols-[minmax(0,1fr)_2.75rem] gap-x-3 gap-y-3 rounded-lg border border-[#e5e5e7] bg-white p-5 shadow-sm md:gap-x-4 md:p-6"
          >
            <h4 className="col-start-1 row-start-1 min-w-0 text-base font-bold leading-snug text-[#0f172a] md:text-lg">
              {item.title}
            </h4>
            <p className="col-start-1 row-start-2 min-w-0 text-sm font-medium leading-relaxed text-[#86868b]">
              {isOpen ? item.body : item.preview}
            </p>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Show less" : "Show more"}
              className="col-start-2 row-start-2 mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center justify-self-center self-start text-[#86868b] transition-colors hover:text-[#52525b] focus-visible:z-10 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B82F6]"
            >
              {isOpen ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden
                >
                  <path d="M5 12h14" />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default function Home() {
  const partnerCurvedTopId = `partner-curved-top-${useId().replace(/:/g, "")}`;

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
    { label: "Transportation", file: "transportation.png" },
  ] as const;

  return (
    <main className="overflow-x-hidden bg-[#f8f8fa] text-[#1d1d1f]">
      <Header />

      {/* Hero */}
      <section
        className="relative z-10 flex min-h-screen flex-col overflow-hidden bg-[#f5f5f7] bg-cover bg-center bg-no-repeat px-6 pt-24 md:px-16 lg:px-24"
        style={{
          backgroundImage: "url('/images/Hero_Section_BG.png')",
          clipPath:
            "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - clamp(2.75rem, 8vw, 5.5rem)))",
        }}
      >
        <div className="absolute inset-0 z-[2] bg-[#0f172a]/55" />
        <div className="flex flex-1 flex-col items-start justify-center pb-16 md:pb-20">
          <div className="relative z-10 flex w-full flex-col items-start justify-center text-left">
            <h1 className="max-w-3xl font-sans text-5xl font-bold leading-[1.05] tracking-tight text-[#f5f5f7] md:text-6xl lg:text-[4rem]">
              Matching the <span className="text-[#3B82F6]">right talent</span>{" "}
              with the <span className="text-[#3B82F6]">right team</span>
            </h1>

            <div className="mt-8 h-px w-12 bg-white/45" />

            <p className="mt-8 max-w-3xl text-lg font-medium tracking-wide text-[#f5f5f7] md:text-xl">
              Your talent acquisition partner, built to find the people your
              business needs to grow
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex origin-left rounded-none border border-white/25 bg-white px-6 py-2.5 text-[13px] font-semibold tracking-wide text-[#1d1d1f] shadow-sm transition duration-300 ease-out hover:scale-[1.04] hover:bg-white/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:mt-10 md:px-8 md:py-3 md:text-sm"
            >
              Build Your Team
            </Link>
          </div>

        </div>
      </section>

      {/* Why ArriveTalent — pulled up to meet hero diagonal */}
      <section className="relative -mt-[clamp(2.75rem,8vw,5.5rem)] bg-[#f8f8fa] px-6 pb-16 pt-[calc(3rem+clamp(2.75rem,8vw,5.5rem))] md:px-16 md:pb-20 lg:px-24">
        <FlowOrbs variant="light" />
        <div className="relative z-10 grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-start">
            <h3 className="font-sans text-3xl font-bold tracking-tight text-[#1d1d1f] md:text-4xl lg:text-5xl">
              The Next Level of Hiring
            </h3>
            <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-[#86868b] md:text-lg">
              We combine 20+ years of HR expertise with modern AI-powered tools
              to serve as your full-service talent acquisition partner. We learn
              your business, your culture, and what great looks like to you
              {'\u2014'} enabling us to find exactly the people your business needs.
              With us, all you will see is everything you want.
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

          <HiringAccordionCards />
        </div>

        <div className="relative z-10 mt-14 grid grid-cols-3 gap-6 md:mt-16 md:gap-12">
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold tracking-tight text-[#0f172a] md:text-4xl">
              <CountUp
                target={20}
                suffix="+"
                delay={0}
                duration={4200}
                startWhenVisible
              />
            </span>
            <span className="text-center text-[11px] font-medium uppercase tracking-wider text-[#86868b] md:text-sm">
              Years HR Expertise
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold tracking-tight text-[#0f172a] md:text-4xl">
              <CountUp
                target={72}
                suffix="hr"
                delay={0}
                duration={4200}
                startWhenVisible
              />
            </span>
            <span className="text-center text-[11px] font-medium uppercase tracking-wider text-[#86868b] md:text-sm">
              Avg. Delivery
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold tracking-tight text-[#0f172a] md:text-4xl">
              <CountUp
                target={90}
                suffix=""
                delay={0}
                duration={4200}
                startWhenVisible
              />
            </span>
            <span className="text-center text-[11px] font-medium uppercase tracking-wider text-[#86868b] md:text-sm">
              Day Performance Guarantee
            </span>
          </div>
        </div>
      </section>

      {/* Clip: curved top on entire Partner section (desktop); mobile adds padding on heading block only */}
      <svg
        className="pointer-events-none absolute h-px w-px overflow-hidden"
        aria-hidden
      >
        <defs>
          <clipPath
            id={partnerCurvedTopId}
            clipPathUnits="objectBoundingBox"
          >
            <path d="M0,0.1 Q0.5,0 1,0.1 L1,1 L0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <section
        id="how-it-works"
        className="relative -mt-px overflow-hidden bg-[#0f172a] bg-cover bg-center bg-no-repeat px-6 py-16 md:px-16 md:py-20 lg:px-24"
        style={{
          backgroundImage: "url('/images/WWO_Section_BG.png')",
          clipPath: `url(#${partnerCurvedTopId})`,
          WebkitClipPath: `url(#${partnerCurvedTopId})`,
        }}
      >
        <div className="absolute inset-0 z-[2] bg-[#0f172a]/55" />
        <div className="relative z-10 w-full">
          <div className="text-center max-md:pt-20">
            <h3 className="text-3xl font-bold tracking-tight text-[#f5f5f7] md:text-4xl lg:text-5xl">
              The Partner You Build Your Team With
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
                className="group flex flex-col border border-white/15 bg-[#0f172a]/80 p-7 shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:border-white/25 md:p-8"
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

      {/* Industries We Serve — slight overlap hides hairline above white */}
      <section
        id="industries"
        className="relative -mt-3 overflow-hidden bg-white px-6 pb-14 pt-[calc(0.75rem+3.5rem)] md:px-16 md:pb-20 md:pt-[calc(0.75rem+4rem)] lg:px-24"
      >
        <FlowOrbs variant="white" />
        <h3 className="relative z-10 text-center text-3xl font-bold tracking-tight text-[#0f172a] md:text-4xl lg:text-5xl">
          Industries We Serve
        </h3>

        <div className="relative z-10 mx-auto mt-12 max-w-6xl">
          <div className="grid auto-rows-fr grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {industryTiles.map(({ label, file }) => (
              <IndustryTile key={label} label={label} file={file} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — px matches hero + Next Level; grid keeps copy clear of the image */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#f8f8fa] px-6 py-16 md:px-16 lg:grid lg:min-h-[min(580px,80svh)] lg:grid-cols-[minmax(0,36rem)_minmax(0,1fr)] lg:items-center lg:gap-12 lg:py-24 lg:pl-24 lg:pr-0 xl:gap-16"
      >
        <FlowOrbs variant="cta" />
        <div className="relative z-10 col-start-1 row-start-1 max-w-xl text-left">
          <h3 className="font-sans text-3xl font-bold leading-tight tracking-tight text-[#0f172a] md:text-4xl lg:text-5xl">
            Secure Your Competitive Advantage
          </h3>

          <p className="mt-6 text-base font-medium leading-relaxed text-[#86868b] md:text-lg">
            Our years of HR expertise combined with modern AI-powered processes
            help you efficiently build your team with top performers. By serving
            as your talent acquisition partner, we provide the strategic
            headhunting needed to scale your business with significant cost
            savings and the security of a 90-day performance guarantee.
          </p>

          <a
            href="/contact"
            className="group mt-8 inline-flex origin-center items-center gap-2 rounded-none bg-[#1d1d1f] px-8 py-3 text-sm font-semibold tracking-wide text-white transition-transform duration-300 hover:scale-105"
          >
            Find Talent
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <div
          className="relative z-[2] col-start-2 row-start-1 mt-12 h-[min(70vw,340px)] w-[calc(100%+1.5rem)] max-w-none shrink-0 -mr-6 sm:mt-14 sm:h-[min(64vw,380px)] md:-mr-16 md:w-[calc(100%+4rem)] lg:mr-0 lg:mt-0 lg:h-auto lg:min-h-[min(520px,75svh)] lg:w-full lg:self-stretch"
        >
          <div className="absolute inset-0 overflow-hidden [clip-path:ellipse(84%_138%_at_90%_50%)] lg:[clip-path:ellipse(82%_135%_at_88%_50%)]">
            <Image
              src="/images/secure_advantage.png"
              alt="Team collaborating in a professional setting"
              fill
              className="object-cover object-[center_28%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
