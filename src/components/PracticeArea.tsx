import React from "react";
import { InitativesData, PracticeAreaData } from "@/Data/Data";
import AnimatedCard from "./utilityComponent/AnimatedCard";
import { GiFallingStar } from "react-icons/gi";
import { koho } from "./utilityComponent/font";

const PracticeArea = () => {
  return (
    <div className="w-full  bg-white flex items-center justify-center relative">
      <div className="w-full lg:min-h-screen   flex flex-col justify-center  bg-gradient-to-br from-white to-yellow-100 mx-4 sm:mx-8 md:mx-12 lg:mx-20 border rounded-md shadow-xl relative  ">
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
        <div className="flex flex-row justify-center w-full my-4 z-10  ">
          <GiFallingStar className=" text-blue-500 text-3xl" />
          <h1 className="text-blue-500 text-3xl font-ojuju py-4">
            Area of work
          </h1>
          <GiFallingStar className=" text-blue-500 text-3xl" />
        </div>
        <div className="flex justify-center py-4 ">
          <p
            className={`${koho.className} text-2xl font-bold text-center lg:text-5xl text-blue-500 font-sans z-40`}
          >
            <strong>
              <b>Practice Area</b>
            </strong>
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
                id={data.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeArea;
