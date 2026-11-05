import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://reinvent-amravati.vercel.app";

export const viewport: Viewport = {
  themeColor: "#090809",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Reinvent Watch And Build Amravati | Student Cloud Community Event",
  description:
    "Join Reinvent Watch And Build in Amravati, a student-focused event for cloud learning and developer connections. Check the confirmed agenda.",
  applicationName: "Reinvent Watch And Build — Amravati",
  authors: [{ name: "Amravati Student Builder Community" }],
  keywords: [
    "AWS re:Invent",
    "Watch and Build",
    "Amravati student tech",
    "Cloud computing students",
    "Vidarbha developers",
    "Event registration",
    "Student cloud meetups",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Reinvent Watch And Build Amravati | Student Cloud Community Event",
    description:
      "Join Reinvent Watch And Build in Amravati, a student-focused event for cloud learning and developer connections. Check the confirmed agenda.",
    url: siteUrl,
    siteName: "Reinvent Watch And Build — Amravati",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reinvent Watch And Build — Amravati Student Event",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reinvent Watch And Build Amravati | Student Cloud Community Event",
    description:
      "Join Reinvent Watch And Build in Amravati, a student-focused event for cloud learning and developer connections. Check the confirmed agenda.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#090809] text-[#F5F0EE] font-sans antialiased overflow-x-hidden max-w-full selection:bg-[#571D31] selection:text-[#F5F0EE]">
        {children}
      </body>
    </html>
  );
}
