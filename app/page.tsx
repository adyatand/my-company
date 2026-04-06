import type { Metadata } from "next";
import HomeClient from "./HomeClient";

const homeDescription =
  "The Next Level of Hiring. We combine 20+ years of HR expertise with modern AI-powered tools to serve as your full-service talent acquisition partner.";

const homeOgTitle = "ArriveTalent | Building Teams For Scaling Businesses";

export const metadata: Metadata = {
  title: {
    absolute: homeOgTitle,
  },
  description: homeDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: homeOgTitle,
    description: homeDescription,
    url: "/",
    siteName: "ArriveTalent",
    type: "website",
    images: [
      {
        url: "/logos/AT_New_Logo_Trans_BG.png",
        alt: "ArriveTalent logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeOgTitle,
    description: homeDescription,
    images: ["/logos/AT_New_Logo_Trans_BG.png"],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
