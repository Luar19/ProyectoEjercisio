import { Action } from "@/components/atoms/ActionLink/ActionLink.styles.js";
import { ACTION_LINK_VARIANTS } from "@/components/atoms/ActionLink/ActionLink.constants.js";

export default function ActionLink({
  children,
  href,
  variant = ACTION_LINK_VARIANTS.primary,
}) {
  return (
    <Action href={href} $variant={variant}>
      {children}
    </Action>
  );
}
