import styled from "styled-components";

export const TNavContainer = styled.div`
  display: none;

  @media (max-width: 786px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 70px;
    padding: 1rem;
    background-color: black;
    color: white;
    border-bottom: 1px solid #363636;
    display: flex;
    z-index: 999;
    justify-content: space-between;
  }
`;

export const SearchInput = styled.input`
  font-size: 1rem;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  outline: none;
  background-color: #262626;
  border: none;
  color: #a8a8a8;
`;

export const TNBLogo = styled.div`
  font-family: "logo-font";
  transition: 0.3s;
  font-size: 1.65rem;

  @media (max-width: 450px) {
    display: none;
  }
`;

export const TNBLogoShort = styled.div`
  display: none;

  @media (max-width: 450px) {
    display: block;
    font-family: "logo-font";
    transition: 0.3s;
    font-size: 1.65rem;
  }
`;
