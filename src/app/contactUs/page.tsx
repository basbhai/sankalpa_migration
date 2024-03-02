import { koho } from "@/components/utilityComponent/font";
import React from "react";
import { GiAbstract008 } from "react-icons/gi";
import { SlLocationPin } from "react-icons/sl";
import { BiSupport } from "react-icons/bi";
import { ContactDetails } from "@/Data/Data";
import ContactForm from "@/components/Contact";

const ContactUs = () => {
  return (
    <div className=" min-h-screen w-full flex flex-col lg:flex-row">
      {/* left side div */}
      <div className="w-full lg:w-1/2 flex items-center justify-center ">
        <div className=" w-[90%] flex border p-10 rounded-xl shadow ">
          <div className="flex w-full flex-col   justify-center">
            <div className="flex flex-row justify-center">
              <GiAbstract008 className="text-3xl text-blue-500" />
              <h1
                className={`${koho.className} text-xl lg:text-3xl text-blue-500 px-4 capitalize`}
              >
                {" "}
                Get in Touch
              </h1>
              <GiAbstract008 className="text-3xl text-blue-500" />
            </div>

            <div className=" flex justify-center">
              <h1
                className={`${koho.className} text-2xl lg:text-4xl text-blue-500 px-4 capialize`}
              >
                Contact Information
              </h1>
            </div>
            <div className="flex w-full py-4 justify-center">
              <span className="bg-red-500 w-[80%] h-[1px]   "></span>
            </div>
            {/* contact detail box */}
            <div className="flex w-full flex-col md:flex-row p-4 gap-3 bg-white">
              <div className=" w-full lg:w-1/2 h-full items-center justify-center flex-col flex shadow shadow-rose-500 rounded-lg ">
                <SlLocationPin className="text-[80px] text-green-500 my-8" />

                <h1
                  className={`${koho.className} text-xl text-blue-500 px-4 capialize`}
                >
                  Location
                </h1>
                <h3 className="text-blue-500 mb-5">{ContactDetails.Address}</h3>
              </div>
              {/* contact no */}
              <div className=" w-full lg:w-1/2 h-full items-center justify-center flex-col flex shadow shadow-rose-500 rounded-lg ">
                <BiSupport className="text-[80px] text-green-500 my-8" />

                <h1
                  className={`${koho.className} text-xl text-blue-500 px-4 capialize`}
                >
                  {ContactDetails.contactNo}
                </h1>
                <h3 className="text-blue-500 mb-5">{ContactDetails.EMail}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className=" w-[90%] flex border flex-col p-10 rounded-xl shadow bg-white">
          <div className="flex flex-row justify-center">
            <GiAbstract008 className="text-2xl text-blue-500" />
            <h1
              className={`${koho.className} text-xl lg:text-3xl text-blue-500 px-4 capitalize`}
            >
              {" "}
              Have any Question
            </h1>
            <GiAbstract008 className="text-2xl text-blue-500" />
          </div>

          <div className=" flex justify-center">
            <h1
              className={`${koho.className} text-2xl lg:text-4xl text-blue-500 px-4 capialize`}
            >
              Drop us a Line
            </h1>
          </div>
          <div className="flex w-full py-4 justify-center text-blue-500 text-center">
            Send us a Queries and we will get Back to you{" "}
          </div>
          <div className="flex w-full py-4 justify-center text-blue-500">
            <span className="bg-red-500 w-[80%] h-[1px]   "></span>
          </div>
          <div className="w-full shadow-xl rounded-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
