import type { Metadata } from "next";
import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Horizon Tech Consulting — AI-Integrated Custom Software",
    template: "%s | Horizon Tech Consulting",
  },
  description:
    "Horizon Tech builds custom AI-integrated software from the ground up — so you own it, control it, and it actually fits how your business works.",
  keywords: [
    "custom AI software development India",
    "bespoke business software development",
    "AI-integrated software",
    "custom insurance software",
    "custom hospitality management software",
  ],
  authors: [{ name: "Horizon Tech Consulting" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Horizon Tech Consulting",
    title: "Horizon Tech Consulting — AI-Integrated Custom Software",
    description:
      "Custom AI-integrated software built from the ground up. Own your software, control your data.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Horizon Tech Consulting",
    description:
      "Custom AI-integrated software built from the ground up. Own your software, control your data.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-bg-base text-text-primary antialiased">
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <ThemeProvider>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
