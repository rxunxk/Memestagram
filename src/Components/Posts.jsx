import UserIcon from "./UserIcon";
import { FaEllipsisH } from "react-icons/fa";
import { useState, useEffect } from "react";
import {
  PostContainer,
  PostHeader,
  PostAuthorNTime,
  PostAuthor,
  PostTime,
  PostMenuBtn,
  PostTitle,
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
import { getPosts, likePost } from "../util/postApi";
import { useSelector } from "react-redux";

let postComponent = "";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [currentPost, setCurrentPost] = useState({});
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    getPosts().then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  }, []);

  const likeHandler = (postId) => {
    likePost(postId, { currentUser: currentUser._id })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
  };

  if (posts?.length === 0) {
    postComponent = <h3>No Posts available!</h3>;
  } else {
    postComponent = posts?.map((meme, index) => {
      return (
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
              <PostTime>
                {`${new Date(meme.createdAt).toLocaleDateString()}, ${new Date(
                  meme.createdAt
                ).toLocaleTimeString()}`}
              </PostTime>
            </PostAuthorNTime>
            <PostMenuBtn>
              <FaEllipsisH />
            </PostMenuBtn>
          </PostHeader>
          <PostTitle>{meme.title}</PostTitle>
          <PostMedia src={`${meme.img}`} className="border border-[#262626]" />
          <PostFooter>
            <IconWrapper>
              <HeartIcon
                height={25}
                width={25}
                onClick={() => likeHandler(meme._id)}
                className={`${
                  meme.likedBy.includes(currentUser._id) ? "text-red-500" : ""
                }`}
              />
              <LikeCount>{meme.likedBy.length}</LikeCount>
            </IconWrapper>
            <IconWrapper>
              <CommentIcon
                onClick={() => {
                  setCurrentPost(meme);
                  setShowComments(true);
                }}
              />
              <LikeCount>{}</LikeCount>
            </IconWrapper>
            <IconWrapper>
              <ShareIcon height={25} width={25} />
            </IconWrapper>
            <SaveIcon />
          </PostFooter>
          {meme.caption ? (
            <div>
              <span className="font-bold">{`${meme.author} `}</span>
              {meme.caption}
            </div>
          ) : (
            ""
          )}
        </PostContainer>
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
