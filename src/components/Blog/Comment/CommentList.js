import CommentItem from "./CommentItem";

function CommentList({
  comments,
  setParentId,
  scrollToCommentBox,
  textareaRef,
  avatarDefault,
}) {
  const parentComments = comments.filter((c) => !c.parent_id);

  return (
    <ul className="media-list">
      {parentComments.map((parent) => (
        <CommentItem
          key={parent.id}
          comment={parent}
          comments={comments}
          setParentId={setParentId}
          scrollToCommentBox={scrollToCommentBox}
          textareaRef={textareaRef}
          avatarDefault={avatarDefault}
        />
      ))}
    </ul>
  );
}

export default CommentList;
