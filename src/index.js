import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Token from "./Components/Token";
import Navbar from "./Components/Navbar";
import UploadFile from "./Components/UploadFile"
import Analysis from './Components/Analysis'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/analysis">
          <Analysis />
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
