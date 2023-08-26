import PropTypes from "prop-types";
import {
  LikedIcon,
  DislikedIcon,
} from "../StyledComponents/PostsStyledComponents";
import { useEffect, useState } from "react";
import { getUser } from "../util/userApi";
import { likeComment, dislikeComment } from "../util/commentApi";

const CommentBar = ({ comment, currentUser }) => {
  const [user, setUser] = useState();
  const [currComment, setCurrComment] = useState(comment);
  const [liked, setLiked] = useState(
    currComment?.likedBy?.includes(currentUser?._id)
  );

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

  useEffect(() => {
    getUser(currComment?.userId)
      .then((res) => {
        setUser(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err.data));
  }, []);

  return (
    <div className="flex flex-row content-between items-center my-2 min-w-full">
      <div className="flex gap-[10px]">
        <img
          src={user?.profilePicture}
          className="h-[35px] w-[35px] rounded-[50%] mt-[5px]"
        />
        <div className="flex flex-col content-start">
          <div className="font-bold">{user?.userName}</div>
          <div className="">{currComment?.comment}</div>
        </div>
      </div>
      <div className="flex flex-col items-center">
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
};

export default CommentBar;
