import { useState } from "react";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import PropTypes from "prop-types";
import { likePost, dislikePost } from "../util/postApi";

const Post = ({ post, currentUser }) => {
  const [commentsDialog, setCommentsDialog] = useState(false);
  const [currPost, setCurrPost] = useState(post);
  const [liked, setLiked] = useState(
    currPost?.likedBy?.includes(currentUser?._id)
  );

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
      <Dialog open={commentsDialog} onOpenChange={setCommentsDialog}>
        <DialogContent className="bg-black text-white border-[#27272a]">
          <DialogHeader>
            <DialogTitle className="text-base">Comments</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-black border-0 hover:bg-[#27272a] text-red-400"
              onClick={() => {}}
            >
              Log out
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <PostContainer>
        <PostHeader>
          <UserIcon
            isOnlin0e={false}
            isStory={false}
            height={40}
            width={40}
            mr={1}
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
                setCommentsDialog(true);
              }}
            />
            <LikeCount>{}</LikeCount>
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
};
export default Post;
