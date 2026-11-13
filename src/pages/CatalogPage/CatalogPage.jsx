import { CatalogPageMain } from "@/pages/CatalogPage/CatalogPage.styles.js";
import { CATALOG_PAGE_LABEL } from "@/pages/CatalogPage/CatalogPage.constants.js";

export default function CatalogPage() {
  return <CatalogPageMain aria-label={CATALOG_PAGE_LABEL} />;
}
