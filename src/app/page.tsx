import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Screenshots } from "@/components/Screenshots";
import { Testers } from "@/components/Testers";
import { Faq } from "@/components/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <Screenshots />
      <Testers />
      <Faq />
    </>
  );
}
