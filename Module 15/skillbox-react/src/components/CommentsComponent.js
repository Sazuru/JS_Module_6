import React from "react";

function CommentsComponent(props) {
  return (
    <div className="App">
      {props.data.comments.map(comment => (
        <div key={comment.id}>
          <span style={{ fontStyle: "italic" }}>{comment.date}:</span>
          <p>
            Пользователь: <strong>{comment.name},</strong>
          </p>
          <span>Комментарий: {comment.comment}</span>
          <p>
            <button onClick={props.removeComment.bind(null, comment.id)}>
              Удалить комментарий
            </button>
            <hr />
          </p>
        </div>
      ))}
      <div>
        <label>
          Имя:
          <input
            type="text"
            value={props.data.form.name}
            name="name"
            onChange={props.handleChange}
          ></input>
        </label>
        <label>
          Комментарий:
          <textarea
            name="comment"
            value={props.data.form.comment}
            onChange={props.handleChange}
          ></textarea>
        </label>
        <button onClick={props.addComment}>Добавить комментарий</button>
      </div>
    </div>
  );
}

export default CommentsComponent;
