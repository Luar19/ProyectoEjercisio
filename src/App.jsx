import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AnnouncementBar from "@/components/organisms/AnnouncementBar/AnnouncementBar.jsx";
import SiteHeader from "@/components/organisms/SiteHeader/SiteHeader.jsx";
import SiteFooter from "@/components/organisms/SiteFooter/SiteFooter.jsx";
import HomePage from "@/pages/HomePage/HomePage.jsx";
import CatalogPage from "@/pages/CatalogPage/CatalogPage.jsx";
import ProductDetailPage from "@/pages/ProductDetailPage/ProductDetailPage.jsx";
import AboutPage from "@/pages/AboutPage/AboutPage.jsx";
import LoginPage from "@/pages/LoginPage/LoginPage.jsx";
import RegisterPage from "@/pages/RegisterPage/RegisterPage.jsx";
import ContactPage from "@/pages/ContactPage/ContactPage.jsx";
import { APP_PATHS } from "@/App.constants.js";

export default function App() {
  return (
    <BrowserRouter>
      <AnnouncementBar />
      <SiteHeader />
      <Routes>
        <Route path={APP_PATHS.home} element={<HomePage />} />
        <Route path={APP_PATHS.catalog} element={<CatalogPage />} />
        <Route path={APP_PATHS.productDetail} element={<ProductDetailPage />} />
        <Route path={APP_PATHS.about} element={<AboutPage />} />
        <Route path={APP_PATHS.login} element={<LoginPage />} />
        <Route path={APP_PATHS.register} element={<RegisterPage />} />
        <Route path={APP_PATHS.contact} element={<ContactPage />} />
        <Route path="*" element={<Navigate to={APP_PATHS.home} replace />} />
      </Routes>
      <SiteFooter />
    </BrowserRouter>
  );
}
