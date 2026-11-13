import { APP_PATHS } from "@/App.constants.js";
import {
  PRODUCT_RATING,
} from "@/components/molecules/ProductCard/ProductCard.constants.js";
import {
  formatProductCategory,
  getProductDetailLinkLabel,
} from "@/components/molecules/ProductCard/ProductCard.helpers.js";
import {
  Category,
  ImageFrame,
  Info,
  Name,
  Price,
  ProductCardLink,
  Rating,
  Tag,
} from "@/components/molecules/ProductCard/ProductCard.styles.js";

export default function ProductCard({ product }) {
  return (
    <ProductCardLink
      to={APP_PATHS.productDetail}
      aria-label={getProductDetailLinkLabel(product.name)}
    >
      <ImageFrame $tone={product.imageTone}>
        {product.label && (
          <Tag $tone={product.labelTone}>{product.label}</Tag>
        )}
        <img src={product.image} alt={product.imageAlt} loading="lazy" />
      </ImageFrame>
      <Info>
        <div>
          <Category>{formatProductCategory(product.category)}</Category>
          <Name>{product.name}</Name>
        </div>
        <Price>{product.price}</Price>
      </Info>
      <Rating>
        {PRODUCT_RATING.score} <span aria-hidden="true">·</span>{" "}
        {product.rating}
      </Rating>
    </ProductCardLink>
  );
}
