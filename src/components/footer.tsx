"use client";

import { Separator } from "@radix-ui/react-separator";
import React from "react";
import { Icons } from "./icons";
import Link from "next/link";

const socialLinks = [
  {
    link: "https://github.com/Ekep-Obasi",
    icon: <Icons.gitHub />,
    ariaLable: "View my Github",
  },
  {
    link: "",
    icon: <Icons.linkedIn />,
    ariaLable: "View my Github",
  },
  {
    link: "",
    icon: <Icons.twitter />,
    ariaLable: "View my Twitter",
  },
];

const Footer = () => {
  return (
    <footer className="py-8 mt-[100px] flex flex-col w-full items-center space-y-4">
      <Separator />
      <span className="text-blue-200">Built with 💖 by @Ekep-Obasi</span>
      <div className="flex flex-row space-x-4">
        {socialLinks.map((link) => (
          <Link key={link.link} href={link.link} aria-label={link.ariaLable}>
            {link.icon}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
