import React from "react";
import Image from "next/image";
import { categories } from "@/data/categories";

const CategoriesProducts = () => {
  return (
    <>
      <ul className="grid grid-cols-3 gap-4 mt-4">
        {categories.map((category, id) => (
          <div
            key={id}
            className="category-card p-2 h-40 xl:h-full bg-[#FFECEC] rounded-lg shadow-lg text-center items-center xl:justify-center flex flex-col xl:flex-row"
          >
            <figure className="bg-white mt-2 xl:mt-0 rounded-full h-20 xl:h-40 w-20 xl:w-40 mx-auto relative xl:order-2">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="mx-auto rounded-full object-cover xl:p-4"
              />
            </figure>

            <h3 className="mt-2 xl:ml-10 xl:text-2xl xl:font-semibold text-black xl:text-gray-800 xl:order-1">
              {category.title}
            </h3>
          </div>
        ))}
      </ul>
    </>
  );
};

export default CategoriesProducts;
