export interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
  categoryId: number;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "daging-sapi-premium-1kg",
    name: "Daging Sapi Premium 1Kg",
    price: 120000,
    image: "/product1-meat-rib.webp",
    categoryId: 1,
  },
  {
    id: 2,
    slug: "daging-ayam-organik-1kg",
    name: "Daging Ayam Organik 1Kg",
    price: 30000,
    image: "/product2-chicken-meat.webp",
    categoryId: 2,
  },
  {
    id: 3,
    slug: "jeroan-ayam-mix-1kg",
    name: "Jeroan Ayam Mix 1Kg",
    price: 30000,
    image: "/product3jeroan-meat.webp",
    categoryId: 3,
  },
  {
    id: 4,
    slug: "ikan-tuna-segar-500gr",
    name: "Ikan Tuna Segar 500gr",
    price: 30000,
    image: "/product4-fish.webp",
    categoryId: 4,
  },
];
