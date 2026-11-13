import { createGlobalStyle } from "styled-components";
import theme from "@/styles/theme.js";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    color: ${theme.colors.ink};
    background: ${theme.colors.white};
    font-family: ${theme.fonts.body};
    -webkit-font-smoothing: antialiased;
  }

  button, a {
    -webkit-tap-highlight-color: transparent;
  }

  button {
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, p {
    margin-top: 0;
  }

  img {
    max-width: 100%;
  }

  :focus-visible {
    outline: 2px solid ${theme.colors.green};
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      scroll-behavior: auto !important;
      transition-duration: .01ms !important;
    }
  }
`;
