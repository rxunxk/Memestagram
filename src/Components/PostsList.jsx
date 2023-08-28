import { useState, useEffect } from "react";
// import CommentDialog from "../dialogs/CommentDialog";
import Suggestions from "../layout/Suggestions";
import { getPosts } from "../util/postApi";
import Post from "./Post";
import { getCurrentUser } from "../util/utilFunctions";
import CommentsDialog from "../dialogs/CommentsDialog";
import { PostLoader } from "../loaders/PostLoader";
let postComponent = "";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [postId, setPostId] = useState();
  // const [commentLikes, setCommentLikes] = useState();

  const currentUser = getCurrentUser();

  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res.data);
    });
  }, []);

  if (posts?.length === 0) {
    postComponent = <PostLoader />;
  } else {
    postComponent = posts?.map((post, index) => {
      return (
        <Post
          post={post}
          key={index}
          setPostId={setPostId}
          setShowComments={setShowComments}
          currentUser={currentUser}
        />
      );
    });
  }

  return (
    <>
      {/* <CommentDialog
        open={showComments}
        setOpen={setShowComments}
        post={currentPost}
        key={Math.random()}
      /> */}
      <CommentsDialog
        open={showComments}
        onOpenChange={setShowComments}
        postId={postId}
      />
      <div style={{ display: "flex", position: "relative" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {postComponent}
        </div>
        <Suggestions />
      </div>
    </>
  );
};

export default PostsList;
