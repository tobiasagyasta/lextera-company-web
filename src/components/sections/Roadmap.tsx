import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const roadmapData = [
  {
    title: "Cloud Adoption",
    description: "Enabling seamless migration, optimization, and management of enterprise applications and data in the cloud, ensuring scalability and resilience.",
  },
  {
    title: "Edge Computing",
    description: "Bringing computation closer to the source of data to improve efficiency, security, and responsiveness — critical for various industries.",
  },
  {
    title: "Data Center & Hybrid Infrastructure",
    description: "Delivering reliable, high-performance data center solutions, from colocation and private cloud to hybrid deployments.",
  },
  {
    title: "Migration & Modernization",
    description: "Guiding enterprises through complex migrations, ensuring smooth transitions with minimal risk and maximum business impact.",
  },
  {
    title: "Enterprise Consulting",
    description: "Providing strategic guidance and expert consultation to help organizations navigate complex digital transformation journeys.",
  },
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Our Strategic{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Roadmap
        </span>
      </h2>
      <p className="mt-4 mb-8 text-xl text-muted-foreground text-center">
        Pioneering the future of Indonesia's digital economy.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {roadmapData.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
