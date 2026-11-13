import styled from "styled-components";
import theme from "@/styles/theme.js";

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: ${({ $compact }) => ($compact ? "25px" : "27px")};

  @media (max-width: 680px) {
    align-items: flex-start;

    ${({ $compact }) =>
      $compact &&
      `
        flex-direction: column;
        gap: 15px;
      `}
  }
`;

export const Title = styled.h2`
  margin: 8px 0 0;
  font-family: ${theme.fonts.heading};
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -0.055em;

  @media (max-width: 680px) {
    font-size: 25px;
  }
`;

export const HeadingLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 4px;
  color: #596b5a;
  font-size: 11px;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.green};
  }

  span {
    font-size: 17px;
    line-height: 1;
  }
`;
