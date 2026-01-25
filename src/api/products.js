import { param } from "jquery";
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

export const product = async (param = {}, page = 1) => {
  const res = await axios.get("/user/product/list", {
    params: {
      ...param,
      page: page,
    },
  });
  return res.data;
};

export const createProduct = async (data) => {
  const res = await axios.post("/user/product/add", data);
  return res.data;
};

export const deleteProduct = async (id) => {
  const res = await axios.delete(`/user/product/delete/${id}`);
  return res.data;
};
