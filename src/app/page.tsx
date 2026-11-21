import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { MovePacks } from "@/components/MovePacks";
import { CommunityMarket } from "@/components/CommunityMarket";
import { Features } from "@/components/Features";
import { Screenshots } from "@/components/Screenshots";
import { ProductionCta } from "@/components/ProductionCta";
import { Faq } from "@/components/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <MovePacks />
      <CommunityMarket />
      <Features />
      <Screenshots />
      <ProductionCta />
      <Faq />
    </>
  );
}
