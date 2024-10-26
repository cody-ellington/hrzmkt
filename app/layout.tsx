import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const font = Poppins({
  subsets: ["latin"],
  weight: "500"
});

export const metadata: Metadata = {
  title: "Horizo | Marketing Agency",
  description: "Grow your business with Horizo, a design & development studio.",
  openGraph: {
    images: [
      {
        url: '../public/logo/black-long.png',
        width: 1200,
        height: 630,
        alt: 'Horizo Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>

        {children}
        <Analytics />

      </body>
    </html>
  );
}
