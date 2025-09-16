import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import History from "@/components/sections/History";
import VisionMission from "@/components/sections/VisionMission";
import CorporateValues from "@/components/sections/CorporateValues";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import Roadmap from "@/components/sections/Roadmap";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <History />
      <VisionMission />
      <CorporateValues />
      <Services />
      <CaseStudies />
      <Roadmap />
      <Contact />
    </main>
  );
}
