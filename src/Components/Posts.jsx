import UserIcon from "./UserIcon";
import { FaEllipsisH } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  PostContainer,
  PostHeader,
  PostAuthorNTime,
  PostAuthor,
  PostTime,
  PostMenuBtn,
  PostCaption,
  PostMedia,
  PostFooter,
  IconWrapper,
  HeartIcon,
  CommentIcon,
  ShareIcon,
  SaveIcon,
  LikeCount,
} from "../StyledComponents/PostsStyledComponents";
import CommentDialog from "../dialogs/CommentDialog";
import Suggestions from "../layout/Suggestions";

const BASE_URL = "https://meme-api.com/gimme/memes/50";

let postComponent = "";
const Post = () => {
  const [posts, setPosts] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  useEffect(() => {
    axios.get(BASE_URL).then((response) => {
      setPosts(response.data.memes);
    });
  }, []);

  const getRandomDateAndTime = () => {
    let day = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
    let month = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    let year = Math.floor(Math.random() * (23 - 0 + 1)) + 0;
    if (year < 10) {
      year = `0${year}`;
    }

    let date = `${day}/${month}/${year}`;

    let hour = Math.floor(Math.random() * (23 - 0 + 1)) + 0;
    if (hour < 10) {
      hour = `0${hour}`;
    }
    let minute = Math.floor(Math.random() * (59 - 0 + 1)) + 0;
    if (minute < 10) {
      minute = `0${minute}`;
    }

    let time = `${hour}:${minute}`;
    return `${date} at ${time}`;
  };

  if (posts?.length === 0) {
    postComponent = <h3>No Posts available!</h3>;
  } else {
    postComponent = posts?.map((meme, index) => {
      return (
        <>
          <PostContainer key={meme.author + index}>
            <PostHeader>
              <UserIcon
                isOnlin0e={false}
                isStory={false}
                height={40}
                width={40}
                mr={1}
              />
              <PostAuthorNTime>
                <PostAuthor>{meme.author}</PostAuthor>
                <PostTime>{getRandomDateAndTime()}</PostTime>
              </PostAuthorNTime>
              <PostMenuBtn>
                <FaEllipsisH />
              </PostMenuBtn>
            </PostHeader>
            <PostCaption>{meme.title}</PostCaption>
            <PostMedia src={`${meme.url}`} />
            <PostFooter>
              <IconWrapper>
                <HeartIcon height={25} width={25} />
                <LikeCount>{meme.ups}</LikeCount>
              </IconWrapper>
              <IconWrapper>
                <CommentIcon
                  onClick={() => {
                    setCurrentPost(meme);
                    setShowComments(true);
                  }}
                />
                <LikeCount>{8}</LikeCount>
              </IconWrapper>
              <IconWrapper>
                <ShareIcon height={25} width={25} />
              </IconWrapper>
              <SaveIcon />
            </PostFooter>
          </PostContainer>
        </>
      );
    });
  }

  return (
    <>
      <CommentDialog
        open={showComments}
        setOpen={setShowComments}
        post={currentPost}
        key={Math.random()}
      />
      <div style={{ display: "flex", position: "relative" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {postComponent}
        </div>
        <Suggestions />
      </div>
    </>
  );
};

export default Post;
