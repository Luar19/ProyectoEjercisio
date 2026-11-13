import { APP_PATHS } from "@/App.constants.js";

export const SITE_HEADER_NAVIGATION_LABEL = "Navegación principal";

export const MAIN_NAVIGATION = [
  { label: "Inicio", to: APP_PATHS.home },
  { label: "Tienda", to: APP_PATHS.catalog },
  { label: "Categorías", to: APP_PATHS.categories },
  { label: "Nosotros", to: APP_PATHS.about },
];

export const ACCOUNT_NAVIGATION = [
  { label: "Iniciar sesión", to: APP_PATHS.login },
  { label: "Registro", to: APP_PATHS.register },
];
