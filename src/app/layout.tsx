import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarabjeet Singh | sarabs3 | Portfolio",
  description: "Welcome to my portfolio website. Explore my projects and skills in software development.",
  keywords: "portfolio, software engineer, web development, AI",
  authors: {name: "Sarabjeet Singh", url: "https://sarabs3.dev"},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Sarabjeet Singh | sarabs3 | Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website. Explore my projects and skills in software development." />
        <meta name="keywords" content="portfolio, software engineer, web development, AI" />
        <meta name="author" content="Sarabjeet Singh" />
        <meta property="og:title" content="Sarabjeet's Portfolio | Software Engineer" />
        <meta property="og:description" content="Welcome to my portfolio website." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sarabs3.dev" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
