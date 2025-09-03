import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-6 bg-red-500 p-4">
      <NavLink />
    </nav>
  );
};

export default Navbar;
