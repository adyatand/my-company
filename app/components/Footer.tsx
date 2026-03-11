import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#141414] px-6 md:px-16 lg:px-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 py-12 md:flex-row md:justify-between md:gap-8">
        {/* Left */}
        <div className="flex flex-col">
          <Link
            href="/"
            className="font-display text-2xl font-bold tracking-tight text-white"
          >
            ArriveTalent
          </Link>
          <p className="mt-3 max-w-xs text-sm font-medium leading-relaxed text-[#555]">
            Pre-screened candidates in 72 hours — built for Tampa Bay&apos;s
            digital agencies and SaaS teams.
          </p>

          <p className="mt-8 text-xs font-medium text-[#555]">Follow us on:</p>
          <div className="mt-2 flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#333] text-[#555] transition-colors duration-300 hover:border-[#555] hover:text-white"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right — Pages */}
        <div className="flex flex-col">
          <h4 className="text-sm font-bold text-white">Pages</h4>
          <nav className="mt-4 flex flex-col gap-2.5">
            <Link
              href="/"
              className="text-sm font-medium text-[#555] transition-colors duration-300 hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/team"
              className="text-sm font-medium text-[#555] transition-colors duration-300 hover:text-white"
            >
              Our Team
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[#555] transition-colors duration-300 hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-[#1a1a1a] py-6 sm:flex-row">
        <p className="text-xs font-medium text-[#333]">
          &copy; 2025 ArriveTalent. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/privacy"
            className="text-xs font-medium text-[#555] transition-colors duration-300 hover:text-white"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-xs font-medium text-[#555] transition-colors duration-300 hover:text-white"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
