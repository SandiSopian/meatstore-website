import React from "react";
import Image from "next/image";
import { products } from "@/data/products";
import { aboutData } from "@/data/home";

const FeaturedProducts = () => {
  return (
    <div>
      <h2 className="mt-10">Produk Unggulan</h2>
      <ul className="flex flex-col ">
        {products.slice(0, 4).map((product) => (
          <div key={product.id}>
            <div className="flex w-full items-center gap-6 dark:bg-[#FFF4F4] rounded-lg shadow-lg p-4 mt-4">
              <div>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={110}
                  height={100}
                  className="rounded-lg m-1"
                />
              </div>

              <div>
                <h3 className="text-black">{product.name}</h3>
                <p className="text-red-500 font-bold">{product.price}</p>
                <a
                  href={`https://wa.me/${aboutData.contactWa}?text=Halo,%20saya%20ingin%20memesan%20produk%20${product.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white text-center p-1 rounded-lg w-40 mt-2 cursor-pointer block"
                >
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedProducts;
