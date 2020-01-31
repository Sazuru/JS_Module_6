import React from "react";

const TodoList = props => {
  const { comment, removeComment } = props;
  return (
    <div className="App">
      <h2>Комментарии:</h2>
      {comments.map(comment => (
        <div key={comment.id}>
          <span style={{ fontStyle: "italic" }}>
            {comment.id} - {comment.date}:
          </span>
          <strong>{comment.name}, </strong>
          <span>{comment.comment}</span>
          <button onClick={ev => removeComment.bind(null, comment.id)}>
            {/* <button onClick={this.removeComment.bind(null, comment.id)}> */}
            Удалить комментарий
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
