"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// Define an interface for the link object
interface NavLinkProps {
  link: {
    url: string;
    title: string;
  };
}

const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded p-1 ${
        pathName === link.url && "bg-white text-black"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
