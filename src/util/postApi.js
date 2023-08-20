import axios from "axios";

export const createPost = async (data) => {
  return await axios.post("http://localhost:8080/posts/", data);
};

export const getPosts = async () => {
  return await axios.get("http://localhost:8080/posts/");
};
