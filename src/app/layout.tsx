import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sourced - Freelance Marketplace",
  description:
    "The world's premium marketplace for elite freelancers and ambitious companies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#45464d]">
        {children}
      </body>
    </html>
  );
}
