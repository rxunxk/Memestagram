import axios from "axios";

export const createPost = async (data) => {
  return axios.post("http://localhost:8080/posts/", data);
};
