import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { index } from "../../api/blogs";
import { formatDate, formatTime } from "../../utils/Date";
function Index() {
  const [blogs, setBlogs] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const fetchBlogs = async (page = 1) => {
    try {
      const response = await index({}, page);
      console.log(response.blogs);

      setBlogs(response.blogs.data);
      setPagination(response.blogs || []);
    } catch (error) {
      console.error("Fetch index blogs error:", error);
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

                <div
                  className="rate pull-right justify-content-center"
                  data-blog={blog.id}
                  data-rate={blog.rates_avg_rating}
                >
                  <div className="vote rating-inline">
                    <div className="rating-stars">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span
                          key={i}
                          className="ratings_stars"
                          data-value={i}
                        ></span>
                      ))}
                      <span className="rating-text">
                        | {blog.rates_count} rating
                      </span>
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
