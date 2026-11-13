import { AboutPageMain } from "@/pages/AboutPage/AboutPage.styles.js";
import { ABOUT_PAGE_LABEL } from "@/pages/AboutPage/AboutPage.constants.js";

export default function AboutPage() {
  return <AboutPageMain aria-label={ABOUT_PAGE_LABEL} />;
}
