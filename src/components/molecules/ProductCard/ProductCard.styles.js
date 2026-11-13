import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "@/styles/theme.js";

export const ProductCardLink = styled(Link)`
  min-width: 0;
  display: block;
  color: inherit;
  text-decoration: none;

  &:focus-visible {
    outline: 2px solid ${theme.colors.green};
    outline-offset: 4px;
  }

  &:hover img {
    transform: scale(1.045);
  }
`;

export const ImageFrame = styled.div`
  position: relative;
  height: 245px;
  overflow: hidden;
  border-radius: 7px;
  background: ${({ $tone }) => {
    if ($tone === "sand") return "#e6ddd0";
    if ($tone === "blue") return "#dae3e1";
    if ($tone === "pink") return "#eee2dd";
    return "#e1e5d8";
  }};

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform 0.35s ease;
  }

  @media (max-width: 900px) {
    height: 205px;
  }

  @media (max-width: 680px) {
    height: clamp(155px, 49vw, 230px);
  }
`;

export const Tag = styled.span`
  position: absolute;
  z-index: 1;
  top: 11px;
  left: 10px;
  padding: 6px 8px;
  border-radius: 3px;
  color: ${({ $tone }) => ($tone === "limited" ? "#775653" : "#506848")};
  background: ${({ $tone }) => {
    if ($tone === "new") return "#f7ece0";
    if ($tone === "limited") return "#f5e8e5";
    return "#f4f4e7";
  }};
  font-size: 7px;
  font-weight: 700;
  letter-spacing: 0.08em;
`;

export const Info = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 8px;
  margin-top: 13px;
`;

export const Category = styled.span`
  color: #8c978c;
  font-size: 7px;
  font-weight: 700;
  letter-spacing: 0.13em;
`;

export const Name = styled.h3`
  margin: 5px 0 0;
  font-family: ${theme.fonts.heading};
  font-size: 13px;
  font-weight: 600;

  @media (max-width: 680px) {
    font-size: 12px;
  }
`;

export const Price = styled.span`
  padding-bottom: 1px;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;

  @media (max-width: 680px) {
    font-size: 11px;
  }
`;

export const Rating = styled.p`
  margin: 7px 0 0;
  color: #888f87;
  font-size: 9px;

  span {
    padding: 0 3px;
    color: #c4934f;
  }
`;
