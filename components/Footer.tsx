import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="mb-18 bg-red-500 text-white p-6 text-center flex flex-col items-center justify-center gap-3">
      <h1 className="text-2xl font-bold mb-2">Hubungi Kami</h1>

      <div className="flex flex-col items-start text-left">
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faPhone} className="text-sm w-4" />
          <span>+62 847-7878-8787</span>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <FontAwesomeIcon icon={faLocationDot} className="text-sm w-4" />
          <span>Jakarta Barat</span>
        </div>
      </div>

      <a
        href="#"
        className="mt-1 underline font-bold text-sm hover:text-gray-200"
      >
        Lihat di Google Maps
      </a>
    </footer>
  );
};

export default Footer;
