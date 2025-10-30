import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="flex mx-auto items-center gap-6 bg-red-500 p-4 absolute inset-x-0 bottom-0 lg:relative lg:top-0 overflow-hidden lg:overflow-visible">
      <NavLink />
    </nav>
  );
};

export default Navbar;
