import axios from "axios";

export const registerUser = (data) => {
  return axios.post(
    "https://memestagram-io-server.vercel.app/auth/register",
    data
  );
};

export const loginUser = (data) =>
  axios.post("https://memestagram-io-server.vercel.app/auth/login", data);
