import PropTypes from "prop-types";
import {
  LikedIcon,
  DislikedIcon,
} from "../StyledComponents/PostsStyledComponents";
import { useState } from "react";
import { likeComment, dislikeComment, updateComment } from "../util/commentApi";
import { getCurrentUser } from "../util/utilFunctions";
import { Input } from "@/components/ui/input";
import { BsCheckSquareFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";

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
  const [val, setVal] = useState(currComment?.comment);
  const [isEditing, setIsEditing] = useState(false);

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

  return (
    <div className="flex flex-row justify-between items-center my-2 min-w-full">
      <div className="flex gap-[10px]">
        <img
          src={currComment?.userProfilePic}
          className="h-[35px] w-[35px] rounded-[50%] mt-[5px]"
        />
        <div className="flex flex-col items-start">
          <div className="font-bold">{currComment?.userName}</div>
          {isEditing ? (
            <Input
              type="text"
              placeholder="comment something..."
              value={val}
              onChange={(e) => {
                setVal(e.target.value);
              }}
              className="text-white min-w-full bg-black border border-[#27272a] my-2"
            />
          ) : (
            <div className="flex justify-start">{currComment?.comment}</div>
          )}

          {currComment?.userName === user.userName ? (
            <div className="flex flex-row gap-4 mt-2 items-center">
              <div
                className="text-sm font-bold text-white cursor-pointer"
                onClick={() => {
                  setIsEditing(true);
                }}
              >
                Edit
              </div>
              {!isEditing ? (
                <div
                  className="text-sm font-bold text-[#ff4d4d] cursor-pointer"
                  onClick={() => {
                    setDeleteAlert(true);
                    setCurrCommentId(comment._id);
                  }}
                >
                  Delete
                </div>
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
                        updateComment(currComment._id, { comment: val })
                          .then((res) => {
                            console.log(res);
                            setCurrComment(res.data);
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
