import axios from "axios";

export const createPost = async (data) => {
  return await axios.post(
    "https://memestagram-io-server.vercel.app/posts/",
    data
  );
};

export const getPosts = async () => {
  return await axios.get("https://memestagram-io-server.vercel.app/posts/");
};

export const likePost = async (postId, data) => {
  return await axios.patch(
    `https://memestagram-io-server.vercel.app/posts/like/${postId}`,
    data
  );
};

export const dislikePost = async (postId, data) => {
  return await axios.patch(
    `https://memestagram-io-server.vercel.app/posts/dislike/${postId}`,
    data
  );
};

export const deletePost = async (postId) =>
  await axios.delete(
    `https://memestagram-io-server.vercel.app/posts/delete/${postId}`
  );

export const getPostsOfThisUser = async (userId) =>
  await axios.get(
    `https://memestagram-io-server.vercel.app/posts/user/${userId}`
  );

export const updatePost = async (postId, data) =>
  await axios.patch(
    `https://memestagram-io-server.vercel.app/posts/update/${postId}`,
    data
  );
