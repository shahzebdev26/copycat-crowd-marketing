import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redeem Codes & Free Crystals - Copycat Crowd",
  description: "Official active promo and coupon redeem codes for Copycat Crowd. Claim free Crystals, Mimic Coins, and exclusive rewards on Android.",
  openGraph: {
    title: "Redeem Codes & Free Crystals - Copycat Crowd",
    description: "Official active promo and coupon redeem codes for Copycat Crowd. Claim free Crystals, Mimic Coins, and exclusive rewards.",
    url: "https://copycat-crowd.techsparks.co/codes",
    siteName: "Copycat Crowd",
  },
};

export default function CodesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
