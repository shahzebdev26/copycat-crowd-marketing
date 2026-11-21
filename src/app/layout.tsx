import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://copycatcrowd.com"),
  title: "Copycat Crowd - Real-Time 7-Player Memory Move Battle",
  description: "Copy the moves and outsmart the crowd in Copycat Crowd! Fast-paced 7-player party battles, customizable toppers and auras, and exciting memory move challenges on Android.",
  icons: {
    icon: "/images/app-icon.png",
    apple: "/images/app-icon.png",
  },
  openGraph: {
    title: "Copycat Crowd - Real-Time 7-Player Memory Move Battle",
    description: "The high-energy party battle where copycats battle for the crown. Real-time 7-player matchmaking, custom move packs, and Community Market customization.",
    images: [{ url: "/images/feature-graphic.png", width: 1024, height: 500 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col justify-between">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
