import styled, { css } from "styled-components";

interface CategoriesNavBarButtonProps {
  active?: boolean;
}

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #424040; //Buscar um cinza escuro.
  color: #ffffff;
  border-radius: 20px;

  section {
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

export const HomeContentContainer = styled.div`
  width: calc(100% - 500px);
`;

export const HomeContentHeader = styled.header`
  width: 100%;
  height: 16vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-sizing: border-box;
`;

export const HeaderTittle = styled.div`
  h1 {
    font-size: 23px;
    text-transform: uppercase;
  }
  p {
    margin-top: 0.7rem;
    text-transform: capitalize;
  }
`;

export const SearchSpot = styled.div`
  width: 160px;
  height: 35px;
  background-color: #797d81;
  border: 1px #28292a;
  border-radius: 7px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  gap: 13px;

  input {
    background-color: #797d81;
    width: 130px;
    height: 35px;
    color: #ffffff;
    ::placeholder {
      color: #ffffff;
    }
    :focus {
      outline: none;
    }
  }
`;

export const CategoriesNavBar = styled.div`
  width: 95%;
  padding: 0 2rem;
  box-sizing: border-box;
  height: 3vh;
  border-bottom: 1px solid #797d8155;
  display: flex;
`;

export const CategoriesNavBarButton = styled.button<CategoriesNavBarButtonProps>`
  color: #ffffff;
  border: 0;
  cursor: pointer;
  margin-right: 0.4rem;
  padding: 0 0.3rem;
  background-color: #424040;

  :hover {
    color: #fc9655;
  }

  ${({ active }) =>
    active &&
    css`
      color: #ff4c36;
      border-bottom: 2px solid #ff4c36;
    `}
`;

export const ProductsHeader = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    margin-left: 2rem;
  }
`;

export const TableSelect = styled.select`
  width: 165px;
  height: 30px;
  background-color: #fc9655;
  border-radius: 8px;
  color: #28292a;
  margin-right: 3rem;
`;
