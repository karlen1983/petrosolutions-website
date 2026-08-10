import { Hero } from "@/components/home/Hero";
import { TrustBadges } from "@/components/home/TrustBadges";
import { Services } from "@/components/home/Services";
import { Installation } from "@/components/home/Installation";
import { Products } from "@/components/home/Products";
import { MerchantServices } from "@/components/home/MerchantServices";
import { Financing } from "@/components/home/Financing";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Gallery } from "@/components/home/Gallery";
import { About } from "@/components/home/About";
import { ContactForm } from "@/components/home/ContactForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Hero />
      <TrustBadges />
      <Services />
      <Installation />
      <Products />
      <MerchantServices />
      <Financing />
      <WhyChoose />
      <Gallery />
      <About />
      <ContactForm />
      <FinalCTA />
    </>
  );
}
