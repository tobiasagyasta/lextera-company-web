import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 px-5 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#1845cb]  to-[#e4e3e4] text-transparent bg-clip-text">
              LEXTERA
            </span>{" "}
            Innovative
          </h1>{" "}
          Technologies
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          The strategic evolution of <b>LEXCORP</b>, a recognized leader in
          Indonesian telecommunications infrastructure. We leverage our legacy
          to deliver robust, scalable, and secure IT solutions.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Link href="#about">
            <Button className="w-full md:w-1/3">Learn More</Button>
          </Link>
        </div>
      </div>

      {/* Hero cards */}
      <div className="z-10">
        {/* We can add a visual element here later, like an illustration or a 3D model */}
        <div className="w-full h-full bg-[#e4e3e4] rounded-lg">
          <Image
            src="/lextera3.png"
            width={500}
            height={500}
            alt="Lextera visual"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
