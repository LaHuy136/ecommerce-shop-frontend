import axios from "../services/axios";

export const index = async (params = {}, page = 1) => {
  const res = await axios.get("/blog", {
    params: {
      ...params,
      page: page,
    },
  });
  return res.data;
};

export const show = async (id) => {
  const res = await axios.get(`/blog/detail/${id}`);
  return res.data;
};

export const showComment = async (blogId) => {
  const res = await axios.get(`/blog/${blogId}/comments`);
  return res.data;
};

export const getRating = async () => {
  const res = await axios.get("/blog/rate");
  return res.data;
};

export const storeComment = async (data) => {
  const res = await axios.post(`/user/blog/comment`, data);
  return res.data;
};

export const ratingBlog = async (data) => {
  const res = await axios.post("/user/blog/rate", data);

  return res.data;
};
