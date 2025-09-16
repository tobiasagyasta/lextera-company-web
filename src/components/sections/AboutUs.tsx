import Image from "next/image";

const AboutUs = () => {
  return (
    <section id="about" className="container py-24 px-5 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="bg-green-300 w-full md:w-1/2">
            <div className="w-full h-full bg-muted rounded-lg">
              <Image
                src="/nasa.jpg"
                width={500}
                height={500}
                alt="Connectivity visual"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-[#1845cb]  to-[#e4e3e4] text-transparent bg-clip-text">
                  About Us
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                LIT represents the strategic evolution of LEXCORP, a leader in
                Indonesian telecom infrastructure for two decades. We leverage
                this legacy to provide enterprise-grade IT solutions, bridging
                traditional infrastructure with cutting-edge innovations to
                empower businesses in a digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
