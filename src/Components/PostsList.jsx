import { useState, useEffect } from "react";
import Suggestions from "../layout/Suggestions";
import { getPosts } from "../util/postApi";
import Post from "./Post";
import { getCurrentUser } from "../util/utilFunctions";
import CommentsDialog from "../dialogs/CommentsDialog";
import { PostSkeleton } from "../skeleton/PostSkeleton";
let postComponent = "";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [postId, setPostId] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const currentUser = getCurrentUser();

  const callGetPostsApi = () => {
    getPosts()
      .then((res) => {
        setIsLoading(false);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  };

  const popPost = (postId) => {
    const updatedArray = posts.filter((p) => p._id !== postId);
    setPosts(updatedArray);
  };

  useEffect(() => {
    callGetPostsApi();

    return () => {
      setIsLoading(true);
    };
  }, []);

  if (isLoading) {
    postComponent = <PostSkeleton />;
  } else {
    if (posts?.length === 0) {
      postComponent = <h1>No Posts. Click create post to add a new post</h1>;
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
            marginBottom: "60px",
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
