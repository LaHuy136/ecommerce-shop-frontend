import axios from "../services/axios";

export const home = async (params = {}, page = 1) => {
  const res = await axios.get("/home", {
    params: {
      ...params,
      page: page,
    },
  });
  return res.data;
};

export const shop = async (params = {}) => {
  const res = await axios.get("/shop", { params });
  return res.data;
};
