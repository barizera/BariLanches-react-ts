import styled, { css } from "styled-components";

interface MenuItemProps {
  logout?: boolean;
  active?: boolean;
}

export const MenuAside = styled.div`
  height: 100vh;
  min-width: 6.5rem;
  background-color: #28292a;
  display: flex;
  flex-direction: column;
  border-radius: 0 16px 16px 0;
  align-items: center;

  nav {
    width: 100%;
  }
`;

export const LogoBariLanches = styled.img`
  width: 4rem;
  margin: 1.25rem;
`;

export const Icons = styled.img`
  width: 2rem;
`;

export const MenuItem = styled.button<MenuItemProps>`
  height: 80px;
  width: calc(100% - 12px);
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px 0 0 12px;
  background-color: #424040;

  ${({ logout }) =>
    logout &&
    css`
      position: absolute;
      bottom: 0;
      width: calc(6.5rem - 12px);
      border-radius: 16px;
    `}

  ${({ active }) =>
    active &&
    css`
      background-color: #424040;
    `}
`;

export const MenuItemButton = styled.button<MenuItemProps>`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  background-color: #424040;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;

  :hover {
    transform: scale(1.2);
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #ff4c36;
    `}
`;
