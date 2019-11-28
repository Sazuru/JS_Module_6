import React from "react";
import CommentsComponent from "./CommentsComponent";

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      form: {
        name: "",
        comment: "",
        date: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.addComment = this.addComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("state")) {
      this.setState({ ...JSON.parse(localStorage.getItem("state")) });
    }
  }

  addComment = () => {
    this.setState(
      {
        comments: [
          ...this.state.comments,
          {
            id: this.state.comments.length
              ? this.state.comments.reduce((p, c) => (p.id > c.id ? p : c)).id +
                1
              : 1,
            name: this.state.form.name,
            comment: this.state.form.comment,
            date: new Date().toLocaleString()
          }
        ],
        form: {
          name: "",
          comment: "",
          date: ""
        }
      },
      () => localStorage.setItem("state", JSON.stringify(this.state))
    );
  };

  removeComment = id => {
    this.setState(
      {
        comments: this.state.comments.filter(comment => comment.id !== id)
      },
      () => localStorage.setItem("state", JSON.stringify(this.state))
    );
  };

  handleChange = e => {
    console.log(e.target.name);
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <CommentsComponent
        addComment={this.addComment}
        removeComment={this.removeComment}
        handleChange={this.handleChange}
        data={this.state}
      />
    );
  }
}
export default Comments;
