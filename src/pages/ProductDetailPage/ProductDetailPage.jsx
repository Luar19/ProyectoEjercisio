import { ProductDetailPageMain } from "@/pages/ProductDetailPage/ProductDetailPage.styles.js";
import { PRODUCT_DETAIL_PAGE_LABEL } from "@/pages/ProductDetailPage/ProductDetailPage.constants.js";

export default function ProductDetailPage() {
  return <ProductDetailPageMain aria-label={PRODUCT_DETAIL_PAGE_LABEL} />;
}
