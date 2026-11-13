import styled from "styled-components";
import theme from "@/styles/theme.js";

export const Section = styled.section`
  min-height: 548px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 32px;
  overflow: hidden;
  padding: 58px 10.1% 63px;
  background: ${theme.colors.cream};

  @media (max-width: 900px) {
    padding-right: 7%;
    padding-left: 7%;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 34px;
    padding: 50px 7% 48px;
  }
`;

export const Content = styled.div`
  max-width: 500px;

  h1 {
    margin: 19px 0 16px;
    font-family: ${theme.fonts.heading};
    font-size: clamp(42px, 5vw, 65px);
    font-weight: 600;
    line-height: 1.12;
    letter-spacing: -0.07em;
  }

  h1 span {
    color: #718b69;
    font-weight: 500;
  }

  p {
    max-width: 395px;
    margin: 0 0 25px;
    color: ${theme.colors.muted};
    font-size: 13px;
    line-height: 1.8;
  }

  .social-proof {
    margin: 34px 0 0;
    color: #858b83;
    font-size: 10px;
    line-height: normal;
  }

  .social-proof strong {
    color: ${theme.colors.ink};
  }

  @media (max-width: 680px) {
    max-width: none;

    h1 {
      font-size: clamp(43px, 12vw, 60px);
    }

    p {
      max-width: 430px;
    }

    .social-proof {
      margin-top: 25px;
    }
  }
`;

export const Visual = styled.div`
  position: relative;
  width: min(100%, 465px);
  justify-self: end;

  @media (max-width: 680px) {
    width: min(85%, 390px);
    justify-self: center;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 385px;
  display: block;
  border-radius: 46% 46% 7px 7px;
  background: #d8d6c6;
  object-fit: cover;
  object-position: center 54%;

  @media (max-width: 900px) {
    height: 330px;
  }

  @media (max-width: 680px) {
    height: 300px;
  }
`;

export const Note = styled.div`
  position: absolute;
  right: -25px;
  bottom: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 17px 13px 13px;
  border-radius: 8px;
  background: ${theme.colors.white};
  box-shadow: 0 10px 35px #31453615;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #8b9b78;
  }

  strong,
  small {
    display: block;
  }

  strong {
    margin-bottom: 4px;
    font-size: 10px;
  }

  small {
    color: #969d95;
    font-size: 9px;
  }

  @media (max-width: 680px) {
    right: -18px;
  }
`;
