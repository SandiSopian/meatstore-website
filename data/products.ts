export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  categoryId: number;
}

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Daging Sapi Premium 1Kg",
    price: 120000,
    image: "/product1-meat-rib.webp",
    categoryId: 1,
  },
  {
    id: 21,
    name: "Daging Ayam Organik 1Kg",
    price: 30000,
    image: "/product2-chicken-meat.webp",
    categoryId: 2,
  },
  {
    id: 3,
    name: "Jeroan Ayam Mix 1Kg",
    price: 30000,
    image: "/product3jeroan-meat.webp",
    categoryId: 3,
  },
  {
    id: 4,
    name: "Ikan Tuna Segar 500gr",
    price: 30000,
    image: "/product4-fish.webp",
    categoryId: 4,
  },
];
