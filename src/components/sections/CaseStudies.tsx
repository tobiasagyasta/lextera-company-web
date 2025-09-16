import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const caseStudiesData = [
  {
    title: "XL Modernization",
    challenge:
      "Modernizing an existing telecommunication network to meet increasing demand and improve performance.",
    role: "Led the comprehensive upgrade of network infrastructure, ensuring minimal disruption and enhanced capacity.",
    reframe:
      "Scalable Enterprise IT - Designed and implemented a scalable IT architecture, allowing for seamless growth and integration of new services for enterprise clients.",
  },
  {
    title: "FTTH Rollouts",
    challenge:
      "Deploying extensive Fiber To The Home networks across diverse geographical areas.",
    role: "Managed end-to-end fiber optic infrastructure deployment, from planning to activation.",
    reframe:
      "Data Infrastructure Integration - Developed robust data infrastructure solutions that support high-speed connectivity and enable advanced data-driven applications.",
  },
  {
    title: "Telkomsel NPI",
    challenge:
      "Optimizing network performance for a leading telecommunications provider to enhance customer experience.",
    role: "Implemented advanced network analytics and optimization strategies, resulting in significant performance improvements.",
    reframe:
      "High-Availability IT Systems - Engineered and maintained high-availability IT systems crucial for continuous operation and business critical applications.",
  },
  {
    title: "XL Resource Supply",
    challenge:
      "Providing skilled technical resources for large-scale telecommunications projects.",
    role: "Supplied and managed highly qualified personnel to support various network development and maintenance initiatives.",
    reframe:
      "IT Workforce Enablement - Developed strategies and frameworks for empowering an agile and skilled IT workforce, essential for digital transformation initiatives.",
  },
  {
    title: "Government Optimization",
    challenge:
      "Enhancing the digital capabilities and operational efficiency of government entities.",
    role: "Implemented targeted solutions to modernize government infrastructure and streamline public services.",
    reframe:
      "Secure Digital Transformation - Guided government clients through secure digital transformation processes, ensuring data integrity and compliance with national regulations.",
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="bg-gradient-to-r from-[#1845cb]  to-[#e4e3e4] text-transparent bg-clip-text">
          Our Case Studies
        </span>
      </h2>
      <p className="mt-4 mb-8 text-xl text-muted-foreground text-center">
        Transforming challenges into digital success.
      </p>
      <Accordion type="single" collapsible className="w-full p-4">
        {caseStudiesData.map((study) => (
          <AccordionItem key={study.title} value={study.title}>
            <AccordionTrigger>{study.title}</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Challenge:</h4>
                  <p className="text-muted-foreground">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Our Role:</h4>
                  <p className="text-muted-foreground">{study.role}</p>
                </div>
                <div>
                  <h4 className="font-semibold">IT Reframe:</h4>
                  <p className="text-muted-foreground">{study.reframe}</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default CaseStudies;
