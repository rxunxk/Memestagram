import axios from "axios";

export const createPost = async (data) => {
  return await axios.post("http://localhost:8080/posts/", data);
};

export const getPosts = async () => {
  return await axios.get("http://localhost:8080/posts/");
};

export const likePost = async (postId, data) => {
  return await axios.patch(`http://localhost:8080/posts/like/${postId}`, data);
};

export const dislikePost = async (postId, data) => {
  return await axios.patch(
    `http://localhost:8080/posts/dislike/${postId}`,
    data
  );
};
