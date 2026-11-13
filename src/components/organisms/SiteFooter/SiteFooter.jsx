import { Link } from "react-router-dom";
import Brand from "@/components/atoms/Brand/Brand.jsx";
import {
  Footer,
  ModuleNavigation,
} from "@/components/organisms/SiteFooter/SiteFooter.styles.js";
import {
  FOOTER_COPY,
  MODULE_NAVIGATION,
} from "@/components/organisms/SiteFooter/SiteFooter.constants.js";

export default function SiteFooter() {
  return (
    <Footer>
      <Brand small />
      <p>{FOOTER_COPY.tagline}</p>
      <ModuleNavigation aria-label={FOOTER_COPY.navigationLabel}>
        {MODULE_NAVIGATION.map((item) => (
          <Link key={item.to} to={item.to}>
            {item.label}
          </Link>
        ))}
      </ModuleNavigation>
      <span>{FOOTER_COPY.copyright}</span>
    </Footer>
  );
}
