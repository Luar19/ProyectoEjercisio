import styled from "styled-components";
import theme from "@/styles/theme.js";
import { ACTION_LINK_VARIANTS } from "@/components/atoms/ActionLink/ActionLink.constants.js";

export const Action = styled.a`
  min-height: ${({ $variant }) =>
    $variant === ACTION_LINK_VARIANTS.outline ? "41px" : "45px"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  flex: ${({ $variant }) =>
    $variant === ACTION_LINK_VARIANTS.outline ? "0 0 auto" : "initial"};
  padding: 0 18px;
  border: ${({ $variant }) =>
    $variant === ACTION_LINK_VARIANTS.outline ? "1px solid #dfe4dc" : "0"};
  border-radius: 6px;
  color: ${({ $variant }) =>
    $variant === ACTION_LINK_VARIANTS.outline
      ? theme.colors.green
      : theme.colors.white};
  background: ${({ $variant }) =>
    $variant === ACTION_LINK_VARIANTS.outline
      ? theme.colors.white
      : theme.colors.green};
  font-size: 11px;
  font-weight: 600;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: ${theme.colors.white};
    background: ${theme.colors.greenDark};
    transform: translateY(-2px);
  }

  span {
    font-size: 17px;
    line-height: 1;
  }
`;
