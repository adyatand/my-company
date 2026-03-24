"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      website: String(formData.get("website") ?? "").trim(),
      role: String(formData.get("role") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
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
          {/* Left column: form */}
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
                <p className="mt-3 max-w-sm text-xs font-medium leading-relaxed text-[#86868b]">
                  Your confirmation email is on its way. If you don&apos;t see it in
                  your inbox, please check your Promotions or Spam folder.
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
                        type="text"
                        placeholder="acme.com"
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
                    disabled={submitting}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1d1d1f] px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#333] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? "Submitting..." : "Submit"}
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                  {error && (
                    <p className="mt-3 text-center text-xs font-semibold text-rose-600">
                      {error}
                    </p>
                  )}
                  <p className="mt-3 text-center text-xs font-medium text-[#86868b]">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                  <p className="mt-2 text-center text-[11px] font-medium leading-relaxed text-[#b0b0b0]">
                    By submitting this form you agree to our{" "}
                    <a
                      href="/privacy"
                      className="text-[#b0b0b0] underline underline-offset-2 transition-colors hover:text-[#3B82F6]"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right column: book a call */}
          <div className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center rounded-2xl border border-[#e5e5e5] bg-[#fafafa] p-8 md:p-10">
              <h2 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">
                Prefer to talk it through?
              </h2>
              <p className="mt-4 text-sm font-medium leading-relaxed text-[#86868b]">
                Book a 15-minute intro call and let&apos;s discuss your hiring
                needs directly. No forms, no waiting. Just a real conversation.
              </p>
              <a
                href="https://calendly.com/hire-arrivetalent/30min"
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

      <Footer />
    </main>
  );
}
