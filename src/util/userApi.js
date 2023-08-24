import axios from "axios";

export const getUser = async (userId) =>
  await axios.get(`https://memestagram-io-server.vercel.app/users/${userId}`);
