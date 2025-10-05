import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammad Abu Arra - Full-Stack Developer",
  description: "Enthusiastic full-stack developer experienced in Flutter, Laravel, and Node.js, focused on building scalable, mobile-first solutions.",
  keywords: ["Full-Stack Developer", "Flutter", "Laravel", "Node.js", "React", "TypeScript", "Mobile Development", "Web Development", "Jordan Developer"],
  authors: [{ name: "Mohammad Abu Arra" }],
  creator: "Mohammad Abu Arra",
  publisher: "Mohammad Abu Arra",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mohammad-abu-arra.vercel.app',
    siteName: 'Mohammad Abu Arra Portfolio',
    title: 'Mohammad Abu Arra - Full-Stack Developer',
    description: 'Enthusiastic full-stack developer experienced in Flutter, Laravel, and Node.js, focused on building scalable, mobile-first solutions.',
    images: [
      {
        url: '/favicon.svg',
        width: 1200,
        height: 630,
        alt: 'Mohammad Abu Arra - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammad Abu Arra - Full-Stack Developer',
    description: 'Enthusiastic full-stack developer experienced in Flutter, Laravel, and Node.js, focused on building scalable, mobile-first solutions.',
    images: ['/favicon.svg'],
    creator: '@mohammadjamal7',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
  other: {
    'msapplication-TileColor': '#7c3aed',
    'theme-color': '#7c3aed',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
