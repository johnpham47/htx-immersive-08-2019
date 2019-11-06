import React, { Component } from "react";

export default class Clock extends Component {
  constructor() {
    super();
    this.state = { time: new Date(), dabs: 9000 };
  }

  componentDidMount() {
    this.clockInterval = setInterval(() => {
      console.log(`Clock ${this.props.number}'s Interval`);
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  render() {
    return (
      <>
        <h2>Houston, TX</h2>
        <h1>{this.state.time.toLocaleTimeString()}</h1>
      </>
    );
  }
}
