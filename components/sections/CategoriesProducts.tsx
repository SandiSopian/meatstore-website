import React from "react";
import Image from "next/image";
import { categories } from "@/data/categories";

const CategoriesProducts = () => {
  return (
    <>
      <ul className="grid grid-cols-2 gap-4 mt-4">
        {categories.map((category, id) => (
          <div
            key={id}
            className="category-card p-2 lg:p-6 lg:gap-3 h-40 xl:h-full bg-[#FFECEC] rounded-lg shadow-lg text-center items-center xl:justify-center flex flex-col xl:flex-row"
          >
            <figure className="mt-2 xl:mt-0 h-20 lg:h-[200px] w-20 lg:w-[500px] mx-auto relative xl:order-2">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="mx-auto rounded-full lg:rounded-xl shadow-lg object-cover"
              />
            </figure>

            <h3 className="mt-2 xl:text-2xl xl:font-semibold text-black xl:text-gray-800 xl:order-1">
              {category.title}
            </h3>
          </div>
        ))}
      </ul>
    </>
  );
};

export default CategoriesProducts;
