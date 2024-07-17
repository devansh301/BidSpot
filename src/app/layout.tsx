import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "./header";
import Head from "next/head";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "BidSpot",
  description: "Your premier destination for online auctions. Discover unique items, place your bids, and win big at the most trusted auction platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Header/>
        <div className="container mx-auto py-12">{children}</div>
      </body>
    </html>
  );
}