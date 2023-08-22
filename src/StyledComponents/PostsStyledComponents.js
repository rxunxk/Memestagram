import styled from "styled-components";
import {
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
  FaHeart,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export const PostContainer = styled.div`
  display: flex;
  width: 600px;
  max-width: 100vw;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 2rem;
  transition: 0.3s;
`;

export const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;

  @media (max-width: 700px) {
    padding: 0 0.3rem;
  }
`;

export const PostAuthorNTime = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostAuthor = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

export const PostTime = styled.p`
  font-size: 0.8rem;
  color: gray;
  margin-top: 0.2rem;
`;

export const PostMenuBtn = styled.div`
  color: white;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  &:hover {
    cursor: pointer;
    color: gray;
  }
`;

export const PostTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  width: 500px;
  max-width: 90vw;
  overflow-wrap: break-word;

  @media (max-width: 700px) {
    padding: 0 0.5rem;
  }
`;

export const PostMedia = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 2px;
`;

export const PostFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  gap: 1rem;

  @media (max-width: 700px) {
    padding: 1rem 1rem 1rem 1rem;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DislikedIcon = styled(FaRegHeart)`
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

export const LikedIcon = styled(FaHeart)`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  color: red;

  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const CommentIcon = styled(FaRegComment)`
  height: 25px;
  width: 25px;

  &:hover {
    color: gray;
    cursor: pointer;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const ShareIcon = styled(FiSend)`
  padding-top: 0.1rem;
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
export const SaveIcon = styled(FaRegBookmark)`
  height: 25px;
  width: 25px;
  margin-left: auto;

  &:hover {
    color: gray;
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
  }
`;
export const LikeCount = styled.p`
  font-size: 0.7rem;
  margin-left: 0.5rem;
`;
