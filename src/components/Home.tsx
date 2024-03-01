import React from "react";
import Hero from "@/Assets/Hero.jpeg";
import Image from "next/image";
const HomePage = () => {
  return (
    <React.Fragment>
      {/* hero section */}
      <div className=" w-full h-[calc(100vh-4rem)] bg-bgPic bg-no-repeat bg-cover flex justify-center lg:bg-contain bg-center relative">
        HomePage
      </div>
      {/* Message  */}
      <div className="w-full mt-4 bg-white flex items-center justify-center relative">
        <div className="w-full lg:h-[calc(100vh-4rem)] flex flex-col lg:flex-row bg-gradient-to-br from-green-300 to-yellow-200 mx-4 sm:mx-8 md:mx-12 lg:mx-20 border border-black rounded-md shadow-xl relative  ">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-full flex justify-end items-center">
            <div className="p-14 w-full  ">
              <Image
                src={Hero}
                alt="Md"
                className=" lg:rounded-s-full rounded-l-full  shadow-red-800  shadow-2xl border-x-8 border-black"
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
                strategies that not only safeguard our clients' interests but
                also facilitate the realization of their goals with efficiency
                and precision.
              </p>
            </div>
          </div>

          {/* Book Shape design
          will come from css */}
          <div className="custom-shape-divider-bottom-1709218051 hidden lg:flex">
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
    </React.Fragment>
  );
};

export default HomePage;
