import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const historyData = [
  {
    year: "2004",
    description:
      "Founded as LEXCORP, with an initial focus on RF and telecommunications infrastructure development.",
  },
  {
    year: "2010-2015",
    description:
      "Executed nationwide projects, collaborating with key industry players such as Telkomsel, XL Axiata, Indosat, Huawei, and ZTE.",
  },
  {
    year: "2016-2020",
    description:
      "Spearheaded large-scale fiber optic rollouts and modernization swaps, enhancing Indonesia's digital backbone.",
  },
  {
    year: "2025",
    description:
      "Strategic transition into IT, rebranding as LIT to signify our expanded focus on innovative technology solutions.",
  },
];

const History = () => {
  return (
    <section id="history" className="container py-24 px-5 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="bg-gradient-to-r from-[#1845cb]  to-[#e4e3e4] text-transparent bg-clip-text">
          Our History
        </span>
      </h2>
      <p className="mt-4 mb-8 text-xl text-muted-foreground text-center">
        A journey of transformation and growth.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {historyData.map((item) => (
          <Card key={item.year}>
            <CardHeader>
              <CardTitle>{item.year}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default History;
