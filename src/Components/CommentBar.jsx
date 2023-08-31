import PropTypes from "prop-types";
import {
  LikedIcon,
  DislikedIcon,
} from "../StyledComponents/PostsStyledComponents";
import { useState } from "react";
// import { getUser } from "../util/userApi";
import { likeComment, dislikeComment } from "../util/commentApi";
import { getCurrentUser } from "../util/utilFunctions";

const CommentBar = ({
  comment,
  currentUser,
  setDeleteAlert,
  setCurrCommentId,
}) => {
  // const [user, setUser] = useState();
  const [currComment, setCurrComment] = useState(comment);
  const [liked, setLiked] = useState(
    currComment?.likedBy?.includes(currentUser?._id)
  );
  const user = getCurrentUser();

  const dislikeHandler = () => {
    likeComment(currComment?._id, { userId: currentUser._id })
      .then((res) => {
        setLiked(true);
        setCurrComment(res.data);
        console.log("comment liked: ", res);
      })
      .catch((err) => console.log(err.response));
  };

  const likeHandler = () => {
    dislikeComment(currComment?._id, { userId: currentUser._id })
      .then((res) => {
        setLiked(false);
        setCurrComment(res.data);
        console.log("comment disliked: ", res);
      })
      .catch((err) => console.log(err.response));
  };

  // const delComment = (commentId) => {
  //   setDeleteAlert(true);
  // };

  return (
    <div className="flex flex-row justify-between items-center my-2 min-w-full">
      <div className="flex gap-[10px]">
        <img
          src={comment?.userProfilePic}
          className="h-[35px] w-[35px] rounded-[50%] mt-[5px]"
        />
        <div className="flex flex-col items-start">
          <div className="font-bold">{comment?.userName}</div>
          <div className="flex justify-start">{currComment?.comment}</div>
          {comment?.userName === user.userName ? (
            <div className="flex flex-row gap-4 mt-2">
              <div
                className="text-sm font-bold text-white cursor-pointer"
                // onClick={editComment}
              >
                Edit
              </div>
              <div
                className="text-sm font-bold text-[#ff4d4d] cursor-pointer"
                onClick={() => {
                  setDeleteAlert(true);
                  setCurrCommentId(comment._id);
                }}
              >
                Delete
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex flex-col items-center self-start mt-[5px]">
        {liked ? (
          <LikedIcon className="mr-[3px]" onClick={likeHandler} />
        ) : (
          <DislikedIcon className="mr-[3px]" onClick={dislikeHandler} />
        )}
        <div className="text-xs">{currComment?.likedBy?.length}</div>
      </div>
    </div>
  );
};

CommentBar.propTypes = {
  comment: PropTypes.any,
  currentUser: PropTypes.any,
  setDeleteAlert: PropTypes.any,
  deleteAlert: PropTypes.any,
  delComment: PropTypes.any,
  setCurrCommentId: PropTypes.any,
};

export default CommentBar;
