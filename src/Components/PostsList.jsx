import { useState, useEffect } from "react";
import CommentDialog from "../dialogs/CommentDialog";
import Suggestions from "../layout/Suggestions";
import { getPosts } from "../util/postApi";
import Post from "./Post";
import { getCurrentUser } from "../util/utilFunctions";

let postComponent = "";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const currentUser = getCurrentUser();

  useEffect(() => {
    getPosts().then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  }, []);

  if (posts?.length === 0) {
    postComponent = <h3>No Posts available!</h3>;
  } else {
    postComponent = posts?.map((meme, index) => {
      console.log(currentUser);
      return (
        <Post
          post={meme}
          key={index}
          setCurrentPost={setCurrentPost}
          setShowComments={setShowComments}
          currentUser={currentUser}
        />
      );
    });
  }

  return (
    <>
      <CommentDialog
        open={showComments}
        setOpen={setShowComments}
        post={currentPost}
        key={Math.random()}
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
