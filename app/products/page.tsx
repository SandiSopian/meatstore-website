import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../../data/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { aboutData } from "@/data/home";

const Products = () => {
  return (
    <>
      <h1 className="text-xl font-semibold">Daging Segar Setiap Hari</h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mx-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-md flex flex-col dark:bg-cream "
          >
            {/* PRODUCT IMAGE */}
            <div className="relative w-full h-40 rounded-lg flex items-center justify-center dark:bg-white ">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain rounded-lg p-3"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 300px"
              />
            </div>

            {/* PRODUCT NAME */}
            <h2 className="mt-3 text-black text-sm font-medium ">
              {product.name}
            </h2>

            {/* PRICE & WHATSAPP */}
            <div className="mt-auto flex flex-col gap-2">
              <p className="text-red-500 mt-2 font-bold">
                Rp. {product.price}/kg
              </p>

              <div className="flex justify-between">
                <Link href={`/products/${product.slug}`}>
                  <button className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600">
                    Detail
                  </button>
                </Link>
                <Link
                  href={`https://wa.me/${aboutData.contactWa}?text=Halo,%20saya%20ingin%20memesan%20produk%20${product.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="text-2xl text-green-500 cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
