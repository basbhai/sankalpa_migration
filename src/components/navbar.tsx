"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/Assets/logo.png";
import Link from "next/link";
interface Link {
  url: string;
  title: string;
}
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiYoutube } from "react-icons/si";
import NavLink from "./navLink";

const links: Link[] = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/upCommingProject", title: "Upcoming Projects" },
  { url: "/contactUs", title: "Contact Us" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className=" flex w-full h-full  items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 
     py-4 md:py-8 
    "
    >
      {/* Menu list non-mobile */}
      <div className="hidden md:flex  gap-4  xl:text-base w-[40%] justify-start">
        {links.map((link, index) => (
          <NavLink link={link} key={index} />
        ))}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex xl:w-[20%] xl:justify-center">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            className="bg-white w-16 sm:w-20 md:w-24 lg:w-28 rounded-3xl
            hover:scale-[1.01] ease
          "
          />
        </Link>
      </div>
      {/* icons */}
      <div className="hidden md:flex flex-row gap-8 w-[40%] justify-end">
        <Link href="#">
          <FaFacebook className="text-3xl text-blue-500" />
        </Link>
        <Link href="#">
          <FaXTwitter className="text-3xl text-white" />
        </Link>
        <Link href="#">
          <SiYoutube className="text-3xl text-red-600" />
        </Link>
        <Link href="#">
          <FaLinkedin className="text-3xl text-blue-300" />
        </Link>
      </div>
      {/* Responsive menu */}
      <div className="md:hidden justify-center">
        {/* Menu Button */}
        <button
          title="toogle button"
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={handleClick}
        >
          <div className="w-10 h-1 bg-white rounded" />
          <div className="w-10 h-1 bg-white rounded" />
          <div className="w-10 h-1 bg-white rounded" />
        </button>

        {/* Menu List for mobile */}

        {open && (
          <div
            className=" absolute top-0 left-0 w-screen h-screen bg-slate-400 text-black
        flex flex-col items-center justify-center gap-8 text-xl
        "
          >
            {links.map((link, index) => (
              <Link href={link.url} key={index} onClick={handleClick}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
