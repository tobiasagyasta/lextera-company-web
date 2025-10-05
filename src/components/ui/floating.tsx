// FloatingIcon.js
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react"; // As an example icon

const FloatingIcon = ({ icon: IconComponent = ChevronDown, size = 48 }) => {
  return (
    // 1. Use the motion.div component to make the div animatable
    <motion.div
      // 2. Define the animation keyframes
      animate={{
        y: [-5, 5], // Animate `y` from -5px to 5px
      }}
      // 3. Define the transition properties for a smooth, infinite loop
      transition={{
        duration: 2, // The duration of one full cycle (up and down)
        repeat: Infinity, // Repeat the animation forever
        repeatType: "mirror", // Make it go back and forth smoothly
        ease: "easeInOut", // A gentle easing for a natural float
      }}
    >
      <IconComponent size={size} />
    </motion.div>
  );
};

export default FloatingIcon;
