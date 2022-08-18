import styled, { css } from "styled-components";
import { Theme } from "../../types/styled-components";

interface CardContainerProps {
  theme: Theme;
}

export const CardContainer = styled.div<CardContainerProps>`
  ${({ theme }) => css`
    width: 11.5rem;
    height: 14.125rem;
    background-color: ${theme.colors.BackgroundColor};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${theme.constants.bodyFontFamily};
    position: relative;
    text-align: center;
    justify-content: center;
    padding: 1rem;
    padding-top: 3.2rem;
    box-sizing: border-box;

    img {
      width: 7rem;
      position: absolute;
      top: -3rem;
    }
  `}
`;
