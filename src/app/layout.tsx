import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgressBar from "./components/ScrollProgressBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roshan Gautam - Software Developer",
  description: "Software Developer based in Kathmandu, Nepal. Specializing in React, React Native, Node.js, and modern web technologies.",
  keywords: ["Software Developer", "Web Developer", "React", "React Native", "Node.js", "Kathmandu", "Nepal"],
  authors: [{ name: "Roshan Gautam" }],
  creator: "Roshan Gautam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
