import styled from "styled-components";

export const BNContainer = styled.div`
  display: none;

  @media (max-width: 786px) {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    background: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-top: 1px solid #363636;
  }
`;
