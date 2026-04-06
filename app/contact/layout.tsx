import type { Metadata } from "next";

const description =
  "Get in touch with ArriveTalent to build your team with AI-powered sourcing and senior HR expertise.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  openGraph: {
    title: "ArriveTalent | Contact",
    description,
    url: "/contact",
  },
  twitter: {
    title: "ArriveTalent | Contact",
    description,
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
