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
import { likePost, dislikePost, deletePost, updatePost } from "../util/postApi";
import { getTotalCommentsForPost } from "../util/commentApi";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { BsCheckSquareFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";

const Post = ({ post, currentUser, setPostId, setShowComments, popPost }) => {
  const [currPost, setCurrPost] = useState(post);
  const [liked, setLiked] = useState(
    currPost?.likedBy?.includes(currentUser?._id)
  );
  const [totalComments, setTotalComments] = useState(post?.comments?.length);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [titleVal, setTitleVal] = useState(currPost.title);
  const [captionVal, setCaptionVal] = useState(currPost.caption);

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
            src={currPost?.authorProfilePic}
            onClick={() => {
              navigate("/Profile", { state: { userId: currPost.userId } });
            }}
            cursor={"pointer"}
          />
          <PostAuthorNTime>
            <PostAuthor
              onClick={() => {
                navigate("/Profile", { state: { userId: currPost.userId } });
              }}
              className="cursor-pointer"
            >
              {currPost.author}
            </PostAuthor>
            <PostTime>
              {`${new Date(
                currPost.createdAt
              ).toLocaleDateString()}, ${new Date(
                currPost.createdAt
              ).toLocaleTimeString()}`}
            </PostTime>
          </PostAuthorNTime>
          <DropdownMenu className="border">
            <DropdownMenuTrigger className="ml-auto">
              <PostMenuBtn>
                <FaEllipsisH />
              </PostMenuBtn>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border border-[#27272a] bg-black text-white">
              {currPost.userId === currentUser._id ? (
                <>
                  <DropdownMenuItem
                    className="hover:bg-[#27272a]"
                    onClick={() => {
                      setIsEditing(true);
                    }}
                  >
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:bg-[#27272a] text-red-600"
                    onClick={deletePostHandler}
                  >
                    Delete
                  </DropdownMenuItem>
                </>
              ) : (
                ""
              )}
              <DropdownMenuItem className="hover:bg-[#27272a]">
                Save Post
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </PostHeader>
        <PostTitle>
          {isEditing ? (
            <Input
              type="text"
              value={titleVal}
              onChange={(e) => {
                setTitleVal(e.target.value);
              }}
              className="text-[#a1a1aa] w-full bg-black border border-[#27272a] mb-2"
            />
          ) : (
            currPost.title
          )}
        </PostTitle>
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
          isEditing ? (
            <Input
              type="text"
              value={captionVal}
              onChange={(e) => {
                setCaptionVal(e.target.value);
              }}
              className="text-[#a1a1aa] w-full bg-black border border-[#27272a] mb-2"
            />
          ) : (
            <div>
              <span className="font-bold">{`${currPost.author} `}</span>
              {currPost.caption}
            </div>
          )
        ) : (
          ""
        )}
        {isEditing ? (
          <div className="flex gap-4">
            <div>
              <BsCheckSquareFill
                className="text-green-300 h-[16px] w-[16px] cursor-pointer"
                onClick={() => {
                  setIsEditing(false);
                  updatePost(currPost._id, {
                    title: titleVal,
                    caption: captionVal,
                  })
                    .then((res) => {
                      console.log(res);
                      setCurrPost(res.data);
                    })
                    .catch((err) => console.log(err));
                }}
              />
            </div>
            <div>
              <ImCross
                className="text-red-500 h-[16px] w-[16px] cursor-pointer"
                onClick={() => {
                  setIsEditing(false);
                }}
              />
            </div>
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
