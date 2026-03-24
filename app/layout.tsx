import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Arrive Talent",
  description:
    "We fill your open roles in 72 hours. Pre-screened candidates for digital marketing agencies and SaaS companies.",
  metadataBase: new URL("https://arrivetalent.com"),
  openGraph: {
    title: "ArriveTalent | Stop Sorting Resumes. Start Meeting Candidates.",
    description:
      "Pre-screened, qualified candidates ready to interview for Tampa Bay digital agencies and SaaS teams.",
    url: "https://arrivetalent.com",
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
    title: "ArriveTalent | Stop Sorting Resumes. Start Meeting Candidates.",
    description:
      "Pre-screened, qualified candidates ready to interview for Tampa Bay digital agencies and SaaS teams.",
    images: ["/logos/AT_New_Logo_Trans_BG.png"],
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
