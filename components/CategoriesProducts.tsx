import React from "react";
import Image from "next/image";
import { categoriesData } from "@/data/homepageData";

const CategoriesProducts = () => {
  return (
    <div>
      <h2 className="mt-5">Kategori Daging Segar</h2>
      <ul className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        {categoriesData.map((category, id) => (
          <div
            key={id}
            className="category-card p-2 h-40 bg-[#FFECEC] rounded-lg shadow-lg text-center"
          >
            <figure className="bg-white p-1 rounded-full">
              <Image
                src={category.img}
                alt={category.title}
                width={100}
                height={100}
                className="mx-auto rounded-full w-20 h-20 object-cover"
              />
            </figure>

            <h3 className="mt-2 text-black">{category.title}</h3>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesProducts;
