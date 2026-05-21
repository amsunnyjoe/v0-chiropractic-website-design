import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _inter = Inter({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Divine Chiro Care | Professional Chiropractic and Wellness",
  description:
    "Safe, personalized chiropractic treatments designed to restore balance, improve posture, and help you live pain-free. Based in Lagos, Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">{children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
