import styled from "styled-components";
import { NavLink } from "react-router-dom";
import theme from "@/styles/theme.js";

export const Header = styled.header`
  min-height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 14px 7.2%;
  border-bottom: 1px solid #f1f0eb;

  @media (max-width: 900px) {
    padding-right: 5%;
    padding-left: 5%;
  }

  @media (max-width: 680px) {
    min-height: 70px;
    flex-wrap: wrap;
    gap: 12px;
    padding: 14px 5%;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10px 20px;
  color: #69736b;
  font-size: 12px;

  @media (max-width: 900px) {
    gap: 10px 14px;
  }

  @media (max-width: 680px) {
    width: 100%;
    justify-content: flex-start;
    gap: 8px 16px;
    font-size: 11px;
  }
`;

export const NavigationLink = styled(NavLink)`
  padding: ${({ $account }) => ($account ? "8px 10px" : "8px 0")};
  border-radius: 5px;
  color: inherit;
  transition: color 0.2s ease, background 0.2s ease;

  &:hover,
  &.is-active {
    color: ${theme.colors.green};
  }

  ${({ $account }) =>
    $account &&
    `
      border: 1px solid #dfe4dc;
      color: ${theme.colors.green};
      font-weight: 600;
    `}

  ${({ $account }) =>
    $account &&
    `
      &:hover,
      &.is-active {
        color: #fff;
        background: ${theme.colors.green};
      }
    `}
`;
