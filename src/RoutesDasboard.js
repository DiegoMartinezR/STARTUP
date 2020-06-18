import React from "react";
import MainNavbar from "MainNavbar";
import Reservas from "views/Reservas/Reservas";
import Favoritos from "views/Favoritos/Favoritos";
import Comentarios from "views/Comentarios/Comentarios";
import Dashboard from "views/dashboard/Dashboard";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

var hist = createBrowserHistory();

const RoutesDasboard = () => {
  return (
    <Router history={hist}>
      <Switch>
        <MainNavbar />
        <Route path="/" component={Dashboard} />
        <Route path="/reservas" component={Reservas} />
        <Route path="/comentarios" component={Comentarios} />
        <Route path="/favoritos" component={Favoritos} />
      </Switch>
    </Router>
  );
};

export default RoutesDasboard;
