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
    padding: 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  `}
`;

export const OrderDetailsHeader = styled.aside<OrderDetailsContainerProps>`
  ${({ theme }) => css`
    width: 100%;
    height: 6.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h2 {
      font-family: ${theme.constants.bodyFontFamily};
      font-size: ${theme.constants.headingFontSize};
    }
    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.6rem;
    }
  `}
`;

export const CheckoutDetailsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;
export const CheckoutDetailsHeader = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 2.5rem;
    padding: 0.5rem 0;
    margin-bottom: 0.5rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${theme.colors.lightBackgroundColor};
  `}
`;

export const OrderDetailsFooter = styled.footer`
  ${({ theme }) => css`
    width: 23.5rem;
    height: 14.5rem;
    border-top: 1px solid ${theme.colors.lightBackgroundColor};
    position: absolute;
    bottom: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    div {
      display: flex;
      justify-content: space-between;
    }
  `}
`;
