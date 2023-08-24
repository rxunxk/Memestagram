import PropTypes from "prop-types";
// import UserIcon from "./UserIcon";
import { LikedIcon } from "../StyledComponents/PostsStyledComponents";
import { useEffect, useState } from "react";
import { getUser } from "../util/userApi";
const CommentBar = ({ comment }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    getUser(comment.userId)
      .then((res) => {
        setUser(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err.data));
  }, []);

  return (
    <div className="flex flex-row content-between items-center my-2 w-full">
      <div className="flex gap-[10px]">
        {/* <UserIcon height={35} width={35} mr={0.5} src={user?.profilePicture} /> */}
        <img
          src={user?.profilePicture}
          className="h-[35px] w-[35px] rounded-[50%] mt-[5px]"
        />
        <div className="flex flex-col content-start">
          <div className="font-bold">{user?.userName}</div>
          <div className="">{comment.comment}</div>
        </div>
      </div>
      <div className="flex">
        <LikedIcon className="mr-[3px]" />
        <div>{comment.likes}</div>
      </div>
    </div>
  );
};

CommentBar.propTypes = {
  comment: PropTypes.any,
};

export default CommentBar;
