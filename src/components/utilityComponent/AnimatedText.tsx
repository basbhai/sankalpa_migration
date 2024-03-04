import React from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const quote: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const singleWord: Variants = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
}) => {
  return (
    <div
      className="w-full mx-auto py-2 flex items-center justify-center 
      text-center overflow-hidden sm:py-0"
    >
      <motion.h1
        className={`inline-block 
        font-bold capitalize ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word: string, index: number) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
