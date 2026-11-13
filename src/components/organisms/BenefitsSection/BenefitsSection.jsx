import { benefits } from "@/data/storeData.js";
import BenefitItem from "@/components/molecules/BenefitItem/BenefitItem.jsx";
import { BenefitRow, Section } from "@/components/organisms/BenefitsSection/BenefitsSection.styles.js";
import { BENEFITS_SECTION_LABEL } from "@/components/organisms/BenefitsSection/BenefitsSection.constants.js";

export default function BenefitsSection() {
  return (
    <Section aria-label={BENEFITS_SECTION_LABEL}>
      {benefits.map((benefit) => (
        <BenefitRow key={benefit.title}>
          <BenefitItem {...benefit} />
        </BenefitRow>
      ))}
    </Section>
  );
}
