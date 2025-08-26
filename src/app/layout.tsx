import type { Metadata } from "next";
import { Geist, Geist_Mono, Wallpoet } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const wallpoet = Wallpoet({
  subsets: ['latin'],
  weight: '400',
  variable: "--font-wallpoet",
});

export const metadata: Metadata = {
  title: "TBRAC LLC",
  description: "TBRAC LLC provides integrated architectural, engineering, and fabrication services with 3D/BIM modeling and MEP systems for efficient, code-compliant designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${wallpoet.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
