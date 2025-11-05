import React from "react";
import Image from "next/image";

const CategoriesProducts = () => {
  return (
    <div>
      <h2 className="mt-5">Kategori Daging Segar</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        <div className="category-card p-4 h-40 bg-[#FFECEC] rounded-lg shadow-lg text-center">
          <Image
            src="/meat-rib.png"
            alt="Daging Sapi"
            width={100}
            height={100}
            className="mx-auto rounded-full"
          />
          <h3 className="mt-2 text-black">Daging Sapi</h3>
        </div>

        <div className="category-card p-4 h-40 bg-[#FFECEC] rounded-lg shadow-lg text-center">
          <div className="bg-white rounded-full p-2 inline-block">
            <Image
              src="/chicken-meat.png"
              alt="Daging Ayam"
              width={100}
              height={100}
            />
          </div>
          <h3 className="mt-2 text-black">Daging Ayam</h3>
        </div>

        <div className="category-card p-4 h-40 bg-[#FFECEC] rounded-lg shadow-lg text-center">
          <Image
            src="/meat-rib.png"
            alt="Daging Sapi"
            width={100}
            height={100}
            className="mx-auto rouneded-full"
          />
          <h3 className="mt-2 text-black">Daging Sapi</h3>
        </div>
      </div>
    </div>
  );
};

export default CategoriesProducts;
