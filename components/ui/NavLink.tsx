"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHouseChimney,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

type NavLinkProps = {
  onLinkClick?: () => void;
};

const NavLink = ({ onLinkClick }: NavLinkProps) => {
  const pathname = usePathname();

  const links = [
    { name: "Beranda", path: "/", icon: faHouseChimney },
    { name: "Produk", path: "/products", icon: faCartShopping },
    { name: "Tentang", path: "/about", icon: faCircleInfo },
    { name: "Pesan", path: "/order", icon: faWhatsapp },
  ];

  return (
    <>
      {/* ✅ Mobile Navbar */}
      <ul className="flex xl:hidden mx-auto items-center justify-center gap-8 text-white text-base font-medium">
        {links.map(({ name, path, icon }) => (
          <li key={path}>
            <Link
              href={path}
              onClick={onLinkClick}
              className={`flex flex-col items-center gap-1 transition ${
                pathname === path ? "text-yellow-400" : "hover:text-gray-300"
              }`}
            >
              <FontAwesomeIcon icon={icon} className="w-6 h-6" />
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* ✅ Desktop Navbar */}
      <div className="hidden xl:flex items-center mx-auto justify-between w-full px-10">
        <div className="flex items-center">
          <Image
            src="/logoImg.png"
            alt="MeatStore Logo"
            width={50}
            height={50}
          />
          <h1 className="ml-2 text-white text-xl font-bold">
            Toko Daging Segar
          </h1>
        </div>

        <ul className="flex gap-10 text-white text-lg font-medium">
          {links.map(({ name, path }) => (
            <li key={path}>
              <Link
                href={path}
                onClick={onLinkClick}
                className={`transition ${
                  pathname === path ? "text-yellow-400" : "hover:text-gray-300"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavLink;
