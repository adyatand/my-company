"use client";

import { useState } from "react";

const ITEMS = [
  {
    id: "problem",
    title: "The Problem We Saw",
    body: "Growing businesses were being left behind. The best talent acquisition tools, processes, and expertise were locked inside Fortune 500 HR departments with budgets most scaling companies will never have. Everyone else was stuck posting on job boards, hoping for the best, and losing their best candidates to faster, better-resourced competitors. We built ArriveTalent to change that.",
  },
  {
    id: "technology",
    title: "The Technology We Built Around",
    body: "Traditional recruiting is manual, slow, and dependent on whoever is working your account that week. We built our process differently. By combining AI-powered sourcing tools, automated candidate pipelines, and intelligent screening frameworks, we compressed what used to take 42 days on average into a process that delivers vetted, interview ready candidates within days. Technology does not replace the human judgment in our process. It makes it faster and sharper.",
  },
  {
    id: "expertise",
    title: "The Expertise We Brought In",
    body: "Speed means nothing without quality. That is why at the core of every ArriveTalent search is 20+ years of HR leadership experience that knows the difference between a candidate who interviews well and a candidate who performs. Our vetting process goes beyond skills and experience. It evaluates organizational fit, long-term potential, and the specific qualities your team needs at this stage of growth. The right hire compounds over time. We engineer for that.",
  },
  {
    id: "infrastructure",
    title: "The Infrastructure We Leave Behind",
    body: "When you work with ArriveTalent you are not just filling an open role. You are building a hiring infrastructure your business can rely on every time a seat opens up. A documented role brief process. A live candidate pipeline. A vetting framework calibrated to your culture and growth goals. Every engagement makes the next one faster, smarter, and more aligned with where your business is going.",
  },
] as const;

export default function VisionAccordionCards() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="flex w-full flex-col gap-3">
      {ITEMS.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="rounded-lg border border-[#e5e5e7] bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-6"
          >
            <div className="flex gap-3 md:gap-4">
              <h3 className="min-w-0 flex-1 text-base font-bold leading-snug tracking-tight text-[#0f172a] md:text-lg">
                {item.title}
              </h3>
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                aria-label={isOpen ? "Show less" : "Show more"}
                className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center text-[#86868b] transition-colors hover:text-[#52525b] focus-visible:z-10 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B82F6]"
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
            {isOpen ? (
              <p className="mt-4 pr-11 text-sm font-medium leading-relaxed text-[#86868b] md:pr-12 md:text-[15px] md:leading-[1.65]">
                {item.body}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
