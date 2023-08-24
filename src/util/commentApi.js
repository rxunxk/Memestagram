import axios from "axios";

export const getCommentsForThisPost = async (postId) =>
  await axios.get(
    `https://memestagram-io-server.vercel.app/comments/post/${postId}`
  );

export const getTotalCommentsForPost = async (postId) =>
  await axios.get(
    `https://memestagram-io-server.vercel.app/comments/like/count/${postId}`
  );