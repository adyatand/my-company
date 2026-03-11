"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-transparent px-6 py-6 md:px-16 lg:px-24">
        <Link
          href="/"
          className="font-display text-2xl font-bold tracking-tight text-[#1d1d1f] md:text-3xl"
        >
          ArriveTalent
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-[#1d1d1f]/60 transition-colors hover:text-[#1d1d1f]"
          >
            Home
          </Link>
          <Link
            href="/team"
            className="text-sm font-medium text-[#1d1d1f]/60 transition-colors hover:text-[#1d1d1f]"
          >
            Our Team
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-[#1d1d1f]/60 transition-colors hover:text-[#1d1d1f]"
          >
            Contact Us
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-[#1d1d1f] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#333]"
          >
            Hire Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Menu"
          onClick={() => setMenuOpen(true)}
          className="flex flex-col gap-[5px] md:hidden"
        >
          <span className="block h-[2px] w-5 bg-[#1d1d1f]/60 transition-colors hover:bg-[#1d1d1f]" />
          <span className="block h-[2px] w-5 bg-[#1d1d1f]/60 transition-colors hover:bg-[#1d1d1f]" />
          <span className="block h-[2px] w-5 bg-[#1d1d1f]/60 transition-colors hover:bg-[#1d1d1f]" />
        </button>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Slide-out menu (mobile only) */}
      <nav
        className={`fixed top-0 right-0 z-[70] flex h-full w-full max-w-sm flex-col bg-[#1d1d1f] transition-transform duration-500 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-8 py-7">
          <span className="text-lg font-semibold tracking-tight text-white">
            Menu
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-1 px-8">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="rounded-xl px-4 py-4 text-2xl font-bold tracking-tight text-white/60 transition-colors hover:bg-white/5 hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/team"
            onClick={() => setMenuOpen(false)}
            className="rounded-xl px-4 py-4 text-2xl font-bold tracking-tight text-white/60 transition-colors hover:bg-white/5 hover:text-white"
          >
            Our Team
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="rounded-xl px-4 py-4 text-2xl font-bold tracking-tight text-white/60 transition-colors hover:bg-white/5 hover:text-white"
          >
            Contact Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-full bg-white px-6 py-3 text-center text-base font-bold tracking-tight text-[#1d1d1f] transition-colors hover:bg-white/90"
          >
            Hire Now
          </Link>
        </div>

        <div className="border-t border-white/10 px-8 py-6">
          <a
            href="mailto:contact@arrivetalent.com"
            className="text-sm font-medium text-white/40 transition-colors hover:text-white"
          >
            contact@arrivetalent.com
          </a>
        </div>
      </nav>
    </>
  );
}
