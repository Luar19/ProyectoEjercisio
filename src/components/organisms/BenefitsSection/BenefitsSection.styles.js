import styled from "styled-components";

export const Section = styled.section`
  min-height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(36px, 8vw, 130px);
  border-bottom: 1px solid #f1f0eb;

  @media (max-width: 680px) {
    display: grid;
    gap: 0;
    padding: 8px 8%;
  }
`;

export const BenefitRow = styled.div`
  @media (max-width: 680px) {
    min-height: 61px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f1f0eb;

    &:last-child {
      border-bottom: 0;
    }
  }
`;
