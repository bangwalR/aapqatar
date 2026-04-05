import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AAP Group | Al Ansari & Partners — Qatar",
  description:
    "AAP Group is Qatar's premier retail and distribution conglomerate. Operating 7+ Retailmart branches and 5+ distribution verticals across FMCG, trading, and logistics.",
  keywords: "AAP Qatar, Al Ansari Partners, Retailmart, FMCG distribution Qatar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 pt-16 sm:pt-20 md:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
