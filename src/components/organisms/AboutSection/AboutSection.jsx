import ActionLink from "@/components/atoms/ActionLink/ActionLink.jsx";
import Eyebrow from "@/components/atoms/Eyebrow/Eyebrow.jsx";
import { Section } from "@/components/organisms/AboutSection/AboutSection.styles.js";
import { ABOUT_SECTION_COPY } from "@/components/organisms/AboutSection/AboutSection.constants.js";

export default function AboutSection() {
  return (
    <Section id="nosotros" aria-labelledby="about-title">
      <div>
        <Eyebrow>{ABOUT_SECTION_COPY.eyebrow}</Eyebrow>
        <h2 id="about-title">
          {ABOUT_SECTION_COPY.titleLineOne}
          <br />
          {ABOUT_SECTION_COPY.titleLineTwo}
        </h2>
        <p>{ABOUT_SECTION_COPY.description}</p>
      </div>
      <ActionLink href="#categorias" variant="outline">
        {ABOUT_SECTION_COPY.action} <span aria-hidden="true">→</span>
      </ActionLink>
    </Section>
  );
}
