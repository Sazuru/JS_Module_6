const comments = (state = [], action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return [
        ...state,
        {
          name: action.name,
          id: action.id
        }
      ];
    case "REMOVE_COMMENT":
      return state.filter((comment, id) => id !== action.id);

    default:
      return state;
  }
};

export default comments;
