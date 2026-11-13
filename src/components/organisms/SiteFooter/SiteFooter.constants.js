import { APP_PATHS } from "@/App.constants.js";

export const FOOTER_COPY = {
  tagline: "Hecho con cariño para los días de todos los días.",
  navigationLabel: "Módulos disponibles",
  copyright: "© 2026 Mercado Simple",
};

export const MODULE_NAVIGATION = [
  { label: "Inicio", to: APP_PATHS.home },
  { label: "Catálogo", to: APP_PATHS.catalog },
  { label: "Detalle de producto", to: APP_PATHS.productDetail },
  { label: "Nosotros", to: APP_PATHS.about },
  { label: "Iniciar sesión", to: APP_PATHS.login },
  { label: "Registro", to: APP_PATHS.register },
  { label: "Contacto", to: APP_PATHS.contact },
];
