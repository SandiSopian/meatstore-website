import React from "react";
import NavLink from "../ui/NavLink";

const Navbar = () => {
  return (
    <nav className="flex fixed z-10 bottom-0 inset-x-0 items-center justify-around bg-red-500 p-4 text-white lg:static">
      <NavLink />
    </nav>
  );
};

export default Navbar;
