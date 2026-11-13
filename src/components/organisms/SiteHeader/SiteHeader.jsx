import Brand from "@/components/atoms/Brand/Brand.jsx";
import {
  Header,
  Navigation,
  NavigationLink,
} from "@/components/organisms/SiteHeader/SiteHeader.styles.js";
import {
  ACCOUNT_NAVIGATION,
  MAIN_NAVIGATION,
  SITE_HEADER_NAVIGATION_LABEL,
} from "@/components/organisms/SiteHeader/SiteHeader.constants.js";
import { getNavigationClassName } from "@/components/organisms/SiteHeader/SiteHeader.helpers.js";

export default function SiteHeader() {
  return (
    <Header>
      <Brand />
      <Navigation aria-label={SITE_HEADER_NAVIGATION_LABEL}>
        {MAIN_NAVIGATION.map((item) => (
          <NavigationLink
            key={item.to}
            to={item.to}
            className={getNavigationClassName}
            end={item.to === "/"}
          >
            {item.label}
          </NavigationLink>
        ))}
        {ACCOUNT_NAVIGATION.map((item) => (
          <NavigationLink
            key={item.to}
            to={item.to}
            $account
            className={getNavigationClassName}
          >
            {item.label}
          </NavigationLink>
        ))}
      </Navigation>
    </Header>
  );
}
