import styled from "styled-components";
import theme from "@/styles/theme.js";

export const Card = styled.a`
  min-height: 125px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 19px;
  border-radius: 8px;
  background: ${({ $tone }) => {
    if ($tone === "home") return "#f0f2e9";
    if ($tone === "lifestyle") return "#f6eee7";
    return "#edf1f0";
  }};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }

  @media (max-width: 680px) {
    min-height: 95px;
  }
`;

export const Copy = styled.span`
  strong,
  small {
    display: block;
  }

  strong {
    margin-bottom: 6px;
    font-family: ${theme.fonts.heading};
    font-size: 14px;
    font-weight: 700;
  }

  small {
    color: #858c84;
    font-size: 9px;
  }
`;

export const Arrow = styled.span`
  color: #879085;
  font-size: 17px;
`;
