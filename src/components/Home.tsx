"use client";
import React from "react";
import Hero from "@/Assets/Hero.jpeg";
import Image from "next/image";
import { InitativesData, PracticeAreaData } from "@/Data/Data";
import AnimatedCard from "./utilityComponent/AnimatedCard";
import { GiFallingStar } from "react-icons/gi";
import { koho } from "./utilityComponent/font";
import PracticeArea from "./PracticeArea";
import ContactUs from "@/app/contactUs/page";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "./utilityComponent/AnimatedText";
import { rightcomVariant, leftComVariant } from "@/Data/Data";

const HomePage = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <React.Fragment>
      {/* hero section */}
      <motion.div
        style={{ y }}
        className=" w-full h-[calc(100vh-4rem)] bg-bgPic bg-black bg-no-repeat bg-cover flex justify-start items-center lg:bg-contain bg-center relative"
      >
        <div className="w-full lg:w-1/3 h-full flex items-start lg:items-center">
          <div className="w-full h-full flex items-start pt-16 lg:items-center justify-cente p-4">
            <AnimatedText
              text="Good laws lead to the making of better ones; bad ones bring about worse!!! "
              className={`${koho.className}  lg:text-5xl text-2xl text-blue-500 shadow-5xl shadow-white`}
            />
          </div>
        </div>
      </motion.div>
      {/* Message  */}
      <div className="w-full  bg-white flex items-center justify-center relative">
        <div className="w-full lg:h-[calc(100vh-4rem)] flex flex-col lg:flex-row bg-gradient-to-br from-white to-yellow-100 mx-4 sm:mx-8 md:mx-12 lg:mx-20 border rounded-md shadow-xl relative  ">
          {/* Image Section */}
          <motion.div
            variants={leftComVariant}
            initial="initial"
            whileInView="whileInView"
            viewport={{
              once: true,
            }}
            className="w-full lg:w-1/2 h-full flex justify-end items-center"
          >
            <div className="p-14 w-full lg:w-[90%]   ">
              <Image
                src={Hero}
                alt="Md"
                className=" lg:rounded-s-full rounded-l-full  shadow-red-800  shadow-2xl border-x-8 border-black lg:mb-8"
              />
            </div>
          </motion.div>
          {/* short description`` */}
          <motion.div
            variants={rightcomVariant}
            initial="initial"
            whileInView="whileInView"
            viewport={{
              once: true,
            }}
            className="lg:w-1/2 w-full h-full flex  justify-between items-start lg:items-center z-10"
          >
            <div className="">{/* if any thing rquired */}</div>
            <div className="flex flex-col  w-fulllg:h-3/4 p-4 bg-transparent lg:bg-white mx-0 lg:mx-8 rounded-2xl shadow-orange-600 shadow-2xl">
              <h1
                className={` ${koho.className}  text-xl md:text-2xl lg:text-3xl xl:text-4xl align-middle text-center font-extrabold text-blue-500`}
              >
                Driven by Justice, Empowered by Strategy: Advocates for Rights
                and Equity
              </h1>
              <span className="h-[2px] bg-red-600 my-8"></span>
              <p className="text-black/70 lg:text-xl text-center font-ojuju">
                Leveraging its wealth of experience across a spectrum of civil,
                commercial, and Public Interest Litigation cases, our firm
                epitomizes a unique acumen in scrutinizing case details. This
                expertise enables us to craft and execute decisions and
                strategies that not only safeguard our clients interests but
                also facilitate the realization of their goals with efficiency
                and precision.
              </p>
            </div>
          </motion.div>

          {/* Book Shape design
          will come from css */}
          <div className="custom-shape-divider-bottom-1709218051 hidden lg:flex -z-2">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {/* Initiative section */}
      <div className="w-full  bg-white flex items-center justify-center relative">
        <div className="w-full lg:min-h-screen  flex flex-col justify-center  bg-gradient-to-br from-white to-yellow-100 mx-4 sm:mx-8 md:mx-12 lg:mx-20 border rounded-md shadow-xl relative  ">
          <div className="custom-shape-divider-top-1709286379 -z-9">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <div className="flex flex-row justify-center w-full z-40 my-4 ">
            <GiFallingStar className=" text-blue-500 text-3xl" />
            <h1 className="text-blue-500 text-3xl">Our Initiatives</h1>
            <GiFallingStar className=" text-blue-500 text-3xl" />
          </div>
          <div className="flex justify-center py-4 ">
            <p
              className={`${koho.className} text-2xl font-bold text-center lg:text-5xl text-blue-500 font-sans z-40`}
            >
              <strong>
                <b>Our Passion for Justice Never Changes</b>
              </strong>
            </p>
          </div>

          <div className="flex w-full  flex-col lg:flex-row flex-wrap items-center justify-center mt-0 lg:mt-16 gap-3 z-40">
            {InitativesData.map((data, index) => (
              <div
                className="flex items-center bg-white p-8 mb-8 rounded-ss-full border-r rounded-ee-full "
                key={index}
              >
                <AnimatedCard
                  src={data.src}
                  title={data.title}
                  desc={data.desc}
                  tags={data.tags}
                  alt={data.alt}
                  id={data.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Practice Area data */}

      <PracticeArea />
      <ContactUs />
    </React.Fragment>
  );
};

export default HomePage;
