import CategoryImg1 from "@/public/category1-beef.webp";
import CategoryImg2 from "@/public/category2-chicken.webp";
import CategoryImg3 from "@/public/category3-fish.webp";
import ProductImg1 from "@/public/product1-chicken-meat.webp";
import ProductImg2 from "@/public/product2-meat-rib.webp";
import ProductImg3 from "@/public/product3jeroan-meat.webp";
import ProductImg4 from "@/public/product4-fish.webp";

// Hero section data
export const heroData = {
  title: "Daging Segar Pilihan Keluarga",
  description:
    "Dapatkan daging segar berkualitas tinggi langsung dari peternak terpercaya. Pilihan terbaik untuk hidangan lezat Anda.",
  img: "/heroBg.webp",
};

// Categories data
export const categoriesData = [
  {
    id: 1,
    title: "Daging Sapi",
    img: CategoryImg1,
  },
  {
    id: 2,
    title: "Daging Ayam",
    img: CategoryImg2,
  },
  {
    id: 3,
    title: "Seafood",
    img: CategoryImg3,
  },
];

// Featured products data
export const featuredData = [
  {
    id: 1,
    name: "Daging Sapi Premium 1Kg",
    price: 120000,
    img: ProductImg1,
  },
  {
    id: 2,
    name: "Daging Ayam Organik 1Kg",
    price: 30000,
    img: ProductImg2,
  },
  {
    id: 3,
    name: "Jeroan Ayam Mix 500g",
    price: 35000,
    img: ProductImg3,
  },
  {
    id: 4,
    name: "Ikan Salmon Segar 500g",
    price: 80000,
    img: ProductImg4,
  },
];
