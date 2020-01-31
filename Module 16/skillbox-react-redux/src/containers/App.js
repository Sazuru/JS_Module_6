import React from "react";
import CommentsList from "../components/CommentsList";
import AddComment from "../components/AddComment";

let App = props => {
  return (
    <div>
      <CommentsList />
      <AddComment />
    </div>
  );
};

export default App;
