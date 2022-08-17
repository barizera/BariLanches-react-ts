import styled, { css } from "styled-components";
import { Theme } from "../../types/styled-components";

interface OrderDetailsContainerProps {
  theme: Theme;
}

export const OrderDetailsContainer = styled.aside<OrderDetailsContainerProps>`
  ${({ theme }) => css`
    width: 25rem;
    height: 100vh;
    background-color: ${theme.colors.BackgroundColor};
    border-radius: 8px 0 0 8px;
  `}
`;

export const OrderDetailsHeader = styled.aside<OrderDetailsContainerProps>`
  ${({ theme }) => css`
    width: 100%;
    height: 6.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 1rem;
    h2 {
      font-family: ${theme.constants.bodyFontFamily};
      font-size: ${theme.constants.headingFontSize};
    }
    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1.5rem;
    }
  `}
`;
