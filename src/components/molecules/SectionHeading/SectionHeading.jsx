import Eyebrow from "@/components/atoms/Eyebrow/Eyebrow.jsx";
import {
  Header,
  Title,
} from "@/components/molecules/SectionHeading/SectionHeading.styles.js";

export { HeadingLink } from "@/components/molecules/SectionHeading/SectionHeading.styles.js";

export default function SectionHeading({
  eyebrow,
  title,
  titleId,
  action,
  compact,
}) {
  return (
    <Header $compact={compact}>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Title id={titleId}>{title}</Title>
      </div>
      {action}
    </Header>
  );
}
