import styled from "styled-components";
import theme from "@/styles/theme.js";

export const Section = styled.section`
  min-height: 238px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 35px;
  padding: 43px max(9%, calc((100% - ${theme.layout.contentWidth}) / 2));
  background: #f1f3eb;

  h2 {
    margin: 10px 0 0;
    font-family: ${theme.fonts.heading};
    font-size: 26px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.055em;
  }

  p {
    margin: 10px 0 0;
    color: #7d867c;
    font-size: 10px;
  }

  @media (max-width: 680px) {
    min-height: 0;
    align-items: flex-start;
    flex-direction: column;
    gap: 23px;
    padding: 45px 8%;

    h2 {
      font-size: 24px;
    }
  }
`;
