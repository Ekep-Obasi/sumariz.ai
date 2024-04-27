import React from "react";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="w-full">
      <div className="bg-red">Logo</div>
      <div>
        <Button>Login</Button>
      </div>
    </header>
  );
}

export default Header;
