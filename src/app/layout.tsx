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
    "LEXTERA (LIT) is a leader in Indonesian telecommunications and IT solutions. We provide robust, scalable, and secure enterprise-grade services, from cloud adoption to digital transformation. Lextera.id is your trusted partner for digital transformation, cloud, networking, and enterprise software in Indonesia.",
  keywords: [
    "Lextera",
    "Lextera.id",
    "LEXTERA Innovative Technology",
    "PT Lexcorp Indonesia",
    "Enterprise IT",
    "Telecom Solutions",
    "Cloud Services",
    "Digital Transformation",
    "Networking",
    "ERP",
    "CRM",
    "Indonesia IT",
    "Indonesian Telecom",
    "IT Consulting",
    "Telecom Consulting",
    "Managed Services",
    "Business Support Systems",
    "Operations Support Systems",
  ],
  openGraph: {
    title:
      "LEXTERA Innovative Technology (LIT) - Enterprise IT and Telecom Solutions",
    description:
      "Lextera.id is a leader in Indonesian telecommunications and IT solutions. We provide robust, scalable, and secure enterprise-grade services, from cloud adoption to digital transformation.",
    url: "https://lextera.id",
    siteName: "Lextera.id",
    images: [
      {
        url: "/lextera3.png",
        width: 1200,
        height: 630,
        alt: "Lextera Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@lextera_id",
    title:
      "LEXTERA Innovative Technology (LIT) - Enterprise IT and Telecom Solutions",
    description:
      "Lextera.id is a leader in Indonesian telecommunications and IT solutions. We provide robust, scalable, and secure enterprise-grade services, from cloud adoption to digital transformation.",
    images: ["/lextera3.png"],
  },
  alternates: {
    canonical: "https://lextera.id",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  other: {
    organization: "LEXTERA Innovative Technology (LIT)",
    website: "https://lextera.id",
    contact: "management@lextera.id",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
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
