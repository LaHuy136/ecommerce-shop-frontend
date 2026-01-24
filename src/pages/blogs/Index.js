import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { index } from "../../api/blogs";
import { formatDate, formatTime } from "../../utils/Date";
import { toast } from "react-toastify";
import Rate from "../../components/rates/Rate";
function Index() {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const isLogin = !!user;
  const [blogs, setBlogs] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

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
      setPagination(response.blogs || []);
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
            console.error("Fetch blogs error:", error.response);
            break;
        }

        setBlogs([]);
        setPagination(null);
      } else {
        toast.error("Network error, please check your connection");
        console.error("Network error:", error);
        setBlogs([]);
        setPagination(null);
      }
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    fetchBlogs(currentPage);
  }, [currentPage]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="blog-post-area col-sm-9">
          <h2 className="title text-center">Latest From our Blog</h2>
          {blogs.map((blog) => (
            <div className="single-blog-post" key={blog.id}>
              {/* Title  */}
              <h3>{blog.title}</h3>

              {/*  Author & Post Date  */}
              <div className="post-meta">
                <ul>
                  <li>
                    <i className="fa fa-user"></i> {blog.user.name}
                  </li>
                  <li>
                    <i className="fa fa-clock-o"></i>{" "}
                    {formatTime(blog.created_at)}
                  </li>
                  <li>
                    <i className="fa fa-calendar"></i>{" "}
                    {formatDate(blog.created_at)}
                  </li>
                </ul>

                <div className="rate pull-right justify-content-center">
                  <div className="vote rating-inline">
                    <div className="rating-stars">
                      <Rate
                        blogId={blog.id}
                        isLogin={isLogin}
                        avgRating={blog.rates_avg_rating}
                        rateCount={blog.rates_count}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Link to={`/blogs/${blog.id}`}>
                <img src={blog.image} alt="Blog Image..." />
              </Link>

              <p>{blog.content}</p>

              <Link className="btn btn-primary" to={`/blogs/${blog.id}`}>
                Read More
              </Link>
            </div>
          ))}

          <div className="justify-content-center">
            <ul className="pagination">
              {pagination?.links.map((link, index) => (
                <li key={index} className={link.active ? "active" : ""}>
                  {link.page ? (
                    <button
                      type="button"
                      disabled={link.active}
                      onClick={() => {
                        setSearchParams((prev) => ({
                          ...Object.fromEntries(prev),
                          page: link.page,
                        }));
                      }}
                      dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                  ) : (
                    <span dangerouslySetInnerHTML={{ __html: link.label }} />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Index;
