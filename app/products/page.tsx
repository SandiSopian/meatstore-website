"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../../data/products";
import { categories } from "@/data/categories";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | "all">(
    "all"
  );

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.categoryId === selectedCategory);

  return (
    <section className="min-h-screen flex flex-col">
      <h1 className="text-xl font-semibold mt-4 ml-4">
        Daging Segar Setiap Hari
      </h1>

      {/* FILTER BUTTON */}
      <div className="flex gap-2 mt-4 mx-2 flex-wrap">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-1 rounded ${
            selectedCategory === "all"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Semua
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-1 rounded ${
              selectedCategory === cat.id
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* PRODUCT LIST */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mx-2">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-md flex flex-col dark:bg-cream"
          >
            <div className="relative w-full h-40 rounded-lg flex items-center justify-center dark:bg-white">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain rounded-lg p-3"
              />
            </div>

            <h2 className="mt-3 text-black text-sm text-center font-medium">
              {product.name}
            </h2>

            <div className="mt-auto flex flex-col gap-2">
              <p className="text-red-500 mt-2 font-bold text-center">
                Rp {new Intl.NumberFormat("id-ID").format(product.price) + ",-"}
                /kg
              </p>

              <div className="flex items-center justify-center">
                <Link href={`/products/${product.slug}`}>
                  <button className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600">
                    Detail
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
