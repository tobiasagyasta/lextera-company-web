"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 80 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
};
export default Section;
