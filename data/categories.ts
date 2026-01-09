export interface Category {
  id: number;
  title: string;
  image: string;
}

export const categories: Category[] = [
  { id: 1, title: "Daging Ayam", image: "/category1-chicken.webp" },
  { id: 2, title: "Daging Sapi", image: "/category2-meat.webp" },
];
