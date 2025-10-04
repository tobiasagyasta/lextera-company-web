// components/LogoCarousel.jsx
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/logos/telkomsel.png", alt: "Logo Telkomsel" },
  { src: "/logos/indosat.png", alt: "Logo Indosat" },
  { src: "/logos/huawei.png", alt: "Logo Huawei" },
  { src: "/logos/zte.png", alt: "Logo ZTE" },
  { src: "/logos/ericsson.png", alt: "Logo Ericsson" },
  { src: "/logos/bali.png", alt: "Logo Bali Tower" },
  { src: "/logos/ap2.png", alt: "Logo Angkasa Pura" },

  // Add more logos here
];

const LogoCarousel = () => {
  return (
    <div className="w-full py-8 h-36 my-16">
      <div className="flex relative overflow-hidden h-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r  before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l  after:content-['']">
        <motion.div
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          initial={{ translateX: 0 }}
          animate={{ translateX: "-50%" }}
          className="flex flex-none gap-16 pr-16"
        >
          {[...new Array(2)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {logos.map(({ src, alt }) => (
                <Image
                  key={alt}
                  src={src}
                  alt={alt}
                  width={140}
                  height={60}
                  className="h-12 md:h-20 w-auto flex-none grayscale-75 hover:grayscale-0"
                />
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoCarousel;
