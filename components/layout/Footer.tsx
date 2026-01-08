import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mb-18 lg:mb-0 bg-red-500 text-white p-6 lg:px-24 lg:h-100 text-center lg:text-left flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-3">
      <div className="lg:mb-40 gap-2 flex flex-col">
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

        <Link
          href="https://maps.app.goo.gl/iGr5jFnTjXJeRKNS7"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden mt-2 underline font-bold text-sm hover:text-gray-200"
        >
          Lihat di Google Maps
        </Link>
      </div>

      <div className="hidden md:block w-full lg:w-1/2">
        <div className="font-semibold mb-2">Lihat di Google Maps</div>

        <div className="w-full h-64 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.67122207114!2d107.7592202!3d-7.0478665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c175ad02e7a9%3A0x5f4b7995b6c5f5f3!2sPasar%20Bingung!5e0!3m2!1sen!2sid!4v1767846069421!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
