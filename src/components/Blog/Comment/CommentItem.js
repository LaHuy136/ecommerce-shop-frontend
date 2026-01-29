function CommentItem({
  comment,
  comments,
  parentId,
  setParentId,
  textarea,
  setTextArea,
  handleSubmit,
  errors,
  avatarDefault,
}) {
  const childComments = comments.filter((c) => c.parent_id === comment.id);

  const handleReply = () => {
    setParentId(comment.id);
  };

  return (
    <li className={`media ${comment.parent_id ? "second-media" : ""}`}>
      <div className="pull-left">
        <img
          className="media-object"
          src={comment.user_avatar ? comment.user_avatar : avatarDefault}
          alt="Avatar User"
          width="100"
          height="100"
        />
      </div>

      <div className="media-body">
        {/* Meta */}
        <ul className="sinlge-post-meta">
          <li>
            <i className="fa fa-user"></i>
            {comment.user_name}
          </li>
          <li>
            <i className="fa fa-clock-o"></i>
            {comment.created_at_time}
          </li>
          <li>
            <i className="fa fa-calendar"></i>
            {comment.created_at_date}
          </li>
        </ul>

        {/* Content */}
        <p>{comment.content}</p>

        {/* Reply button */}
        <button className="btn btn-primary" onClick={handleReply}>
          <i className="fa fa-reply"></i> Reply
        </button>

        {parentId === comment.id && (
          <div className="replay-box">
            <div className="post-comment">
              <form onSubmit={handleSubmit}>
                <textarea
                  name="content"
                  rows="5"
                  placeholder=" Your comment"
                  value={textarea}
                  onChange={(e) => setTextArea(e.target.value)}
                ></textarea>

                <p className="text-muted">
                  Replying to comment #{parentId}
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      setParentId(null);
                    }}
                    style={{ margin: "10px 10px" }}
                  >
                    Cancel
                  </button>
                </p>

                <span>{errors}</span>
                <button
                  id="submit-comment"
                  className="btn btn-primary"
                  style={{ padding: "10px", fontSize: "12px" }}
                >
                  Post comment
                </button>
              </form>
            </div>
          </div>
        )}

        {childComments.length > 0 && (
          <ul className="media-list">
            {childComments.map((child) => (
              <CommentItem
                key={child.id}
                comment={child}
                comments={comments}
                parentId={parentId}
                setParentId={setParentId}
                handleSubmit={handleSubmit}
                textarea={textarea}
                setTextArea={setTextArea}
                errors={errors}
                avatarDefault={avatarDefault}
              />
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

export default CommentItem;
