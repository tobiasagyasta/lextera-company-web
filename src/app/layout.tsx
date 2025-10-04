import type { Metadata } from "next";
import { Merriweather, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

// Setup Merriweather for body/serif text
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"], // It's good practice to specify weights
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title:
    "LEXTERA Innovative Technology (LIT) - Enterprise IT and Telecom Solutions",
  description:
    "LEXTERA (LIT) is a leader in Indonesian telecommunications and IT solutions. We provide robust, scalable, and secure enterprise-grade services, from cloud adoption to digital transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${montserrat.variable} ${merriweather.variable} antialiased bg-gray-100`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />

          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
