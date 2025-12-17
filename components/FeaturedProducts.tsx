import React from "react";
import Image from "next/image";
import { featuredData } from "@/data/homepageData";

const FeaturedProducts = () => {
  return (
    <div>
      <h2 className="mt-10">Produk Unggulan</h2>
      <ul className="flex flex-col ">
        {featuredData.map((product) => (
          <div key={product.id}>
            <div className="flex w-full items-center gap-6 dark:bg-[#FFF4F4] rounded-lg shadow-lg p-4 mt-4">
              <div>
                <Image
                  src={product.img}
                  alt={product.name}
                  width={110}
                  height={100}
                  className="rounded-lg m-1"
                />
              </div>

              <div>
                <h3 className="text-black">{product.name}</h3>
                <p className="text-red-500 font-bold">{product.price}</p>
                <div className="bg-green-500 text-white text-center p-1 rounded-lg w-40 mt-2 cursor-pointer">
                  Pesan via WhatsApp
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedProducts;
