import { categories } from "@/data/storeData.js";
import CategoryCard from "@/components/molecules/CategoryCard/CategoryCard.jsx";
import SectionHeading, {
  HeadingLink,
} from "@/components/molecules/SectionHeading/SectionHeading.jsx";
import { Grid, Section } from "@/components/organisms/CategoriesSection/CategoriesSection.styles.js";
import { CATEGORIES_SECTION_COPY } from "@/components/organisms/CategoriesSection/CategoriesSection.constants.js";

export default function CategoriesSection({ onSelectCategory }) {
  return (
    <Section id="categorias" aria-labelledby="categories-title">
      <SectionHeading
        eyebrow={CATEGORIES_SECTION_COPY.eyebrow}
        title={CATEGORIES_SECTION_COPY.title}
        titleId="categories-title"
        action={
          <HeadingLink href="#productos">
            {CATEGORIES_SECTION_COPY.action} <span aria-hidden="true">→</span>
          </HeadingLink>
        }
      />
      <Grid>
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            category={category}
            onSelect={onSelectCategory}
          />
        ))}
      </Grid>
    </Section>
  );
}
