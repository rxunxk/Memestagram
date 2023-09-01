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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PropTypes from "prop-types";
import { likePost, dislikePost, deletePost } from "../util/postApi";
import { getTotalCommentsForPost } from "../util/commentApi";

const Post = ({ post, currentUser, setPostId, setShowComments, popPost }) => {
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
    setLiked(true);
    likePost(currPost._id, { currentUser: currentUser._id })
      .then((res) => {
        setCurrPost(res.data);
        console.log(res);
      })
      .catch((err) => {
        setLiked(false);
        console.log(err.response);
      });
  };

  const likeHandler = () => {
    setLiked(false);
    dislikePost(currPost._id, { currentUser: currentUser._id })
      .then((res) => {
        setCurrPost(res.data);
        console.log(res);
      })
      .catch((err) => {
        setLiked(true);
        console.log(err.response);
      });
  };

  const deletePostHandler = () => {
    console.log(currPost._id);
    popPost(currPost._id);
    deletePost(currPost._id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
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
          <DropdownMenu>
            <DropdownMenuTrigger className="ml-auto">
              <PostMenuBtn>
                <FaEllipsisH />
              </PostMenuBtn>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border bg-black text-white">
              <DropdownMenuItem className="hover:bg-[#27272a]">
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:bg-[#27272a] text-red-600"
                onClick={deletePostHandler}
              >
                Delete
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#27272a]">
                menu item 3
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
  popPost: PropTypes.any,
};
export default Post;
