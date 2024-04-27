import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme/button";
import { Separator } from "./ui/separator";
import IconButton from "./icon-button";
import { Icons } from "./icons";
import Link from "next/link";

function Header() {
  const githubLink = "https://gihub.com/Ekep-Obasi/sumariz.ai";

  return (
    <header className="w-full flex flex-col justify-center">
      <div className="flex flex-row justify-between px-8 py-4">
        <div className="text-2xl md:text-3xl font-bold dark:text-white text-center">
          SUMARIZ.AI
        </div>
        <div className="flex flex-row space-x-3 items-center">
          <Link href={githubLink}>
            <IconButton text="Contribute" variant="link">
              <Icons.gitHub />
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
