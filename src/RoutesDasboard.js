import React from "react";
import MainNavbar from "MainNavbar";
import Reservas from "views/Reservas/Reservas";
import Favoritos from "views/Favoritos/Favoritos";
import Comentarios from "views/Comentarios/Comentarios";
import Dashboard from "views/dashboard/Dashboard";
import { Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const RoutesDasboard = () => {
  const classes = useStyles();
  return (
    <div>
      <MainNavbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route exact path="/" render={() => <Dashboard />} />
        <Route exact path="/dashboard/reservas" render={() => <Reservas />} />
        <Route
          exact
          path="/dashboard/comentarios"
          render={() => <Comentarios />}
        />
        <Route exact path="/dashboard/favoritos" render={() => <Favoritos />} />
      </main>
    </div>
  );
};

export default RoutesDasboard;
