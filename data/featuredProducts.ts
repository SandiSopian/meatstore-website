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
    slug: "has-Dalam-1kg",
    name: "Has Dalam Sapi 1Kg",
    price: 35000,
    image: "/2_3_Has_Dalam.webp",
    categoryId: 2,
    description:
      "Has dalam sapi berkualitas tinggi, siap untuk diolah menjadi berbagai hidangan lezat seperti rendang, sate, atau gulai.",
  },
  {
    id: 2,
    slug: "tenderloin-1Kg",
    name: "Tenderloin 1Kg",
    price: 30000,
    image: "/2_6_Tenderloin.webp",
    categoryId: 2,
    description:
      "Tenderloin sapi berkualitas tinggi, cocok untuk diolah menjadi berbagai hidangan lezat seperti grilled steak, stir fry, atau masakan lainnya.",
  },
  {
    id: 3,
    slug: "paha-atas-500g",
    name: "Paha Atas 500g",
    price: 20000,
    image: "/1_3_Paha_Atas.webp",
    categoryId: 1,
    description:
      "Paha atas ayam segar yang kaya akan rasa, ideal untuk berbagai masakan seperti tumisan, panggangan, atau hidangan berkuah.",
  },
  {
    id: 4,
    slug: "dada-atas-500g",
    name: "Dada Atas 500g",
    price: 20000,
    image: "/1_5_Dada_Ayam.webp",
    categoryId: 1,
    description:
      "Dada atas ayam segar yang kaya akan rasa, ideal untuk berbagai masakan seperti tumisan, panggangan, atau hidangan berkuah.",
  },
];
