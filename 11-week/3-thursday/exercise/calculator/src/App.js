import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      result: ""
    };
  }

  mapButtons = () => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/", "="];

    return array.map(number => {
      return (
        <button name={number} onClick={e => this.onClick(e.target.name)}>
          {number}
        </button>
      );
    });
  };

  onClick = button => {
    if (button === "=") {
      this.calculate();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Calculator">
            <div className="Number-display">0</div>
            {this.mapButtons()}
          </div>
        </header>
      </div>
    );
  }

  // handleLasers(id) {
  //   this.setState(state => ({ isActive: true }));
  //   alert(`IMMA FIRIN' MAH ${id} LASER`);
  // }
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} class="App-logo" alt="logo" />
  //         <button onClick={this.handleLasers}>CHARGIN' MAH LASER 'O'***</button>
  //         <button onClick={e => this.handleLasers("1ST", e)}>
  //           GATHERING MAH LASER!
  //         </button>
  //         <button onClick={e => this.handleLasers("2ND", e)}>
  //           AMASSIN MAH LASER!
  //         </button>
  //         <p>
  //           Are the Laser's firin'? {this.state.isActive ? "true" : "false"}
  //         </p>
  //       </header>
  //     </div>
  //   );
  // }
}
