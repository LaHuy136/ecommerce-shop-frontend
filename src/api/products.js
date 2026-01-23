import axios from "../services/axios";

export const home = async (params = {}, page = 1) => {
  const res = await axios.get("/product", {
    params: {
      ...params,
      page: page,
    },
  });
  return res.data;
};

export const shop = async (params = {}, page = 1) => {
  const res = await axios.get("/product/list", {
    params: {
      ...params,
      page: page,
    },
  });
  return res.data;
};

export const show = async (id) => {
  const res = await axios.get(`product/detail/${id}`);
  return res.data;
};
