import { categories, products } from "@/data/storeData.js";
import ProductCard from "@/components/molecules/ProductCard/ProductCard.jsx";
import SectionHeading from "@/components/molecules/SectionHeading/SectionHeading.jsx";
import {
  EmptyState,
  FilterButton,
  Filters,
  Grid,
  Section,
} from "@/components/organisms/ProductsSection/ProductsSection.styles.js";
import {
  PRODUCTS_SECTION_COPY,
  SHOW_ALL_FILTER,
} from "@/components/organisms/ProductsSection/ProductsSection.constants.js";
import { getProductsForCategory } from "@/components/organisms/ProductsSection/ProductsSection.helpers.js";

const productFilters = [SHOW_ALL_FILTER, ...categories.map(({ name }) => name)];

export default function ProductsSection({
  selectedCategory,
  onSelectCategory,
}) {
  const visibleProducts = getProductsForCategory(products, selectedCategory);

  return (
    <Section id="productos" aria-labelledby="products-title">
      <SectionHeading
        eyebrow={PRODUCTS_SECTION_COPY.eyebrow}
        title={PRODUCTS_SECTION_COPY.title}
        titleId="products-title"
        compact
        action={
          <Filters aria-label={PRODUCTS_SECTION_COPY.filtersLabel}>
            {productFilters.map((filter) => (
              <FilterButton
                key={filter}
                type="button"
                $active={selectedCategory === filter}
                aria-pressed={selectedCategory === filter}
                onClick={() => onSelectCategory(filter)}
              >
                {filter === SHOW_ALL_FILTER
                  ? PRODUCTS_SECTION_COPY.showAll
                  : filter}
              </FilterButton>
            ))}
          </Filters>
        }
      />
      {visibleProducts.length > 0 ? (
        <Grid>
          {visibleProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </Grid>
      ) : (
        <EmptyState>{PRODUCTS_SECTION_COPY.emptyState}</EmptyState>
      )}
    </Section>
  );
}
