import React from "react";

const AddComment = ({ handleChange, AddComment }) => {
  return (
    <div>
      <label>
        Имя:{" "}
        <input
          type="text"
          value={this.state.form.name}
          name="name"
          onChange={this.handleChange}
        />
      </label>
      <label>
        Комментарий:{" "}
        <textarea
          name="comment"
          value={this.state.form.comment}
          onChange={this.handleChange}
        ></textarea>
      </label>
      <button onClick={this.addComment}>Добавить комментарий</button>
    </div>
  );
};
