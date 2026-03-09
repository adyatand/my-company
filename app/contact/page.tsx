"use client";

import { useState } from "react";
import Header from "../components/Header";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-white text-[#1d1d1f]">
      <Header />

      {/* Hero */}
      <section className="bg-[#f5f5f7] px-6 pt-32 pb-16 text-center md:px-16 lg:px-24">
        <h1 className="text-4xl font-bold tracking-tight text-[#1d1d1f] md:text-5xl lg:text-6xl">
          Let&apos;s Talk
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base font-medium text-[#86868b]">
          Tell us about your hiring needs and we&apos;ll get back to you within
          24 hours with a plan.
        </p>
      </section>

      {/* Two-column section */}
      <section className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left column — Form */}
          <div>
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-[#d2d2d7] bg-[#f5f5f7] px-8 py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                  <svg
                    className="h-8 w-8 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="mt-6 text-2xl font-bold tracking-tight text-[#1d1d1f]">
                  We&apos;ve got your details
                </h2>
                <p className="mt-3 max-w-sm text-sm font-medium leading-relaxed text-[#86868b]">
                  Our team will review your submission and get back to you within
                  24 hours. We&apos;re excited to help you find your next great
                  hire.
                </p>
                <a
                  href="/"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#1d1d1f] px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#333]"
                >
                  Back to Home
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="overflow-hidden rounded-2xl border border-[#d2d2d7] bg-[#f5f5f7]"
              >
                <div className="px-8 pt-8 pb-2 md:px-10 md:pt-10">
                  <h2 className="text-xl font-bold tracking-tight text-[#1d1d1f]">
                    Tell us about your hire
                  </h2>
                  <p className="mt-1 text-sm font-medium text-[#86868b]">
                    Fill out the form below and our team will reach out within 24
                    hours.
                  </p>
                </div>

                <div className="flex flex-col gap-5 px-8 py-6 md:px-10">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-wider text-[#86868b]"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="rounded-xl border border-[#d2d2d7] bg-white px-4 py-3 text-sm font-medium text-[#1d1d1f] outline-none transition-colors placeholder:text-[#d2d2d7] focus:border-[#3B82F6]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-wider text-[#86868b]"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="rounded-xl border border-[#d2d2d7] bg-white px-4 py-3 text-sm font-medium text-[#1d1d1f] outline-none transition-colors placeholder:text-[#d2d2d7] focus:border-[#3B82F6]"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="company"
                        className="text-xs font-semibold uppercase tracking-wider text-[#86868b]"
                      >
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        placeholder="Acme Inc."
                        className="rounded-xl border border-[#d2d2d7] bg-white px-4 py-3 text-sm font-medium text-[#1d1d1f] outline-none transition-colors placeholder:text-[#d2d2d7] focus:border-[#3B82F6]"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="website"
                        className="text-xs font-semibold uppercase tracking-wider text-[#86868b]"
                      >
                        Company Website
                      </label>
                      <input
                        id="website"
                        name="website"
                        type="url"
                        placeholder="https://acme.com"
                        className="rounded-xl border border-[#d2d2d7] bg-white px-4 py-3 text-sm font-medium text-[#1d1d1f] outline-none transition-colors placeholder:text-[#d2d2d7] focus:border-[#3B82F6]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="role"
                      className="text-xs font-semibold uppercase tracking-wider text-[#86868b]"
                    >
                      Role You&apos;re Hiring For
                    </label>
                    <input
                      id="role"
                      name="role"
                      type="text"
                      required
                      placeholder="e.g. Senior Media Buyer, Account Executive"
                      className="rounded-xl border border-[#d2d2d7] bg-white px-4 py-3 text-sm font-medium text-[#1d1d1f] outline-none transition-colors placeholder:text-[#d2d2d7] focus:border-[#3B82F6]"
                    />
                  </div>
                </div>

                <div className="border-t border-[#d2d2d7] px-8 py-6 md:px-10">
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1d1d1f] px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#333]"
                  >
                    Submit
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                  <p className="mt-3 text-center text-xs font-medium text-[#86868b]">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right column — Book a Call */}
          <div className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center rounded-2xl border border-[#e5e5e5] bg-[#fafafa] p-8 md:p-10">
              <h2 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">
                Prefer to talk it through?
              </h2>
              <p className="mt-4 text-sm font-medium leading-relaxed text-[#86868b]">
                Book a 15-minute intro call and let&apos;s discuss your hiring
                needs directly. No forms, no waiting — just a real conversation.
              </p>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#3B82F6] px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#2563EB]"
              >
                Book a Call
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <p className="mt-4 text-xs font-medium text-[#86868b]">
                Usually available within 1–2 business days.
              </p>
            </div>
          </div>
        </div>

        {/* Trust signals */}
        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-center gap-4 border-t border-[#e5e5e5] pt-8 text-sm font-medium text-[#86868b] sm:flex-row sm:gap-8">
          <span className="flex items-center gap-2">
            <span>↩</span> Response within 24 hours
          </span>
          <span className="hidden text-[#d2d2d7] sm:inline">·</span>
          <span className="flex items-center gap-2">
            <span>✓</span> First placement free
          </span>
          <span className="hidden text-[#d2d2d7] sm:inline">·</span>
          <span className="flex items-center gap-2">
            <span>🔒</span> Your information is never shared
          </span>
        </div>
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
