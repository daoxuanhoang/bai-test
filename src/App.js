import React, { useState } from "react";
import "./App.css";
import Login from "./modules/signin/index";
import Register from "./modules/signup";
import PrivateLayout from "./commons/priviteLayout/index";

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import {Switch } from "react-router";

function App() {
  const [users, setUser] = useState({ name: "", email: "" });
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/login">
            <Login users={users} setUser={setUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateLayout users={users} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
