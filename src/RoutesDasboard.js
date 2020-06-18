import React from "react";
import MainNavbar from "MainNavbar";
import Reservas from "views/Reservas/Reservas";
import Favoritos from "views/Favoritos/Favoritos";
import Comentarios from "views/Comentarios/Comentarios";
import Dashboard from "views/dashboard/Dashboard";
import { Route } from "react-router-dom";

const RoutesDasboard = () => {
  return (
    <div>
      <MainNavbar />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/reservas" component={Reservas} />
      <Route exact path="/comentarios" component={Comentarios} />
      <Route exact path="/favoritos" component={Favoritos} />
    </div>
  );
};

export default RoutesDasboard;
