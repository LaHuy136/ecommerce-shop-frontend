import CommentItem from "./CommentItem";

function CommentList({
  comments,
  parentId,
  setParentId,
  textArea,
  setTextArea,
  avatarDefault,
  handleSubmit,
}) {
  const parentComments = comments.filter((c) => !c.parent_id);

  return (
    <ul className="media-list">
      {parentComments.map((parent) => (
        <CommentItem
          key={parent.id}
          comment={parent}
          comments={comments}
          parentId={parentId}
          setParentId={setParentId}
          textArea={textArea}
          setTextArea={setTextArea}
          handleSubmit={handleSubmit}
          avatarDefault={avatarDefault}
        />
      ))}
    </ul>
  );
}

export default CommentList;
