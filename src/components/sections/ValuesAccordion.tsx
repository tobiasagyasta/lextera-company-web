// components/ValuesAccordion.js

"use client"; // Keep this for Next.js App Router

import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Adjust this import path if needed

// Your core values data
const coreValues = [
  {
    title: "Innovation",
    description:
      "We embrace creativity, experimentation, and continuous learning to stay ahead of the curve.",
  },
  {
    title: "Customer Satisfaction",
    description:
      "We prioritize customer satisfaction, listen to their needs, and deliver tailored solutions that exceed expectations.",
  },
  {
    title: "Integrity",
    description:
      "We operate with transparency, honesty, and ethics, building trust with our customers, partners, and stakeholders.",
  },
  {
    title: "Collaboration",
    description:
      "We foster a culture of teamwork, open communication, and mutual support to drive collective success.",
  },
  {
    title: "Excellence",
    description:
      "We strive for technical excellence, delivering high-quality solutions that meet the highest standards.",
  },
];

const ValuesAccordion = () => {
  return (
    <section className="bg-gray-100 bg-opacity-10 p-8 md:p-16 rounded-xl m-4 md:m-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
      {/* Left-hand text section (Accordion) */}
      <div className="lg:w-1/2 w-full">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#041e6f]">
          Our Core Values
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-0"
        >
          {coreValues.map((value, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-200"
            >
              <AccordionTrigger className="py-5 text-left hover:no-underline">
                <div className="flex items-center gap-4">
                  <span className="text-xl font-semibold text-gray-400">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800">
                    {value.title}
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg pb-5 pl-12">
                {value.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Right-hand image container */}
      <div className="lg:w-1/2 w-full">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team collaborating in an office"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ValuesAccordion;
