import React from "react";
import Image from "next/image";

const FeaturedProducts = () => {
  return (
    <div>
      <h2 className="mt-10">Produk Unggulan</h2>
      <div className="flex flex-col ">
        <div className="flex w-full items-center gap-6 dark:bg-[#FFF4F4] rounded-lg shadow-lg p-4 mt-4">
          <div>
            <Image
              src="/chicken-meat.png"
              alt="Daging Ayam"
              width={110}
              height={100}
              className="rounded-lg m-1"
            />
          </div>

          <div>
            <h3 className="text-black">Daging Ayam 1Kg</h3>
            <p className="text-red-500 font-bold">Rp 30.000</p>
            <div className="bg-green-500 text-white text-center p-1 rounded-lg w-40 mt-2 cursor-pointer">
              Pesan via WhatsApp
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
