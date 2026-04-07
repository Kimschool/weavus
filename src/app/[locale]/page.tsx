import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Strengths from "@/components/sections/Strengths";
import Portfolio from "@/components/sections/Portfolio";
import Company from "@/components/sections/Company";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Strengths />
      <Portfolio />
      <Company />
      <ContactCTA />
    </>
  );
}
