import { Link } from "react-router-dom";
import { APP_PATHS } from "@/App.constants.js";
import {
  BrandLink,
  BrandMark,
  BrandName,
} from "@/components/atoms/Brand/Brand.styles.js";
import {
  BRAND_LABEL,
  BRAND_ARIA_LABEL,
  BRAND_MARK,
} from "@/components/atoms/Brand/Brand.constants.js";

export default function Brand({ small = false }) {
  return (
    <BrandLink
      to={APP_PATHS.home}
      aria-label={BRAND_ARIA_LABEL}
      $small={small}
    >
      <BrandMark aria-hidden="true" $small={small}>
        {BRAND_MARK}
      </BrandMark>
      <span>
        {BRAND_LABEL.prefix}
        <BrandName>{BRAND_LABEL.suffix}</BrandName>
      </span>
    </BrandLink>
  );
}
