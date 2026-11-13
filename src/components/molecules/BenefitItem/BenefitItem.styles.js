import styled from "styled-components";
import theme from "@/styles/theme.js";

export const Item = styled.article`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Mark = styled.span`
  width: 9px;
  height: 9px;
  flex: 0 0 auto;
  border: 2px solid ${theme.colors.muted};
  border-radius: 50%;
`;

export const Copy = styled.p`
  margin: 0;

  strong,
  small {
    display: block;
  }

  strong {
    margin-bottom: 4px;
    font-size: 11px;
    font-weight: 600;
  }

  small {
    color: #91978f;
    font-size: 9px;
  }
`;
