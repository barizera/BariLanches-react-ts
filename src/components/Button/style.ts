import styled, { css, ThemedBaseStyledInterface } from "styled-components";
import { Theme } from "../../types/styled-components";

interface StyledButtonProps {
  theme: Theme;
  variant?: "disable" | "cancel" | false;
  size?: "small" | "large" | false;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ theme, variant, size }) => css`
    width: 11rem;
    height: 2.5rem;
    border-radius: 10px;
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.textColor};
    border: 2px outset #797d81;
    cursor: pointer;
    font-family: ${theme.constants.bodyFontFamily};

    ${variant === "disable" &&
    css`
      background-color: ${theme.colors.darkBackgroundColor};
      color: ${theme.colors.primaryColor};
      border: 1px solid ${theme.colors.lightBackgroundColor};
    `}

    ${variant === "cancel" &&
    css`
      background-color: ${theme.colors.darkBackgroundColor};
      color: ${theme.colors.secundaryColor};
      border: 1px solid ${theme.colors.secundaryColor};
    `}

    ${size === "small" &&
    css`
      height: 2.5rem;
      width: 7rem;
      padding: 0 0.7rem;
    `}

    ${size === "large" &&
    css`
      width: 24rem;
    `}
  `}
`;
