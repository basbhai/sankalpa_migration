"use client";
import React from "react";
import { PracticeAreaData } from "@/Data/Data";

import { koho } from "@/components/utilityComponent/font";
import Link from "next/link";
import PracticeButton from "@/components/utilityComponent/PracticeButton";
import Image from "next/image";
import { motion } from "framer-motion";
import { keyVarients } from "@/Data/Data";

interface PracticeAreaProps {
  params: { id: string }; // Adjust the type accordingly
}

const PracticeArea: React.FC<PracticeAreaProps> = ({ params }) => {
  const sortedData = PracticeAreaData.map(({ id, title }) => ({
    id,
    title,
  })).sort((a, b) => a.title.localeCompare(b.title));
  console.log(sortedData);
  const service = PracticeAreaData.find(
    (res) => res.id === parseInt(params.id)
  );

  return (
    <div className="w-full min-h-screen flex flex-row justify-center  ">
      <div className=" w-full lg:w-[90%] flex flex-row">
        {/* side simple navbar for desktop */}
        <div className="hidden lg:flex w-1/4 flex-col min-h-screen bg-slate-600/10 px-4">
          <div className="h-10rem ">
            <strong>
              {" "}
              <h1 className={`${koho.className} text-3xl my-10 text-blue-500`}>
                {" "}
                Our Practice Area
              </h1>
            </strong>
          </div>
          {sortedData.map((data, index) => (
            <div key={index} className="flex ">
              <PracticeButton
                id={data.id}
                desc={data.title}
                className={`${
                  data.title === service?.title
                    ? "bg-blue-500  rounded-lg p-4 text-white  "
                    : ""
                } ml-4 py-2 text-black w-full text-2xl text-left `}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col w-full p-4 lg:w-3/4 bg-black/5 min-h-screen">
          {/* Title */}
          <div className="flex w-full flex-col">
            <div
              className={` text-blue-500 w-full flex justify-center text-3xl lg:text-5xl ${koho.className} my-10 `}
            >
              <h1>{service?.title}</h1>
            </div>
            {/* image area */}
            <div className=" w-full md:w-[90%] lg:w-1/2 p-8 rounded ">
              <img
                src={service?.src}
                alt={service?.alt}
                className=" shadow-xl  shadow-red-600 rounded-3xl"
              />
            </div>
          </div>
          <div className="text-black p-2">
            {service &&
              service.services &&
              Object.keys(service.services).map((key, id) => (
                <motion.div
                  key={key}
                  variants={keyVarients}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{
                    once: true,
                  }}
                  custom={id}
                  className="text-xl pt-4"
                >
                  <strong className="text-2xl text-blue-500">{key}:</strong>{" "}
                  <br />
                  <p className="text-black/75">{service.services[key]}</p>
                </motion.div>
              ))}
          </div>
          {/* mobile navigation */}
          <div className=" lg:hidden flex flex-wrap  bg-white p-4 rounded-lg shadow-2xl">
            {sortedData.map((data, index) => (
              <div key={index} className="flex ">
                <PracticeButton
                  id={data.id}
                  desc={data.title}
                  className={`${
                    data.title === service?.title
                      ? "bg-blue-500  rounded-lg p-2  "
                      : "bg-green-500 gap-3 p-2"
                  } m-2 w-full text-sm text-left rounded-lg  text-white `}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeArea;
