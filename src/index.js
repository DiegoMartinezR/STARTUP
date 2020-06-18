import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.9.0";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import RegisterPage from "views/RegisterPage/RegisterPage.js";
import RoutesDasboard from "RoutesDasboard";
import Reservas from "views/Reservas/Reservas";
import Favoritos from "views/Favoritos/Favoritos";
import Comentarios from "views/Comentarios/Comentarios";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/dashboard" component={RoutesDasboard} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/reservas" component={Reservas} />
      <Route path="/comentarios" component={Comentarios} />
      <Route path="/favoritos" component={Favoritos} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
