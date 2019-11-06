import React, { Component } from "react";

export default class Timer extends Component {
  constructor() {
    super();
    this.state = { timer: 5 };
  }

  componentDidMount() {
    this.timerInterval = setInterval(() => {
      const { timer } = this.state;
      if (timer > 0) {
        this.setState(({ timer }) => ({
          timer: timer - 1
        }));
      } else {
        alert("TIME!");
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  render() {
    // console.log(this.state.timer);
    return (
      <>
        <h1>Time: {this.state.timer}</h1>
      </>
    );
  }
}
