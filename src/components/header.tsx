import React from "react";
import { ModeToggle } from "./theme/button";
import { Separator } from "./ui/separator";
import IconButton from "./icon-button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

function Header() {
  const githubLink = "https://github.com/Ekep-Obasi/sumariz.ai";

  return (
    <header className="w-full flex flex-col justify-center sticky top-0 z-50 bg-inherit">
      <div className="flex flex-row justify-between items-center px-8 py-4">
        <span className="text-xl md:text-3xl font-bold dark:text-white text-center">
          SUMARIZ.AI
        </span>
        <div className="flex flex-row space-x-3 items-center">
          <Link href={githubLink} target="_blank">
            <IconButton text="Contribute" variant="ghost">
              <GitHubLogoIcon width={25} height={25} />
            </IconButton>
          </Link>
          <ModeToggle />
        </div>
      </div>
      <Separator />
    </header>
  );
}

export default Header;
