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
    slug: "ayam-utuh-1kg",
    name: "Ayam Utuh 1Kg",
    price: 35000,
    image: "/1_1_Ayam_Utuh.webp",
    categoryId: 1,
    description:
      "Ayam utuh segar berkualitas tinggi, siap untuk diolah menjadi berbagai hidangan lezat seperti ayam panggang, sup ayam, atau ayam goreng.",
  },
  {
    id: 2,
    slug: "paha-ayam-500g",
    name: "Paha Ayam 500g",
    price: 30000,
    image: "/1_2_Paha_Ayam.webp",
    categoryId: 1,
    description:
      "Paha ayam segar dengan daging yang empuk dan lezat, cocok untuk digoreng, dipanggang, atau dimasak dalam berbagai resep favorit Anda.",
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
    slug: "paha-bawah-500g",
    name: "Paha Bawah 500g",
    price: 20000,
    image: "/1_4_Paha_Bawah.webp",
    categoryId: 1,
    description:
      "Paha bawah ayam segar yang kaya akan rasa, ideal untuk berbagai masakan seperti tumisan, panggangan, atau hidangan berkuah.",
  },
  {
    id: 5,
    slug: "dada-ayam-500g",
    name: "Dada Ayam 500g",
    price: 20000,
    image: "/1_5_Dada_Ayam.webp",
    categoryId: 1,
    description:
      "Dada ayam segar yang empuk dan lezat, cocok untuk digoreng, dipanggang, atau dimasak dalam berbagai resep favorit Anda.",
  },
  {
    id: 6,
    slug: "sayap-ayam-500g",
    name: "Sayap Ayam 500g",
    price: 20000,
    image: "/1_6_Sayap_Ayam.webp",
    categoryId: 1,
    description:
      "Sayap ayam segar dengan kulit yang renyah dan daging yang lezat, sempurna untuk digoreng atau dipanggang dengan bumbu favorit Anda.",
  },
  {
    id: 7,
    slug: "kulit-ayam-500g",
    name: "Kulit Ayam 500g",
    price: 20000,
    image: "/1_7_Kulit_Ayam.webp",
    categoryId: 1,
    description:
      "Kulit ayam segar dengan tekstur renyah dan rasa lezat, sempurna untuk digoreng atau dipanggang dengan bumbu favorit Anda.",
  },
  {
    id: 8,
    slug: "ceker-ayam-500g",
    name: "Ceker Ayam 500g",
    price: 20000,
    image: "/1_8_Ceker_Ayam.webp",
    categoryId: 1,
    description:
      "Ceker ayam segar dengan tekstur lembut dan rasa lezat, sempurna untuk digoreng atau dimasak dalam berbagai resep favorit Anda.",
  },
  {
    id: 9,
    slug: "ati-ayam-500g",
    name: "Ati Ayam 500g",
    price: 20000,
    image: "/1_9_Ati_Ayam.webp",
    categoryId: 1,
    description:
      "Ati ayam segar dengan tekstur lembut dan rasa lezat, sempurna untuk digoreng atau dimasak dalam berbagai resep favorit Anda.",
  },
  {
    id: 10,
    slug: "jantung-ayam-500g",
    name: "Jantung Ayam 500g",
    price: 20000,
    image: "/1_10_Jantung_Ayam.webp",
    categoryId: 1,
    description:
      "Jantung ayam segar dengan tekstur lembut dan rasa lezat, sempurna untuk digoreng atau dimasak dalam berbagai resep favorit Anda.",
  },
  {
    id: 11,
    slug: "ampela-ayam-500g",
    name: "Ampela Ayam 500g",
    price: 20000,
    image: "/1_11_Ampela_Ayam.webp",
    categoryId: 1,
    description:
      "Ampela ayam segar dengan tekstur lembut dan rasa lezat, sempurna untuk digoreng atau dimasak dalam berbagai resep favorit Anda.",
  },
  {
    id: 12,
    slug: "usus-ayam-500g",
    name: "Usus Ayam 500g",
    price: 20000,
    image: "/1_12_Usus_Ayam.webp",
    categoryId: 1,
    description:
      "Usus ayam segar dengan tekstur lembut dan rasa lezat, sempurna untuk digoreng atau dimasak dalam berbagai resep favorit Anda.",
  },
  {
    id: 13,
    slug: "rendang-sapi-1kg",
    name: "Rendang Sapi 1Kg",
    price: 20000,
    image: "/2_1_Rendang_Sapi.webp",
    categoryId: 2,
    description:
      "Rendang sapi mentah 1Kg dengan rasa lezat dan tekstur empuk, sempurna untuk dimasak menjadi hidangan lezat.",
  },
  {
    id: 14,
    slug: "daging-giling-1kg",
    name: "Daging Giling 1Kg",
    price: 20000,
    image: "/2_2_Daging_Giling.webp",
    categoryId: 2,
    description:
      "Daging sapi giling segar 1Kg, ideal untuk berbagai masakan seperti bakso, burger, atau tumisan.",
  },
  {
    id: 15,
    slug: "has-dalam-1kg",
    name: "Has Dalam 1Kg",
    price: 20000,
    image: "/2_3_Has_Dalam.webp",
    categoryId: 2,
    description:
      "Has dalam sapi segar 1Kg, ideal untuk berbagai masakan seperti rendang, sate, atau tumisan.",
  },
  {
    id: 16,
    slug: "has-luar-1kg",
    name: "Has Luar 1Kg",
    price: 20000,
    image: "/2_4_Has_Luar.webp",
    categoryId: 2,
    description:
      "Has luar sapi segar 1Kg, ideal untuk berbagai masakan seperti rendang, sate, atau tumisan.",
  },
  {
    id: 17,
    slug: "brisket-1kg",
    name: "Brisket 1Kg",
    price: 20000,
    image: "/2_5_Brisket.webp",
    categoryId: 2,
    description:
      "Brisket sapi segar 1Kg, ideal untuk berbagai masakan seperti rendang, sate, atau tumisan.",
  },
  {
    id: 18,
    slug: "tenderloin-1kg",
    name: "Tenderloin 1Kg",
    price: 20000,
    image: "/2_6_Tenderloin.webp",
    categoryId: 2,
    description:
      "Tenderloin sapi segar 1Kg, ideal untuk berbagai masakan seperti steak, rendang, atau tumisan.",
  },
  {
    id: 19,
    slug: "short-plate-1kg",
    name: "Short Plate 1Kg",
    price: 20000,
    image: "/2_7_Short_Plate.webp",
    categoryId: 2,
    description:
      "Short plate sapi segar 1Kg, ideal untuk berbagai masakan seperti rendang, sate, atau tumisan.",
  },
  {
    id: 20,
    slug: "iga-sapi-1kg",
    name: "Iga Sapi 1Kg",
    price: 20000,
    image: "/2_8_Iga_Sapi.webp",
    categoryId: 2,
    description:
      "Short plate sapi segar 1Kg, ideal untuk berbagai masakan seperti rendang, sate, atau tumisan.",
  },
];
