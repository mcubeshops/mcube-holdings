import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WelcomeModal from "@/components/ui/welcome-modal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "M'Cube - Building Tomorrow's Leading Businesses",
  description: "M'Cube is a diversified holding company with subsidiaries in e-commerce, professional services, financial services, and remittance technology.",
  keywords: "M'Cube, holding company, investment, e-commerce, financial services, remittance, professional services",
  authors: [{ name: "M'Cube" }],
  openGraph: {
    title: "M'Cube - Building Tomorrow's Leading Businesses",
    description: "M'Cube is a diversified holding company with subsidiaries in e-commerce, professional services, financial services, and remittance technology.",
    url: "https://mcube.com",
    siteName: "M'Cube",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "M'Cube Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M'Cube - Building Tomorrow's Leading Businesses",
    description: "M'Cube is a diversified holding company with subsidiaries in e-commerce, professional services, financial services, and remittance technology.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <WelcomeModal />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
