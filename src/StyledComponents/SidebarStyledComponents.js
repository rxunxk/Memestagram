import styled from "styled-components";

export const SideBarContainer = styled.div`
  height: 100dvh;
  width: 330px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem 1.5rem;
  border-right: 1px solid #333333;
  display: flex;
  flex-direction: column;
  color: white;

  @media (max-width: 1300px) {
    width: 80px;
  }

  @media (max-width: 786px) {
    display: none;
  }
`;

export const Logo = styled.div`
  font-family: "logo-font";
  font-size: 1.8rem;
  margin: 1rem 0;
  padding-left: 0.5rem;
  transition: 0.5s;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  padding: 1rem 0.5rem;
  border-radius: 8px;

  &:last-child {
    color: salmon;
    margin-top: auto;
  }
  &:hover {
    background-color: #1a1a1a;
    cursor: pointer;
  }
  &:active {
    color: gray;
  }

  @media (max-width: 1300px) {
    padding: 0;
    margin-top: 3rem;
    border-radius: 0;
    &:hover {
      background-color: transparent;
    }
  }
`;

export const ListItemText = styled.p`
  transition: 0.3s ease;
  @media (max-width: 1300px) {
    display: none;
  }
`;
