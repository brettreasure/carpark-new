import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Not bad for a carpark",
  description: "A burst-out-laughing commentary on ridiculous online reviews and modern Australian humour",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-screen font-sans flex flex-col`}
      >
        <Navigation />
        <main className="pt-14 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
