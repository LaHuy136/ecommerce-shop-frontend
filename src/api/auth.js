import axios from "../services/axios";

export const register = async (data) => {
  const res = await axios.post("/register", data);
  return res.data;
};

export const login = async (data) => {
  const res = await axios.post("/login", data);
  return res.data;
};
