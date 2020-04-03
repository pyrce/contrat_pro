import React from "react";
import "./App.css";
import Example from "./autocomplete";
import About from "./about";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  const style = {
    display: "flex",
    direction: "row",
    outline: "solid black 1px",
    justifyContent: "center"
  };
  const mynav = {
    display: "flex",
    direction: "row",
    backgroundColor: "burlywood",
    justifyContent: "space-around",
    width: "30%",
    listStyleType: "none"
  };
  return (
    <div className="App">
      <Router>
        <nav style={style}>
          <ul style={mynav}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/autocomplete">autocomplete</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/autocomplete">
            <Example />
          </Route>
          <Route path="/">
            <app />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
