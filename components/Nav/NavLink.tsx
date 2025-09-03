import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavLink = () => {
  return (
    <ul>
      <li>
        <FontAwesomeIcon icon={faCartShopping} />
        Beranda
      </li>
      <li>Produk</li>
      <li>Tentang</li>
      <li>Pesan</li>
    </ul>
  );
};

export default NavLink;
