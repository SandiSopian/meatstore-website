"use client";
import Image from "next/image";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { aboutData } from "@/data/home";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const ProductDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const BackButton = () => {
    const router = useRouter();

    return (
      <button
        onClick={() => router.back()}
        className="m-4 text-blue-500 underline"
      >
        back
      </button>
    );
  };

  return (
    <div className="p-0">
      <div className="relative bg-[#f4dfce] rounded-b-[100px] pb-6 mb-4">
        <div className="transparent">
          <BackButton />
        </div>

        <div className="relative w-full h-48 flex justify-center">
          <div className="relative w-60 h-40 rounded-xl bg-white shadow">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-contain p-3 rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="p-4">
        <h1 className="mt-2 text-2xl font-semibold">{product.name}</h1>

        <p className="mt-1 text-red-500 font-bold">
          Rp {product.price}
          <span className="text-gray-400">/kg</span>
        </p>

        <div className="border-b border-gray-300 my-4"></div>

        <h2 className="mt-2 text-xl font-semibold">Deskripsi Produk</h2>
        <p className="mt-1 text-gray-600 dark:text-white">
          {product.description}
        </p>

        <div className="my-6">
          <Link
            href={`https://wa.me/${aboutData.contactWa}?text=Halo,%20saya%20ingin%20memesan%20produk%20${product.name}.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <FontAwesomeIcon icon={faWhatsapp} className="text-2xl mr-2" />
              Pesan via WhatsApp
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
