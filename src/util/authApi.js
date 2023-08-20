import axios from "axios";

export const registerUser = (data) => {
  return axios.post("http://localhost:8080/auth/register", data);
};
