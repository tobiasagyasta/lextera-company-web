import Hero from "@/components/sections/Hero";
import HeroVideo from "@/components/sections/HeroVideo";
import LogoCarousel from "@/components/sections/LogoCarousel";
import AboutUs from "@/components/sections/AboutUs";
import History from "@/components/sections/History";
import ValuesAccordion from "@/components/sections/ValuesAccordion";
import VisionMission from "@/components/sections/VisionMission";
import CorporateValues from "@/components/sections/CorporateValues";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import Roadmap from "@/components/sections/Roadmap";
import Contact from "@/components/sections/Contact";
import IconGrid from "@/components/sections/IconGrid";
import Section from "@/components/sections/Section";
export default function Home() {
  return (
    <main>
      <Section>
        <HeroVideo />
      </Section>{" "}
      <Section>
        <LogoCarousel />
      </Section>
      <Section>
        <AboutUs />
      </Section>{" "}
      <Section>
        <IconGrid />
      </Section>
      <Section>
        <ValuesAccordion />
      </Section>
      <Section>
        <History />
      </Section>
      {/* <Roadmap /> */}
      <Section>
        <Contact />
      </Section>
    </main>
  );
}
