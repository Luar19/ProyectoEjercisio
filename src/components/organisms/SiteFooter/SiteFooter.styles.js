import styled from "styled-components";

export const Footer = styled.footer`
  min-height: 95px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px 20px;
  padding: 18px 7.2%;
  color: #858d85;

  p,
  span {
    margin: 0;
    font-size: 9px;
  }

  @media (max-width: 680px) {
    min-height: 120px;
    justify-content: flex-start;
    padding: 22px 7%;

    p {
      order: 3;
      width: 100%;
    }

    span {
      margin-left: auto;
    }
  }
`;

export const ModuleNavigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 14px;

  a {
    color: inherit;
    font-size: 9px;
  }

  a:hover {
    color: #355a45;
  }
`;
