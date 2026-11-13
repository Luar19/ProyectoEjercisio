import { Copy, Item, Mark } from "@/components/molecules/BenefitItem/BenefitItem.styles.js";

export default function BenefitItem({ title, description }) {
  return (
    <Item>
      <Mark aria-hidden="true" />
      <Copy>
        <strong>{title}</strong>
        <small>{description}</small>
      </Copy>
    </Item>
  );
}
