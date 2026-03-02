import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amit Kumawat | Full Stack Software Engineer",
  description: "Portfolio showcasing my work as a Full Stack Software Engineer specializing in Next.js, React, Spring Boot, and modern web technologies.",
  keywords: ["Amit Kumawat", "Software Engineer", "Full Stack Developer", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Amit Kumawat", url: "https://github.com/amitk0091" }],
  openGraph: {
    title: "Amit Kumawat | Full Stack Software Engineer",
    description: "Portfolio showcasing my work as a Full Stack Software Engineer",
    url: "https://amitkumawat.com",
    type: "website",
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
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#fafbff] text-[#1a1a2e]`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
