// components/ImageSection.js

import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div
      id="about"
      className=" bg-gray-100 bg-opacity-10 p-8 md:p-16 rounded-xl text-[#061d61] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 m-4 md:m-8"
    >
      {/* Left-hand text section */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">About Us</h2>
        <div className="text-xl md:text-2xl leading-relaxed mb-2">
          <span className="font-bold text-[#041e6f]">
            Lextera Innovative Technology (LIT)
          </span>{" "}
          unites two decades of telecom infrastructure expertise with advanced
          enterprise IT solutions.
          <div className="mt-2">
            As the evolution of PT LEXCORP INDONESIA, we deliver robust
            platforms and large-scale deployments for Indonesia’s leading
            corporations.
          </div>
          <div className="mt-2">
            We bridge infrastructure and application layers, making us your
            strategic partner for digital transformation.
          </div>
        </div>
      </div>

      {/* Right-hand image container */}
      <div className="lg:w-1/2 w-full">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <Image
            src="/tony-stoddard-DgZxBnZeQo8-unsplash.jpg"
            alt="A descriptive alt text for your image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
