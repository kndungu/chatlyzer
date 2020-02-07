import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Token from "./Components/Token";
import Navbar from "./Components/Navbar";
import UploadFile from "./Components/UploadFile"

import { HashRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/about">
          <div>Users</div>
        </Route>
        <Route path="/upload">
          <UploadFile />
        </Route>
        <Route path="/">
          <Token />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
