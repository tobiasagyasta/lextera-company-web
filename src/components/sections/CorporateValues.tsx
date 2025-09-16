import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MedalIcon, TargetIcon, HandshakeIcon, GlobeIcon } from "lucide-react";

const valuesData = [
  {
    icon: <MedalIcon size={40} className="text-primary" />,
    title: "Reliability & Operational Excellence",
    description:
      "Delivering dependable, high-performing solutions for maximum uptime.",
  },
  {
    icon: <TargetIcon size={40} className="text-primary" />,
    title: "Solution-Driven Innovation",
    description:
      "Implementing innovative solutions to address complex challenges and drive progress.",
  },
  {
    icon: <HandshakeIcon size={40} className="text-primary" />,
    title: "Strategic Partnership",
    description:
      "Fostering collaborative relationships as trusted, long-term advisors.",
  },
  {
    icon: <GlobeIcon size={40} className="text-primary" />,
    title: "Local Acumen, Global Vision",
    description:
      "Combining local market understanding with a global perspective for world-class solutions.",
  },
];

const CorporateValues = () => {
  return (
    <section id="values" className="container py-24 px-5 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="bg-gradient-to-r from-[#1845cb]  to-[#e4e3e4] text-transparent bg-clip-text">
          Our Core Values
        </span>
      </h2>
      <p className="mt-4 mb-8 text-xl text-muted-foreground text-center">
        The principles that guide our work.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {valuesData.map((value) => (
          <Card key={value.title} className="text-center">
            <CardHeader>
              <div className="flex justify-center">{value.icon}</div>
              <CardTitle className="mt-4">{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CorporateValues;
