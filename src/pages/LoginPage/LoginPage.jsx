import { LoginPageMain } from "@/pages/LoginPage/LoginPage.styles.js";
import { LOGIN_PAGE_LABEL } from "@/pages/LoginPage/LoginPage.constants.js";

export default function LoginPage() {
  return <LoginPageMain aria-label={LOGIN_PAGE_LABEL} />;
}
