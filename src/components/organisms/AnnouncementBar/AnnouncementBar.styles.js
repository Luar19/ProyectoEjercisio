import styled from "styled-components";
import theme from "@/styles/theme.js";

export const Bar = styled.div`
  min-height: 34px;
  display: grid;
  place-items: center;
  color: ${theme.colors.white};
  background: ${theme.colors.green};
  font-size: 11px;
  letter-spacing: 0.035em;

  @media (max-width: 680px) {
    min-height: 30px;
    font-size: 9px;
  }
`;
