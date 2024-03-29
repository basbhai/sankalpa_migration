"use client";
import React from "react";
import PracticeArea from "../PracticeArea";
import PracticeButton from "./PracticeButton";
import { cardVariants } from "@/Data/Data";
import { motion } from "framer-motion";

interface Props {
  id: number;
  src: string;
  alt: string;
  desc: string;
  title: string;
  tags?: string[];
}

const AnimatedCard: React.FC<Props> = ({ id, src, alt, desc, title, tags }) => {
  const truncatedDesc = desc.length > 80 ? `${desc.slice(0, 80)}...` : desc;
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{
        once: true,
      }}
      custom={id}
      className="card-container h-full flex flex-col justify-between"
    >
      <div className="max-w-sm overflow-hidden shadow-lg shadow-red-300 rounded-xl">
        <img className="w-full" src={src} alt={alt} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-500">{title}</div>
          <p className="text-gray-700 text-base">{truncatedDesc}</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex flex-wrap">
          {tags ? (
            tags.map((tag, index) => (
              <span
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 lg:w-1/4"
                key={index}
              >
                {tag}
              </span>
            ))
          ) : (
            <div className="flex w-full justify-center">
              <PracticeButton
                id={id}
                desc="Read More"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
