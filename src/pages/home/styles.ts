import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #424040; //Buscar um cinza escuro.
  color: #ffffff;
  border-radius: 20px;
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
