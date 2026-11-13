import styled from "styled-components";
import theme from "@/styles/theme.js";

export const Section = styled.section`
  width: min(1120px, 82%);
  margin: 0 auto;
  padding: 9px 0 88px;

  @media (max-width: 900px) {
    width: 88%;
  }

  @media (max-width: 680px) {
    width: 86%;
    padding-bottom: 65px;
  }
`;

export const Filters = styled.div`
  display: flex;
  gap: 5px;

  @media (max-width: 680px) {
    max-width: 100%;
    overflow-x: auto;
    padding-bottom: 4px;
  }
`;

export const FilterButton = styled.button`
  flex: 0 0 auto;
  padding: 8px 12px;
  border: 0;
  border-radius: 5px;
  color: ${({ $active }) => ($active ? "#fff" : "#7e867f")};
  background: ${({ $active }) =>
    $active ? theme.colors.green : "transparent"};
  font-size: 10px;
  cursor: pointer;
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: #fff;
    background: ${theme.colors.green};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 680px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 23px 12px;
  }
`;

export const EmptyState = styled.p`
  padding: 35px 0;
  color: ${theme.colors.muted};
  text-align: center;
  font-size: 13px;
`;
