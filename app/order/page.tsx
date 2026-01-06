import React from "react";
import { orderPage } from "@/data/order";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/ui/Button";
import Link from "next/link";

const Order = () => {
  return (
    <div className="min-h-screen flex flex-col items-center gap-10 p-4 mt-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl text-red-500 dark:text-white font-bold">
          {orderPage.title}
        </h1>
        <p className="mx-auto max-w-xs">{orderPage.description}</p>
      </div>

      <ul className="flex flex-col items-start text-left gap-4 max-w-xs mx-auto">
        <li className="flex items-center">
          <span className="border py-1 px-2 bg-gray-300 font-bold mr-2">1</span>
          <span>Pilih produk di halaman Produk</span>
        </li>

        <li className="flex items-center">
          <span className="border py-1 px-2 bg-gray-300 font-bold mr-2">2</span>
          <span>Klik tombol WhatsApp di produk atau di bawah ini</span>
        </li>

        <li className="flex items-center">
          <span className="border py-1 px-2 bg-gray-300 font-bold mr-2">3</span>
          <span>Chat otomatis akan terbuka di WhatsApp</span>
        </li>

        <li className="flex items-center">
          <span className="border py-1 px-2 bg-gray-300 font-bold mr-2">4</span>
          <span>Konfirmasi pesanan & alamat → Kami antar ke rumah Anda 🚚</span>
        </li>
      </ul>

      <Button>
        <Link href="/products" className="flex items-center font-bold">
          <FontAwesomeIcon icon={faHandPointRight} />
          <span className="ml-2">Lihat Produk</span>
        </Link>
      </Button>
    </div>
  );
};

export default Order;
