import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "RELIA — AI-Powered Reading Mediation Framework",
  description: "RELIA is an AI-powered reading mediation framework integrating generative AI, Bloom’s taxonomy, and digital literacy to enhance critical thinking and literary comprehension.",
  keywords: [
    "Artificial Intelligence in Education",
    "Generative AI",
    "Reading Mediation",
    "Bloom's Taxonomy",
    "Digital Literacy",
    "Educational Research",
    "AI Literacy",
    "Critical Thinking",
    "RELIA Project",
    "FCT Portugal"
  ],
  authors: [{ name: "Projeto RELIA - Universidade do Minho" }],
  icons: {
    icon: "/logo-relia.png",
  },
  openGraph: {
    title: "RELIA — AI-Powered Reading Mediation Framework",
    description: "An educational research project integrating generative AI, Bloom’s taxonomy and digital literacy to foster critical thinking and literary comprehension.",
    url: "https://relia.uminho.pt",
    siteName: "RELIA",
    type: "website",
    locale: "pt_PT",
    images: [
      {
        url: "/og-image.jpg", // Assuming an image exists or will be added, otherwise this is a placeholder
        width: 1200,
        height: 630,
        alt: "RELIA Project Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RELIA — AI-Powered Reading Mediation Framework",
    description: "An educational research project integrating generative AI, Bloom’s taxonomy and digital literacy to foster critical thinking and literary comprehension.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-white text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
