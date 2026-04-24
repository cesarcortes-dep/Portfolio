import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  axes: ["wdth", "opsz"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const { personal, socials } = portfolio;

export const metadata: Metadata = {
  metadataBase: new URL("https://cesarcortes.dev"),
  title: {
    default: `${personal.shortName} — ${personal.role}`,
    template: `%s — ${personal.shortName}`,
  },
  description: personal.bio,
  keywords: [
    "Senior Front-End Engineer",
    "React",
    "React Native",
    "TypeScript",
    "Next.js",
    "Frontend Developer",
    "Medellín",
    "Colombia",
    personal.name,
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${personal.shortName} — ${personal.role}`,
    description: personal.bio,
    siteName: personal.shortName,
    images: [{ url: personal.profileImg, width: 800, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.shortName} — ${personal.role}`,
    description: personal.bio,
    images: [personal.profileImg],
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "contact:email": personal.email,
    "contact:github": socials.find((s) => s.platform === "github")?.href ?? "",
    "contact:linkedin": socials.find((s) => s.platform === "linkedin")?.href ?? "",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-atmosphere grain relative antialiased">
        {children}
      </body>
    </html>
  );
}
