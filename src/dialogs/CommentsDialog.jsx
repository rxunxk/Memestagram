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
import { useEffect } from "react";
import { getCommentsForThisPost } from "../util/commentApi";

const CommentsDialog = ({ open, onOpenChange, postId }) => {
  useEffect(() => {
    getCommentsForThisPost(postId)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.data));
  }, [postId]);

  return (
    <div>
      <Dialog open={open} onOpenChange={onOpenChange}>
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
    </div>
  );
};

CommentsDialog.propTypes = {
  open: PropTypes.any,
  onOpenChange: PropTypes.any,
  postId: PropTypes.any,
};

export default CommentsDialog;
