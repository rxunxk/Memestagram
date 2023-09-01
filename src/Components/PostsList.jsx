import { useState, useEffect } from "react";
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

  const currentUser = getCurrentUser();

  const callGetPostsApi = () => {
    getPosts().then((res) => {
      setPosts(res.data);
    });
  };

  const popPost = (postId) => {
    const updatedArray = posts.filter((p) => p._id !== postId);
    setPosts(updatedArray);
  };

  useEffect(() => {
    callGetPostsApi();
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
          popPost={popPost}
        />
      );
    });
  }

  return (
    <>
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
