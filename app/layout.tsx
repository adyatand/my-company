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
  title: {
    default: "ArriveTalent",
    template: "ArriveTalent | %s",
  },
  description:
    "The Next Level of Hiring. We combine 20+ years of HR expertise with modern AI-powered tools to serve as your full-service talent acquisition partner.",
  metadataBase: new URL("https://www.arrivetalent.com"),
  openGraph: {
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
    images: ["/logos/AT_New_Logo_Trans_BG.png"],
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
