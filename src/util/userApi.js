import axios from "axios";

export const getUser = async (userId) =>
  await axios.get(`https://memestagram-io-server.vercel.app/users/${userId}`);

export const followThisUser = async (userId, data) =>
  await axios.patch(
    `https://memestagram-io-server.vercel.app/users/follow/${userId}`,
    data
  );

export const unFollowThisUser = async (userId, data) =>
  await axios.patch(
    `https://memestagram-io-server.vercel.app/users/unFollow/${userId}`,
    data
  );
