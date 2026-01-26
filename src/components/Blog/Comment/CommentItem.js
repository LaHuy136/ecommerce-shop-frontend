function CommentItem({
  comment,
  comments,
  setParentId,
  scrollToCommentBox,
  textareaRef,
  avatarDefault,
}) {
  const childComments = comments.filter((c) => c.parent_id === comment.id);

  const handleReply = () => {
    setParentId(comment.id);
    scrollToCommentBox();
    textareaRef.current?.focus();
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

        {childComments.length > 0 && (
          <ul className="media-list">
            {childComments.map((child) => (
              <CommentItem
                key={child.id}
                comment={child}
                comments={comments}
                setParentId={setParentId}
                scrollToCommentBox={scrollToCommentBox}
                textareaRef={textareaRef}
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
