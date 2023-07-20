import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CommentBar from "../Components/CommentBar";
import { DialogActions } from "@mui/material";
import UserIcon from "../Components/UserIcon";
import { CommentInput } from "../StyledComponents/CommentBarStyledComponents";
import { ShareIcon } from "../StyledComponents/PostsStyledComponents";

const comments = [
  {
    author: "raunak",
    comment: "this is a comment",
    likes: 78,
  },
  {
    author: "Verna",
    comment:
      "make teach pair forgotten driving stage pool below available television girl greatest check mice speak team extra think task butter bite forest present pocket",
    likes: 17,
  },
];

// eslint-disable-next-line no-unused-vars
const CommentDialog = ({ post, open, setOpen }) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        sx={{
          "& .MuiPaper-root": {
            width: "900px",
            maxWidth: "100%",
            margin: 0.4,
            backgroundColor: "#333",
            color: "#fff",
          },
        }}
      >
        <DialogTitle>
          Comments
          <IconButton
            aria-label="close"
            onClick={() => {
              setOpen(false);
            }}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ borderColor: "#535353dd" }}>
          {comments.map((comment) => {
            return <CommentBar comment={comment} key={comment.likes} />;
          })}
        </DialogContent>
        <DialogActions
          sx={{
            "&.MuiDialogActions-root": {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "0.5rem 1rem",
            },
          }}
        >
          <UserIcon height={45} width={45} mr={0.5} />
          <CommentInput type="text" placeholder="write something..." />
          <ShareIcon height={35} width={35} />
        </DialogActions>
      </Dialog>
    </>
  );
};

CommentDialog.propTypes = {
  open: PropTypes.any,
  post: PropTypes.any,
  setOpen: PropTypes.any,
};

export default CommentDialog;
