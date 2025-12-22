import Image from "next/image";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const ProductDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params; // ⬅️ WAJIB di-await

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="p-4">
      <div className="relative w-full h-48 bg-white rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority // ⬅️ ini juga sekalian betulin LCP warning
          className="object-contain p-4"
        />
      </div>

      <h1 className="mt-4 text-xl font-semibold">{product.name}</h1>

      <p className="mt-2 text-red-500 font-bold">Rp. {product.price}/kg</p>
    </div>
  );
};

export default ProductDetailPage;
