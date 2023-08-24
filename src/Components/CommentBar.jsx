import PropTypes from "prop-types";
// import { FlexBox } from "../StyledComponents/GlobalSC";
import UserIcon from "./UserIcon";
import { LikedIcon } from "../StyledComponents/PostsStyledComponents";

const CommentBar = ({ comment }) => {
  return (
    // <FlexBox
    //   style={{
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //     marginBottom: "1rem",
    //   }}
    // >
    //   <FlexBox>
    //     <UserIcon height={35} width={35} mr={0.5} />
    //     <FlexBox style={{ flexDirection: "column" }}>
    //       <p style={{ fontWeight: "bold" }}>{comment.author}</p>
    //       <p style={{ marginRight: "0.8rem" }}>{comment.comment}</p>
    //     </FlexBox>
    //   </FlexBox>
    //   <FlexBox>
    //     <LikedIcon style={{ marginTop: "3px", marginRight: "5px" }} />
    //     <p>{comment.likes}</p>
    //   </FlexBox>
    // </FlexBox>
    <div className="flex flex-row content-between items-start mb-4 w-full">
      <div className="flex">
        <UserIcon height={35} width={35} mr={0.5} />
        <div className="flex flex-col">
          <div className="text-bold">{comment.author}</div>
          <div className="mr-[0.8rem]">{comment.comment}</div>
        </div>
      </div>
      <div className="flex">
        <LikedIcon
          style={{ marginTop: "3px", marginRight: "5px" }}
          className="mr-[3px] mt-[5px["
        />
        <div>{comment.likes}</div>
      </div>
    </div>
  );
};

CommentBar.propTypes = {
  comment: PropTypes.any,
};

export default CommentBar;
