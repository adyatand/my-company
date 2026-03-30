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
      <section
        className="relative overflow-hidden bg-[#0f172a] bg-cover bg-center bg-no-repeat px-6 pt-32 pb-16 text-center md:px-16 md:pb-20 lg:px-24"
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
        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-[#f5f5f7] md:text-5xl lg:text-6xl">
            Start Building Your Infrastructure.
          </h1>
          <div className="mx-auto mt-6 h-px w-12 bg-white/45" />
          <p className="mx-auto mt-6 text-base font-medium leading-relaxed text-[#f5f5f7]/90 md:text-lg">
            Share a few details about your growth goals. We&apos;ll review your
            needs and return with a tailored talent strategy within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            {submitted ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-none border border-[#d2d2d7] bg-[#f8f8fa] px-8 py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                  <svg
                    className="h-8 w-8 text-emerald-600"
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
                  24 hours. We&apos;re excited to help you build your team.
                </p>
                <p className="mt-3 max-w-sm text-xs font-medium leading-relaxed text-[#86868b]">
                  Your confirmation email is on its way. If you don&apos;t see it
                  in your inbox, please check your Promotions or Spam folder.
                </p>
                <a
                  href="/"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#1d1d1f] px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#333]"
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
                className="overflow-hidden rounded-none border border-[#d2d2d7] bg-[#f8f8fa] shadow-sm"
              >
                <div className="h-[3px] bg-gradient-to-r from-[#3B82F6] to-[#3B82F6]/50" />
                <div className="px-8 pt-8 pb-2 md:px-10 md:pt-10">
                  <h2 className="text-xl font-bold tracking-tight text-[#1d1d1f]">
                    Send us a message
                  </h2>
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
                      className="rounded-none border border-[#d2d2d7] bg-white px-4 py-3 text-sm font-medium text-[#1d1d1f] outline-none transition-colors placeholder:text-[#b0b0b5] focus:border-[#3B82F6]"
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
                      className="rounded-none border border-[#d2d2d7] bg-white px-4 py-3 text-sm font-medium text-[#1d1d1f] outline-none transition-colors placeholder:text-[#b0b0b5] focus:border-[#3B82F6]"
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
                        className="rounded-none border border-[#d2d2d7] bg-white px-4 py-3 text-sm font-medium text-[#1d1d1f] outline-none transition-colors placeholder:text-[#b0b0b5] focus:border-[#3B82F6]"
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
                        className="rounded-none border border-[#d2d2d7] bg-white px-4 py-3 text-sm font-medium text-[#1d1d1f] outline-none transition-colors placeholder:text-[#b0b0b5] focus:border-[#3B82F6]"
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
                      placeholder="e.g. Senior Account Executive, Marketing Lead"
                      className="rounded-none border border-[#d2d2d7] bg-white px-4 py-3 text-sm font-medium text-[#1d1d1f] outline-none transition-colors placeholder:text-[#b0b0b5] focus:border-[#3B82F6]"
                    />
                  </div>
                </div>

                <div className="border-t border-[#d2d2d7] px-8 py-6 md:px-10">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1d1d1f] px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#333] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? "Submitting..." : "Get in Touch"}
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
                      className="text-[#86868b] underline underline-offset-2 transition-colors hover:text-[#3B82F6]"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </form>
            )}
          </div>

          <div className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center border border-[#d2d2d7] bg-gradient-to-br from-white to-[#f5f5f7] p-8 shadow-sm md:p-10">
              <h2 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">
                <span className="block">Prefer to talk it through?</span>
                <span className="mt-2 block text-[1.35rem] leading-snug md:text-2xl">
                  Skip the Form. Start the Strategy.
                </span>
              </h2>
              <p className="mt-4 text-sm font-medium leading-relaxed text-[#86868b]">
                Book a 30-minute Talent Discovery Session. We&apos;ll map out your
                hiring bottlenecks and provide a clear path forward, no
                commitment required.
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
        <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center justify-center gap-5 border-t border-[#e5e5e5] pt-10 text-sm font-medium text-[#86868b] sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-3">
          <span className="flex items-center gap-2">
            <svg
              className="h-4 w-4 shrink-0 text-[#3B82F6]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Response within 24 hours
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="h-4 w-4 shrink-0 text-[#3B82F6]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            First placement free
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="h-4 w-4 shrink-0 text-[#3B82F6]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            Your information stays confidential
          </span>
        </div>
      </section>

      <Footer />
    </main>
  );
}
