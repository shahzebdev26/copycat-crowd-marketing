import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://copycatcrowd.com"),
  title: "Copycat Crowd - Real-Time Multiplayer Memory Party Game",
  description: "Dance, copy, and outsmart your friends in Copycat Crowd! Fast-paced 7-player party battles, peer-to-peer community market trading, and rhythmic memory challenges on Android.",
  icons: {
    icon: "/images/app-icon.png",
    apple: "/images/app-icon.png",
  },
  openGraph: {
    title: "Copycat Crowd - Real-Time Multiplayer Memory Party Game",
    description: "The high-energy party battle where copycats battle for the crown. Real-time 7-player matchmaking, custom move packs, and Community Market trading.",
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
