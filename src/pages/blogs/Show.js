import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { show, showComment, storeComment } from "../../api/blogs";
import { formatDate, formatTime } from "../../utils/Date";
import social from "../../assets/images/blog/socials.png";
import avatarDefault from "../../../src/assets/images/users/5.jpg";
import { toast } from "react-toastify";
import CommentList from "../../components/comments/CommentList";
function Show() {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const isLogin = !!user;
  const { id } = useParams();

  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);
  const [parentId, setParentId] = useState(null);

  const [previousBlog, setPreviousBlog] = useState(null);
  const [nextBlog, setNextBlog] = useState(null);

  const [textarea, setTextArea] = useState("");
  const textareaRef = useRef(null);

  const [errors, setErrors] = useState("");

  const showBlog = async (id) => {
    await show(id)
      .then((res) => {
        setBlog(res.blog);
        setPreviousBlog(res.previousBlog);
        setNextBlog(res.nextBlog);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const fetchComments = async (blogId) => {
    await showComment(blogId)
      .then((res) => {
        setComments(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Load comments
  useEffect(() => {
    if (blog?.id) {
      fetchComments(blog.id);
    }
  }, [blog?.id]);

  // Load blog
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    showBlog(id);
  }, [id]);

  const scrollToCommentBox = () => {
    textareaRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login to comment");
      setTextArea("");
      return;
    }

    if (!textarea.trim()) {
      setErrors("Please enter your comment");
      setTextArea("");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("blog_id", null);
      formData.append("parent_id", parentId);
      formData.append("content", textarea);

      await storeComment(formData);

      setTextArea("");
      setParentId(null);
      fetchComments(blog.id);
      toast.success("Comment posted successfully");
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;

        if (status === 401) {
          toast.error("Please login to comment");
        } else if (status === 422) {
          setErrors(error.response.data.errors?.content?.[0]);
          toast.error(data.message || "Validation error");
        } else {
          toast.error("Post comment failed, please try again");
        }
      } else {
        toast.error("Network error, please check your connection");
      }
    }
  };

  return (
    <div className="container">
      <div className="col-sm-9">
        <div className="blog-post-area">
          <h2 className="title text-center">Latest From our Blog</h2>

          <div className="single-blog-post" key={blog.id}>
            {/*  Title  */}
            <h3>{blog.title}</h3>

            {/*  Descripton  */}
            <h5>{blog.description}</h5>

            {/*  Author & Post Date  */}
            <div className="post-meta">
              <ul>
                <li>
                  <i className="fa fa-user"></i> {blog?.user?.name}
                </li>
                <li>
                  <i className="fa fa-clock-o"></i>
                  {formatTime(blog.created_at)}
                </li>
                <li>
                  <i className="fa fa-calendar"></i>
                  {formatDate(blog.created_at)}
                </li>
              </ul>
            </div>

            {/* Image */}
            <img src={blog.image} alt="" width="100%" />

            {/* Content */}
            <p>{blog.content}</p>

            <div className="pager-area">
              <ul className="pager pull-right">
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

        <div className="rating-area">
          <ul className="ratings">
            <li className="rate-this">Rate this item:</li>
            <li>
              {[1, 2, 3, 4, 5].map((i) =>
                i < blog?.rates_avg_rating ? (
                  <i key={i} className="fa fa-star color"></i>
                ) : (
                  <i key={i} className="fa fa-star"></i>
                ),
              )}
            </li>
            <li className="color">({blog.rates_count} rating)</li>
          </ul>
        </div>

        <div className="socials-share">
          <div>
            <img src={social} alt="" />
          </div>
        </div>
      </div>
      {/*  Response comment */}
      <div className="response-area">
        {blog.comments_count > 0 && <h2> {blog.comments_count} RESPONSES</h2>}
        <CommentList
          comments={comments}
          setParentId={setParentId}
          scrollToCommentBox={scrollToCommentBox}
          textareaRef={textareaRef}
          avatarDefault={avatarDefault}
        />
      </div>
      {/* Comment post */}
      <div className="replay-box">
        <div className="row">
          <div className="col-sm-12">
            <div className="post-comment">
              <h2>Leave a reply</h2>

              <div className="blank-arrow">
                {!isLogin ? null : <label>{user.name}</label>}
              </div>

              <div className="blank-arrow">
                <label className="text-muted">Please login to comment</label>
              </div>

              <span>*</span>

              <form onSubmit={handleSubmit}>
                <textarea
                  ref={textareaRef}
                  name="content"
                  rows="5"
                  placeholder=" Your comment"
                  value={textarea}
                  onChange={(e) => setTextArea(e.target.value)}
                ></textarea>

                {parentId && (
                  <p className="text-muted">
                    Replying to comment #{parentId}
                    <button
                      className="btn btn-link"
                      onClick={() => {
                        setParentId(null);
                        window.scrollTo({
                          top: 150,
                          block: "center",
                          behavior: "smooth",
                        });
                      }}
                    >
                      Cancel
                    </button>
                  </p>
                )}
                <span>{errors}</span>
                <button id="submit-comment" className="btn btn-primary">
                  Post comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Show;
