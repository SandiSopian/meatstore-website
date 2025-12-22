import { featuredProducts } from "@/data/products";
import { categories } from "@/data/categories";

export function getProductsWithCategory() {
  return featuredProducts.map((product) => {
    const category = categories.find((cat) => cat.id === product.categoryId);

    return {
      ...product,
      category, // object Category
    };
  });
}
