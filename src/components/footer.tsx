import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex items-center  w-full py-6 text-center border-t  border-blue-gray-50 md:justify-center">
      <div className="w-[90%] flex items-center flex-col lg:flex-row ">
        <div className=" w-full lg:w-1/2 flex lg:justify-start justify-center  text-black">
          {currentYear} © Sankalpa Legal
        </div>
        <div className=" w-full lg:w-1/2 flex lg:justify-end justify-center text-black">
          <div className="text-black flex flex-row">
            <h1 className="text-base">
              {" "}
              Developed by
              <Link
                href="https://basantastha.com.np"
                className="hover:text-blue-500 text-green-500"
              >
                &nbsp;Basanta Shrestha{" "}
              </Link>
            </h1>
          </div>
        </div>
      </div>

      {/* <div className="w-[90%] ">
        <p className="block font-sans text-base text-left antialiased font-normal leading-relaxed text-blue-gray-900">
          {currentYear} © Sankalpa Legal
        </p>
        <div className="flex  items-center  gap-y-2 gap-x-8">
          <div className="text-black">
            Developed By
            <Link
              href="https://basantastha.com.np"
              className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500"
            >
              <h1 className="text-2xl"> Basanta Shrestha</h1>
            </Link>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
