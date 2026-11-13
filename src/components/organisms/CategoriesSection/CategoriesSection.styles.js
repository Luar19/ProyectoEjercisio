import styled from "styled-components";

export const Section = styled.section`
  width: min(1120px, 82%);
  margin: 0 auto;
  padding: 88px 0 82px;

  @media (max-width: 900px) {
    width: 88%;
  }

  @media (max-width: 680px) {
    width: 86%;
    padding: 63px 0 55px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 17px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;
