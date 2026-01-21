import axios from "../services/axios";

export const index = async (params = {}, page = 1) => {
  const res = await axios.get("/blogs", {
    params: {
      ...params,
      page: page,
    },
  });
  return res.data;
};

export const show = async (id) => {
  const res = await axios.get(`/blogs/${id}`);
  return res.data;
};
