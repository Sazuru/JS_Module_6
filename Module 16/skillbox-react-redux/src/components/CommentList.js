import React from "react";
import { removeComment } from "../actions/index";

const CommentList = ({ comments, removeComment, name }) => {
  return (
    <ul>
      {comments.map((comment, index) => {
        return (
          <li key={index}>
            <b>{comment.name + " (" + ")"}</b>{" "}
            <button
              className="btn-remove"
              onClick={ev => {
                removeComment(index);
              }}
            >
              Удалить комментарий
            </button>
            <br />
          </li>
        );
      })}
    </ul>
  );
};

export default CommentList;
