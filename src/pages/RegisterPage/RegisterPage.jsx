import { RegisterPageMain } from "@/pages/RegisterPage/RegisterPage.styles.js";
import { REGISTER_PAGE_LABEL } from "@/pages/RegisterPage/RegisterPage.constants.js";

export default function RegisterPage() {
  return <RegisterPageMain aria-label={REGISTER_PAGE_LABEL} />;
}
