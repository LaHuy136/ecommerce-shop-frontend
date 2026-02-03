import { Link, useSearchParams } from "react-router-dom";
import { formatDate, formatTime } from "../../utils/Date";
import Rate from "./Rate/Rating";
import useBlogs from "../../hooks/useBlogs";
import { ClipLoader } from "react-spinners";

function Index() {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const isLogin = !!user;

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const { blogs, pagination, loading } = useBlogs(currentPage);

  return (
    <div className="container">
      <div className="row">
        {loading && <ClipLoader size={50} />}

        {!loading && (
          <div>
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

                  <Link to={`/blog/detail/${blog.id}`}>
                    <img src={blog.image} alt="Blog Image..." />
                  </Link>

                  <p>{blog.content}</p>

                  <Link
                    className="btn btn-primary"
                    to={`/blog/detail/${blog.id}`}
                  >
                    Read More
                  </Link>
                </div>
              ))}

              {/* Pagination */}
              <div
                className="justify-content-center"
                style={{ marginTop: "20px" }}
              >
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
                        <span
                          dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Index;
