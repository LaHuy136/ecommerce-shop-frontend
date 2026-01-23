import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { show } from "../../api/blogs";
import { formatDate, formatTime } from "../../utils/Date";
import social from "../../assets/images/blog/socials.png";
import shippingBanner from "../../assets/images/home/shipping.jpg";
import { error } from "jquery";
function Show() {
  const isLogin = !!localStorage.getItem("user");
  const user = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [previousBlog, setPreviousBlog] = useState([]);
  const [nextBlog, setNextBlog] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    show(id)
      .then((res) => {
        setBlog(res.blog);
        setPreviousBlog(res.previousBlog);
        setNextBlog(res.nextBlog);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <div class="col-sm-9">
        <div class="blog-post-area">
          <h2 class="title text-center">Latest From our Blog</h2>

          <div class="single-blog-post">
            {/*  Title  */}
            <h3>{blog.title}</h3>

            {/*  Descripton  */}
            <h5>{blog.description}</h5>

            {/*  Author & Post Date  */}
            <div class="post-meta">
              <ul>
                <li>
                  <i class="fa fa-user"></i> {blog?.user?.name}
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
            </div>

            {/* Image */}
            <img src={blog.image} alt="" width="100%" />

            {/* Content */}
            <p>{blog.content}</p>

            <div class="pager-area">
              <ul class="pager pull-right">
                <li>
                  {previousBlog && (
                    <Link to={`/blogs/${previousBlog.id}`} className="prev">
                      ← prev
                    </Link>
                  )}
                </li>
                <li>
                  {nextBlog && (
                    <Link to={`/blogs/${nextBlog.id}`} className="next">
                      next →
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rating-area">
          <ul class="ratings">
            <li class="rate-this">Rate this item:</li>
            <li>
              {[1, 2, 3, 4, 5].map((i) =>
                i < blog?.rates_avg_rating ? (
                  <i class="fa fa-star color"></i>
                ) : (
                  <i class="fa fa-star"></i>
                ),
              )}
            </li>
            <li class="color">({blog.rates_count} rating)</li>
          </ul>
        </div>

        <div class="socials-share">
          <a href="">
            <img src={social} alt="" />
          </a>
        </div>
      </div>
      // Response comment
      <div class="response-area">
        {blog.comments_count > 0 && <h2> {blog.comments_count} RESPONSES</h2>}
        <ul class="media-list" id="comment-list"></ul>
      </div>
      // Comment post
      <div class="replay-box">
        <div class="row">
          <div class="col-sm-12">
            <div class="post-comment">
              <h2>Leave a reply</h2>

              <div class="blank-arrow">
                {!isLogin ? null : <label>{user.name}</label>}
              </div>

              <div class="blank-arrow">
                <label class="text-muted">Please login to comment</label>
              </div>

              <span>*</span>

              <textarea
                id="comment-message"
                name="content"
                rows="5"
                placeholder="Your comment"
              ></textarea>
              <input type="hidden" id="blog-id" value={blog.id} />
              <input type="hidden" id="parent-id" value="" />

              <button id="submit-comment" class="btn btn-primary">
                Post comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Show;
