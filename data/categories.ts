export interface Category {
  id: number;
  title: string;
  image: string;
}

export const categories: Category[] = [
  { id: 1, title: "Daging Sapi", image: "/category1-beef.webp" },
  { id: 2, title: "Daging Ayam", image: "/category2-chicken.webp" },
  { id: 3, title: "Seafood", image: "/category3-fish.webp" },
];
