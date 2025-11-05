import CategoryImg1 from "@/assets/category1-beef.png";
import CategoryImg2 from "@/assets/category-2.png";
import CategoryImg3 from "@/assets/category-3.png";
import CategoryImg4 from "@/assets/category-4.png";
import ProductImg1 from "@/assets/product-1.png";
import ProductImg2 from "@/assets/product-2.png";
import ProductImg3 from "@/assets/product-3.png";
import ProductImg4 from "@/assets/product-4.png";

// Hero section data
export const heroData = {
  title: "Daging Segar Pilihan Keluarga",
  description:
    "Dapatkan daging segar berkualitas tinggi langsung dari peternak terpercaya. Pilihan terbaik untuk hidangan lezat Anda.",
  img: "/heroBg.png",
};

// Categories data
export const homepageData = {
  categories: [
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
      title: "Daging Kambing",
      img: CategoryImg3,
    },
    {
      id: 4,
      title: "Seafood",
      img: CategoryImg4,
    },
  ],
};

// Featured products data
export const featuredProducts = [
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
    name: "Daging Kambing Muda 1Kg",
    price: 150000,
    img: ProductImg3,
  },
  {
    id: 4,
    name: "Ikan Salmon Segar 500g",
    price: 80000,
    img: ProductImg4,
  },
];
