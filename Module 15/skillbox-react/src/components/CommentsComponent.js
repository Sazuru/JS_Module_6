import React from "react";
import "./CommentsComponent.css";

function CommentsComponent(props) {
  return (
    <div className="App">
      <div>
        <h2>Оставьте свой комментарий</h2>
        <label>
          Имя:{" "}
          <input
            type="text"
            value={props.data.form.name}
            name="name"
            onChange={props.handleChange}
          ></input>
        </label>
        <label>
          Комментарий:{" "}
          <textarea
            name="comment"
            placeholder="Напишите ваш комментарий"
            value={props.data.form.comment}
            onChange={props.handleChange}
          ></textarea>{" "}
        </label>
        <button onClick={props.addComment}> Добавить комментарий </button>
      </div>
      <hr />
      {props.data.comments.map(comment => (
        <div class="comment_body">
          <div key={comment.id}>
            <span>{comment.date}:</span>
            <p>
              Пользователь: <span class="user">{comment.name}</span>,
            </p>
            <span>Комментарий: {comment.comment}</span>
            <p>
              <button onClick={props.removeComment.bind(null, comment.id)}>
                Удалить комментарий
              </button>
            </p>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default CommentsComponent;
