export interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
  description: string;
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
    description:
      "Daging sapi premium berkualitas tinggi, segar, dan empuk. Cocok untuk berbagai hidangan lezat seperti steak, rendang, atau sup daging.",
  },
  {
    id: 2,
    slug: "daging-ayam-organik-1kg",
    name: "Daging Ayam Organik 1Kg",
    price: 30000,
    image: "/product2-chicken-meat.webp",
    categoryId: 2,
    description:
      "Daging ayam organik segar, bebas dari bahan kimia dan hormon. Ideal untuk hidangan sehat seperti ayam panggang, sup ayam, atau tumis ayam.",
  },
  {
    id: 3,
    slug: "jeroan-ayam-mix-1kg",
    name: "Jeroan Ayam Mix 1Kg",
    price: 30000,
    image: "/product3jeroan-meat.webp",
    categoryId: 3,
    description:
      "Jeroan ayam mix segar yang terdiri dari hati, ampela, dan ceker. Cocok untuk berbagai masakan tradisional seperti soto, gulai, atau sate jeroan.",
  },
  {
    id: 4,
    slug: "ikan-tuna-segar-500gr",
    name: "Ikan Tuna Segar 500gr",
    price: 30000,
    image: "/product4-fish.webp",
    categoryId: 4,
    description:
      "Ikan tuna segar berkualitas tinggi, kaya akan protein dan omega-3. Sempurna untuk hidangan seperti sashimi, steak ikan, atau salad ikan.",
  },
];
