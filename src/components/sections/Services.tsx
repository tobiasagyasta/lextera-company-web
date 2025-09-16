import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const legacyServices = [
  "Network Performance Improvement",
  "OSP FTTH (Outside Plant Fiber To The Home)",
  "RF Resource Supply",
];

const modernSolutions = [
  "IT Infrastructure Optimization & Analytics",
  "Enterprise Connectivity & Digital Infrastructure",
  "Strategic IT Resource & Managed Services",
];

const Services = () => {
  return (
    <section id="services" className="container py-24 px-5 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="bg-gradient-to-r from-[#1845cb]  to-[#e4e3e4] text-transparent bg-clip-text">
          Our Services Portfolio
        </span>
      </h2>
      <p className="mt-4 mb-8 text-xl text-muted-foreground text-center">
        From legacy expertise to modern IT solutions.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Legacy LEXCORP Services</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground">
              {legacyServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Modern LIT IT Solutions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground">
              {modernSolutions.map((solution) => (
                <li key={solution}>{solution}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;
