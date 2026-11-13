import { ContactPageMain } from "@/pages/ContactPage/ContactPage.styles.js";
import { CONTACT_PAGE_LABEL } from "@/pages/ContactPage/ContactPage.constants.js";

export default function ContactPage() {
  return <ContactPageMain aria-label={CONTACT_PAGE_LABEL} />;
}
