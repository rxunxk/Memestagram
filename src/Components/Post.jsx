import { useState, useEffect } from "react";
import UserIcon from "./UserIcon";
import { FaEllipsisH } from "react-icons/fa";
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
  LikedIcon,
  DislikedIcon,
  CommentIcon,
  ShareIcon,
  SaveIcon,
  LikeCount,
} from "../StyledComponents/PostsStyledComponents";
import PropTypes from "prop-types";
import { likePost, dislikePost } from "../util/postApi";
import { getTotalCommentsForPost } from "../util/commentApi";

const Post = ({ post, currentUser, setPostId, setShowComments }) => {
  const [currPost, setCurrPost] = useState(post);
  const [liked, setLiked] = useState(
    currPost?.likedBy?.includes(currentUser?._id)
  );
  const [totalComments, setTotalComments] = useState(post?.comments?.length);

  useEffect(() => {
    getTotalCommentsForPost(currPost._id).then((res) => {
      setTotalComments(res.data);
    });
  }, []);

  const dislikeHandler = () => {
    likePost(currPost._id, { currentUser: currentUser._id })
      .then((res) => {
        setLiked(true);
        setCurrPost(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err.response));
  };

  const likeHandler = () => {
    dislikePost(currPost._id, { currentUser: currentUser._id })
      .then((res) => {
        setLiked(false);
        setCurrPost(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err.response));
  };
  return (
    <div>
      <PostContainer>
        <PostHeader>
          <UserIcon
            isOnlin0e={false}
            isStory={false}
            height={40}
            width={40}
            mr={1}
            src={currPost.authorProfilePic}
          />
          <PostAuthorNTime>
            <PostAuthor>{currPost.author}</PostAuthor>
            <PostTime>
              {`${new Date(
                currPost.createdAt
              ).toLocaleDateString()}, ${new Date(
                currPost.createdAt
              ).toLocaleTimeString()}`}
            </PostTime>
          </PostAuthorNTime>
          <PostMenuBtn>
            <FaEllipsisH />
          </PostMenuBtn>
        </PostHeader>
        <PostTitle>{currPost.title}</PostTitle>
        <PostMedia
          src={`${currPost.img}`}
          className="border border-[#262626]"
        />
        <PostFooter>
          <IconWrapper>
            {liked ? (
              <LikedIcon height={25} width={25} onClick={likeHandler} />
            ) : (
              <DislikedIcon height={25} width={25} onClick={dislikeHandler} />
            )}
            <LikeCount>{currPost.likedBy.length}</LikeCount>
          </IconWrapper>
          <IconWrapper>
            <CommentIcon
              onClick={() => {
                setPostId(currPost._id);
                setShowComments(true);
              }}
            />
            <LikeCount>{totalComments}</LikeCount>
          </IconWrapper>
          <IconWrapper>
            <ShareIcon height={25} width={25} />
          </IconWrapper>
          <SaveIcon />
        </PostFooter>
        {currPost.caption ? (
          <div>
            <span className="font-bold">{`${currPost.author} `}</span>
            {currPost.caption}
          </div>
        ) : (
          ""
        )}
      </PostContainer>
    </div>
  );
};

Post.propTypes = {
  author: PropTypes.any,
  createdAt: PropTypes.any,
  img: PropTypes.any,
  _id: PropTypes.any,
  caption: PropTypes.any,
  title: PropTypes.any,
  likedBy: PropTypes.any,
  post: PropTypes.any,
  currentUser: PropTypes.any,
  setPostId: PropTypes.any,
  setShowComments: PropTypes.any,
};
export default Post;
