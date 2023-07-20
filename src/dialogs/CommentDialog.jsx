import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
// import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
// import { CommentBody } from "../StyledComponents/CommentStyledComponents";

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
        <DialogContent
          dividers
          sx={{ borderColor: "#535353dd", borderBottom: 0 }}
        ></DialogContent>
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
