import { useState, useEffect } from "react";
import { index } from "../api/blogs";
import { toast } from "react-toastify";

function useBlogs(currentPage) {
  const [blogs, setBlogs] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBlogs = async (page = 1) => {
    try {
      const response = await index({}, page);

      if (!response?.blogs) {
        toast.error("Invalid blog data");
        setBlogs([]);
        setPagination(null);
        return;
      }

      setBlogs(response.blogs.data || []);
      setPagination(response.blogs || null);
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;

        switch (status) {
          case 401:
            toast.error("Unauthorized, please login again");
            break;

          case 404:
            toast.error("Blogs not found");
            break;

          case 422:
            toast.error("Invalid request parameters");
            console.error("Validation errors:", data?.errors);
            break;

          case 500:
            toast.error("Server error, please try later");
            break;

          default:
            toast.error("Failed to fetch blogs");
            console.error(error.response);
        }
      } else {
        toast.error("Network error, please check your connection");
        console.error(error);
      }

      setBlogs([]);
      setPagination(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    fetchBlogs(currentPage);
  }, [currentPage]);

  return {
    blogs,
    pagination,
    loading,
    refetch: fetchBlogs,
  };
}

export default useBlogs;
