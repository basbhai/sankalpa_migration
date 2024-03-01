import React from "react";
import Hero from "@/Assets/Hero.jpeg";
import Image from "next/image";
import { InitativesData, PracticeAreaData } from "@/Data/Data";
import AnimatedCard from "./utilityComponent/AnimatedCard";
import { GiFallingStar } from "react-icons/gi";

const HomePage = () => {
  return (
    <React.Fragment>
      {/* hero section */}
      <div className=" w-full h-[calc(100vh-4rem)] bg-bgPic bg-no-repeat bg-cover flex justify-center lg:bg-contain bg-center relative">
        HomePage
      </div>
      {/* Message  */}
      <div className="w-full  bg-white flex items-center justify-center relative">
        <div className="w-full lg:h-[calc(100vh-4rem)] flex flex-col lg:flex-row bg-gradient-to-br from-white to-yellow-100 mx-4 sm:mx-8 md:mx-12 lg:mx-20 border rounded-md shadow-xl relative  ">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-full flex justify-end items-center">
            <div className="p-14 w-full lg:w-[90%]   ">
              <Image
                src={Hero}
                alt="Md"
                className=" lg:rounded-s-full rounded-l-full  shadow-red-800  shadow-2xl border-x-8 border-black lg:mb-8"
              />
            </div>
          </div>
          {/* short description`` */}
          <div className="lg:w-1/2 w-full h-full flex  justify-between items-start lg:items-center">
            <div className="">{/* if any thing rquired */}</div>
            <div className="flex flex-col  w-fulllg:h-3/4 p-4 bg-transparent lg:bg-white mx-0 lg:mx-8 rounded-2xl shadow-orange-600 shadow-2xl">
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl align-middle text-center font-extrabold text-black/75">
                Driven by Justice, Empowered by Strategy: Advocates for Rights
                and Equity
              </h1>
              <span className="h-[2px] bg-red-600 my-8"></span>
              <p className="text-black/70 lg:text-xl text-center">
                Leveraging its wealth of experience across a spectrum of civil,
                commercial, and Public Interest Litigation cases, our firm
                epitomizes a unique acumen in scrutinizing case details. This
                expertise enables us to craft and execute decisions and
                strategies that not only safeguard our clients interests but
                also facilitate the realization of their goals with efficiency
                and precision.
              </p>
            </div>
          </div>

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
          <div className="flex flex-row justify-center w-full z-40 ">
            <GiFallingStar className=" text-blue-500 text-3xl" />
            <h1 className="text-blue-500 text-3xl">Our Initiatives</h1>
            <GiFallingStar className=" text-blue-500 text-3xl" />
          </div>
          <div className="flex justify-center py-4 ">
            <p className="text-2xl text-center lg:text-5xl text-blue-500 font-sans z-40">
              Our Passion for Justice Never Changes
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
                />
              </div>
            ))}
            p
          </div>
        </div>
      </div>
      {/* Practice Area data */}
      <div className="w-full  bg-white flex items-center justify-center relative">
        <div className="w-full lg:min-h-screen   flex flex-col justify-center  bg-gradient-to-br from-white to-yellow-100 mx-4 sm:mx-8 md:mx-12 lg:mx-20 border rounded-md shadow-xl relative  ">
          <div className="custom-shape-divider-top-1709286379 -z-2">
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
          <div className="flex flex-row justify-center w-full my-4 ">
            <GiFallingStar className=" text-blue-500 text-3xl" />
            <h1 className="text-blue-500 text-3xl">Area of work</h1>
            <GiFallingStar className=" text-blue-500 text-3xl" />
          </div>
          <div className="flex justify-center py-4 ">
            <p className="text-2xl text-center lg:text-5xl text-blue-500 font-sans">
              Practice Area
            </p>
          </div>

          <div className="flex w-full  flex-col lg:flex-row flex-wrap items-center justify-center mt-0 lg:mt-16 gap-3 relative">
            {PracticeAreaData.map((data, index) => (
              <div
                className="flex items-center  bg-white p-8 mb-8 rounded-ss-full border-r rounded-ee-full "
                key={index}
              >
                <AnimatedCard
                  src={data.src}
                  title={data.title}
                  desc={data.desc}
                  tags={undefined}
                  alt={data.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
