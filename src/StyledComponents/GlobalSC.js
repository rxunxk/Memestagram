import styled from "styled-components";
import { AiFillSetting, AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiImageAdd } from "react-icons/bi";
import { FaFacebookMessenger } from "react-icons/fa";

export const FlexBox = styled.div`
  display: flex;
`;

export const ProfileIcon = styled(CgProfile)`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  &:hover {
    color: gray;
    cursor: pointer;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const HomeIcon = styled(AiFillHome)`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  &:hover {
    color: gray;
    cursor: pointer;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const ChatIcon = styled(FaFacebookMessenger)`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  &:hover {
    color: gray;
    cursor: pointer;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const CreateIcon = styled(BiImageAdd)`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  &:hover {
    color: gray;
    cursor: pointer;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const SettingsIcon = styled(AiFillSetting)`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  &:hover {
    color: gray;
    cursor: pointer;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const PageContainer = styled.div`
  height: 100dvh;
  width: 100dvw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
  overflow-y: scroll;
`;
