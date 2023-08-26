import axios from "axios";

export const getCommentsForThisPost = async (postId) =>
  await axios.get(
    `https://memestagram-io-server.vercel.app/comments/post/${postId}`
  );

export const getTotalCommentsForPost = async (postId) =>
  await axios.get(
    `https://memestagram-io-server.vercel.app/comments/like/count/${postId}`
  );

export const likeComment = async (commentId, data) =>
  await axios.patch(
    `https://memestagram-io-server.vercel.app/comments/like/${commentId}`,
    data
  );

export const dislikeComment = async (commentId, data) =>
  await axios.patch(
    `https://memestagram-io-server.vercel.app/comments/dislike/${commentId}`,
    data
  );
