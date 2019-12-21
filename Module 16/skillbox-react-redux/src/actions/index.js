//action creators
let nextCommentId = 1;
export const addComment = name => {
  return {
    type: "ADD_COMMENT",
    id: nextCommentId++,
    name
  };
};

export const removeComment = id => {
  return {
    type: "REMOVE_COMMENT",
    id
  };
};
