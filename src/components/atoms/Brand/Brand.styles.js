import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "@/styles/theme.js";

export const BrandLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: ${theme.colors.ink};
  font-family: ${theme.fonts.heading};
  font-size: ${({ $small }) => ($small ? "14px" : "17px")};
  font-weight: 800;
  letter-spacing: -0.07em;
  white-space: nowrap;
`;

export const BrandMark = styled.span`
  width: ${({ $small }) => ($small ? "25px" : "29px")};
  height: ${({ $small }) => ($small ? "25px" : "29px")};
  display: grid;
  place-items: center;
  border-radius: 9px 9px 9px 3px;
  color: ${theme.colors.white};
  background: ${theme.colors.green};
  font-size: ${({ $small }) => ($small ? "18px" : "21px")};
  line-height: 1;
`;

export const BrandName = styled.span`
  color: #8a938c;
  font-weight: 500;
`;
