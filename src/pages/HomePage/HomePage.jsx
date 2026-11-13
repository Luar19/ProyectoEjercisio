import { useState } from "react";
import HeroSection from "@/components/organisms/HeroSection/HeroSection.jsx";
import BenefitsSection from "@/components/organisms/BenefitsSection/BenefitsSection.jsx";
import CategoriesSection from "@/components/organisms/CategoriesSection/CategoriesSection.jsx";
import ProductsSection from "@/components/organisms/ProductsSection/ProductsSection.jsx";
import AboutSection from "@/components/organisms/AboutSection/AboutSection.jsx";
import { HomePageMain } from "@/pages/HomePage/HomePage.styles.js";
import { HOME_PAGE_DEFAULT_CATEGORY } from "@/pages/HomePage/HomePage.constants.js";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(
    HOME_PAGE_DEFAULT_CATEGORY,
  );

  return (
    <HomePageMain>
      <HeroSection />
      <BenefitsSection />
      <CategoriesSection onSelectCategory={setSelectedCategory} />
      <ProductsSection
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <AboutSection />
    </HomePageMain>
  );
}
