import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Clock from "./components/Clock";
import Timer from "./components/Timer";

export default function AppRouter() {
  return (
    <Router>
      <ul className="menu">
        <li className="menu-item">
          <Link to="/">Clock</Link>
        </li>
        <li className="menu-item">
          <Link to="/clockdos">Clock Dos</Link>
        </li>
        <li className="menu-item">
          <Link to="/alarm">Alarm</Link>
        </li>
        <li className="menu-item">
          <Link to="/timer">Timer</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <Clock number={"Uno"} />
        </Route>
        <Route exact path="/clockdos">
          <h1>Clock Dos</h1>
          <Clock number={"Dos"} />
        </Route>
        <Route exact path="/alarm">
          <h1>Alarm Page</h1>
        </Route>
        <Route exact path="/timer">
          <h1>Timer Page</h1>
          <Timer />
        </Route>
      </Switch>
    </Router>
  );
}
