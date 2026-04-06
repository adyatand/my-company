"use client";

import { useState } from "react";

const ITEMS = [
  {
    id: "alignment",
    title: "Strategic Alignment & Calibration",
    body: "We sit down with your leadership to understand your growth goals, culture, and the DNA of your top performers. We don't just look for skills, we look for the people who will drive your business forward.",
  },
  {
    id: "search",
    title: "End-to-End Search Management",
    body: "ArriveTalent takes over the heavy lifting. From writing compelling job narratives and active headhunting on premium platforms to initial screenings and technical vetting, we manage every touchpoint. You only see the top 1% of candidates who are ready to hit the ground running.",
  },
  {
    id: "coordination",
    title: "Seamless Coordination with Hiring Managers",
    body: "We act as your internal coordination arm. We schedule interviews, manage candidate communications, and provide detailed scorecards based on your exact criteria. We protect your time by ensuring you only meet with fully vetted, high-intent professionals.",
  },
  {
    id: "performance",
    title: "Performance-Based Growth",
    body: "We operate on a performance-based model with capped monthly fees, you get the results of a dedicated talent acquisition department with the flexibility of a partner who only wins when you do.",
  },
] as const;

export default function PartnerAccordionCards() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="flex w-full flex-col gap-3 sm:gap-4">
      {ITEMS.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="flex flex-col border border-white/15 bg-[#0f172a]/80 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:border-white/25 sm:p-5"
          >
            <div className="flex gap-2 sm:gap-3">
              <h4 className="min-w-0 flex-1 text-left text-sm font-bold leading-snug tracking-tight text-[#f5f5f7] sm:text-base md:text-lg">
                {item.title}
              </h4>
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                aria-label={isOpen ? "Show less" : "Show more"}
                className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center text-[#f5f5f7]/70 transition-colors hover:text-[#f5f5f7] focus-visible:z-10 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B82F6] sm:h-8 sm:w-8"
              >
                {isOpen ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden
                    className="sm:h-[18px] sm:w-[18px]"
                  >
                    <path d="M5 12h14" />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden
                    className="sm:h-[18px] sm:w-[18px]"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                )}
              </button>
            </div>
            {isOpen ? (
              <p className="mt-3 border-t border-white/10 pt-3 pr-1 text-left text-xs font-medium leading-relaxed text-[#f5f5f7]/85 sm:text-sm sm:leading-[1.65]">
                {item.body}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
