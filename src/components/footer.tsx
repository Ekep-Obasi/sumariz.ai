"use client";

import { Separator } from "@radix-ui/react-separator";
import React from "react";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const socialLinks = [
  {
    link: "https://github.com/Ekep-Obasi",
    icon: <GitHubLogoIcon height={25} width={25} />,
    ariaLable: "View my Github",
  },
  {
    link: "https://www.linkedin.com/in/arrey-etta",
    icon: <LinkedInLogoIcon height={25} width={25} />,
    ariaLable: "View my Linkedin",
  },
  {
    link: "https://twitter.com/ArreyEkep",
    icon: <TwitterLogoIcon height={25} width={25} />,
    ariaLable: "View my Twitter",
  },
];

const Footer = () => {
  return (
    <footer className="py-8 mt-[100px] flex flex-col w-full items-center space-y-6">
      <Separator className="shrink-0 bg-border h-[1px] w-full" />
      <span className="text-md text-secondary-foreground">
        Built with 💖 by Ekep-Obasi
      </span>
      <div className="flex flex-row space-x-4">
        {socialLinks.map((link) => (
          <Link
            target="_blank"
            key={link.link}
            href={link.link}
            aria-label={link.ariaLable}
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
