import React from "react";

class Greeter extends React.Component {
  message = "Lemme dab on you, sucka";
  render() {
    //   JSX
    return <span>{this.message}</span>;
  }
}

export default Greeter;
