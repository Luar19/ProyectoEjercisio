import ActionLink from "@/components/atoms/ActionLink/ActionLink.jsx";
import Eyebrow from "@/components/atoms/Eyebrow/Eyebrow.jsx";
import {
  Content,
  Image,
  Note,
  Section,
  Visual,
} from "@/components/organisms/HeroSection/HeroSection.styles.js";
import { HERO_COPY } from "@/components/organisms/HeroSection/HeroSection.constants.js";

export default function HeroSection() {
  return (
    <Section id="inicio" aria-labelledby="hero-title">
      <Content>
        <Eyebrow>{HERO_COPY.eyebrow}</Eyebrow>
        <h1 id="hero-title">
          {HERO_COPY.titleLineOne}
          <br />
          {HERO_COPY.titleLineTwo} <span>{HERO_COPY.titleEmphasis}</span>
        </h1>
        <p>{HERO_COPY.description}</p>
        <ActionLink href="#productos">
          {HERO_COPY.action} <span aria-hidden="true">→</span>
        </ActionLink>
        <p className="social-proof">
          <strong>{HERO_COPY.socialProofCount}</strong>{" "}
          {HERO_COPY.socialProofText}
        </p>
      </Content>

      <Visual>
        <Image src={HERO_COPY.image} alt={HERO_COPY.imageAlt} />
        <Note>
          <span aria-hidden="true" />
          <div>
            <strong>{HERO_COPY.noteTitle}</strong>
            <small>{HERO_COPY.noteDescription}</small>
          </div>
        </Note>
      </Visual>
    </Section>
  );
}
