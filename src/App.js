import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import RouteLogin from "./RouteLogin";
import RouteLogout from "./RouteLogout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink className="active" to="/login">
              Login
            </NavLink>
            <NavLink className="active" to="/dashboard">
              Dashboard
            </NavLink>
            <small>(Access with token only)</small>
          </div>
          <div className="content">
            <Switch>
              <RouteLogin Route exact path="/dashboard" component={Dashboard} />
              <RouteLogout exact path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
