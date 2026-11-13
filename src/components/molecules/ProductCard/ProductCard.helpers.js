import { PRODUCT_DETAIL_LABEL_PREFIX } from "@/components/molecules/ProductCard/ProductCard.constants.js";

export function formatProductCategory(category) {
  return category.toLocaleUpperCase("es");
}

export function getProductDetailLinkLabel(productName) {
  return `${PRODUCT_DETAIL_LABEL_PREFIX} ${productName}`;
}
