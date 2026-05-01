import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Chains } from "@/components/Chains";
import { Why } from "@/components/Why";
import { Comparison } from "@/components/Comparison";
import { CodeSection } from "@/components/CodeSection";
import { Skills } from "@/components/Skills";
import { Security } from "@/components/Security";
import { Roadmap } from "@/components/Roadmap";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Chains />
      <Why />
      <Comparison />
      <CodeSection />
      <Skills />
      <Security />
      <Roadmap />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
