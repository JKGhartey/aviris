import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Aviris - Beautiful React Components",
    template: "%s - Aviris",
  },
  description:
    "A collection of beautiful, accessible, and customizable React components built with Tailwind CSS and shadcn/ui. Perfect for modern Next.js applications.",
  keywords: [
    // Core technology keywords
    "react components",
    "ui library",
    "tailwind css",
    "shadcn",
    "nextjs",
    "react",
    "typescript",
    "ui components",
    "design system",
    "component library",

    // Feature keywords
    "accessible components",
    "responsive design",
    "dark mode",
    "customizable ui",
    "reusable components",
    "modern ui",
    "web components",

    // Framework specific
    "react hooks",
    "react typescript",
    "next.js 14",
    "tailwind components",
    "tailwind ui",
    "shadcn ui",

    // Development keywords
    "frontend development",
    "web development",
    "ui development",
    "react development",
    "frontend framework",

    // Quality keywords
    "high-quality components",
    "production-ready",
    "performance optimized",
    "responsive components",
    "accessible ui",

    // Use case keywords
    "admin dashboard",
    "web application",
    "user interface",
    "enterprise ui",
    "modern applications",
  ],
  authors: [
    {
      name: "Aviris Team",
      url: "https://aviris.dev",
    },
  ],
  creator: "Aviris Team",
  publisher: "Aviris",
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
    icon: [
      {
        url: "/favicon/favicon.ico",
        sizes: "32x32",
      },
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aviris.dev",
    title: "Aviris - Beautiful React Components",
    description:
      "A collection of beautiful, accessible, and customizable React components built with Tailwind CSS and shadcn/ui. Perfect for modern Next.js applications.",
    siteName: "Aviris",
    images: [
      {
        url: "/aviris-og.png",
        width: 1200,
        height: 630,
        alt: "Aviris - Beautiful React Components",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aviris - Beautiful React Components",
    description:
      "A collection of beautiful, accessible, and customizable React components built with Tailwind CSS and shadcn/ui. Perfect for modern Next.js applications.",
    creator: "@avirisdev",
    images: ["/aviris-og.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
  },
  alternates: {
    canonical: "https://aviris.dev",
    languages: {
      "en-US": "https://aviris.dev",
    },
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
