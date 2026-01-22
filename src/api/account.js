import axios from "../services/axios";

export const index = async () => {
  const res = await axios.get("/accounts");
  return res.data;
};

export const update = async (id, data) => {
  const res = await axios.patch(`/accounts/${id}`, data);
  return res.data;
};
