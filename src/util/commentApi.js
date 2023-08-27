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

export const createComment = async (data) =>
  await axios.post(`https://memestagram-io-server.vercel.app/comments/`, data);

export const deleteComment = async (commentId) =>
  await axios.delete(
    `https://memestagram-io-server.vercel.app/comments/${commentId}`
  );
