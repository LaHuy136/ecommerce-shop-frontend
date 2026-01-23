import axios from "../services/axios";

export const index = async () => {
  const res = await axios.get("/user");
  return res.data;
};

export const update = async (id, data) => {
  const res = await axios.patch(`/user/update/${id}`, data);
  return res.data;
};
