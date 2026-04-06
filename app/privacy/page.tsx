import type { Metadata } from "next";
import fs from "fs/promises";
import path from "path";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for ArriveTalent.",
  alternates: {
    canonical: "/privacy",
  },
};

export default async function PrivacyPage() {
  const htmlPath = path.join(
    process.cwd(),
    "app",
    "privacy",
    "termly-privacy.html"
  );
  const html = await fs.readFile(htmlPath, "utf8");

  return (
    <main className="bg-white text-[#1d1d1f]">
      <div className="mx-auto max-w-4xl px-6 py-24 md:px-16 lg:px-24">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </main>
  );
}

