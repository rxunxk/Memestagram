import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getCommentsForThisPost } from "../util/commentApi";
import CommentBar from "../Components/CommentBar";
import { getCurrentUser } from "../util/utilFunctions";
import { Input } from "@/components/ui/input";
import { BsSendFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { createComment } from "../util/commentApi";

const CommentsDialog = ({ open, onOpenChange, postId }) => {
  const [commentList, setCommentList] = useState([]);
  const currentUser = getCurrentUser();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    getCommentsForThisPost(postId)
      .then((res) => {
        setCommentList(res.data);
      })
      .catch((err) => console.log(err.data));
  }, [postId]);

  const onSend = (fData) => {
    createComment({
      userId: currentUser._id,
      userName: currentUser.userName,
      userProfilePic: currentUser.profilePicture,
      postId: postId,
      comment: fData.commentForm.comment,
    })
      .then((res) => {
        setCommentList((oldComments) => [...oldComments, res.data]);
      })
      .catch((err) => console.log(err.data));
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="flex flex-col sm:w-[100%] max-w-[700px] max-h-[80%] overflow-y-scroll bg-black text-white border-[#27272a]">
          <DialogHeader>
            <DialogTitle className="text-base">Comments</DialogTitle>
            <DialogDescription>
              {commentList?.map((comment, i) => {
                return (
                  <CommentBar
                    key={i}
                    comment={comment}
                    currentUser={currentUser}
                  />
                );
              })}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-row items-center gap-4">
            <Input
              type="text"
              placeholder="comment something..."
              className="text-[#a1a1aa] w-full bg-black border border-[#27272a] mb-2"
              {...register("commentForm.comment", {
                required: true,
              })}
            />
            <BsSendFill
              className=" h-[20px] w-[20px] mb-[10px] hover:cursor-pointer"
              onClick={handleSubmit(onSend)}
            />
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
