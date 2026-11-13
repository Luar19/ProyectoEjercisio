import { ALL_PRODUCTS_CATEGORY } from "@/data/storeData.js";

export function getProductsForCategory(products, category) {
  if (category === ALL_PRODUCTS_CATEGORY) {
    return products;
  }

  return products.filter((product) => product.category === category);
}
