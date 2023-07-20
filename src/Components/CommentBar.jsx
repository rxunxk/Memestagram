import PropTypes from "prop-types";
// import { CommentBarContainer } from "../StyledComponents/CommentBarStyledComponents";
import { FlexBox } from "../StyledComponents/GlobalStyledComponents";
import UserIcon from "./UserIcon";
import { HeartIcon } from "../StyledComponents/PostsStyledComponents";

const CommentBar = ({ comment }) => {
  return (
    <FlexBox
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1rem",
      }}
    >
      <FlexBox>
        <UserIcon height={35} width={35} mr={0.5} />
        <FlexBox style={{ flexDirection: "column" }}>
          <p style={{ fontWeight: "bold" }}>{comment.author}</p>
          <p>{comment.comment}</p>
        </FlexBox>
      </FlexBox>
      <FlexBox>
        <HeartIcon style={{ marginTop: "3px", marginRight: "5px" }} />
        <p>{comment.likes}</p>
      </FlexBox>
    </FlexBox>
  );
};

CommentBar.propTypes = {
  comment: PropTypes.any,
};

export default CommentBar;
