import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", comment: "", comments: [], likes: 0 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLikes = this.handleLikes.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(state => {
      let newComments = [...state.comments];
      newComments.push({ name: state.name, comment: state.comment });
      return { value: "", comment: "", comments: newComments };
    });
  }

  handleLikes(event) {
    let newLikes = this.state.likes + 1;
    this.setState({ likes: newLikes });
  }

  render() {
    let comments = this.state.comments.map((item, index) => {
      return (
        <li key={index}>
          {item.name}: {item.comment}
        </li>
      );
    });

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Comment</label>
        <br />
        <input
          name="name"
          type="text"
          value={this.state.name}
          placeholder="Enter Your Name"
          onChange={this.handleChange}
        />
        <br />
        <textarea
          name="comment"
          type="text"
          value={this.state.comment}
          onChange={this.handleChange}
        />
        <br />
        <button>Submit</button>
        <br />
        <button onClick={this.handleLikes}>Likes: {this.state.likes}</button>

        <h3>Comments</h3>
        <ul>{comments}</ul>
      </form>
    );
  }
}
