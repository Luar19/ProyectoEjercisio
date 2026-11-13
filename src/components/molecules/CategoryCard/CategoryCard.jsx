import { Arrow, Card, Copy } from "@/components/molecules/CategoryCard/CategoryCard.styles.js";

export default function CategoryCard({ category, onSelect }) {
  return (
    <Card
      href="#productos"
      $tone={category.tone}
      onClick={() => onSelect(category.name)}
    >
      <Copy>
        <strong>{category.name}</strong>
        <small>{category.description}</small>
      </Copy>
      <Arrow aria-hidden="true">→</Arrow>
    </Card>
  );
}
