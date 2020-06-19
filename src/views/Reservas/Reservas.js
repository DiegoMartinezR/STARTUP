import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ReservasList from "views/Reservas/components/ReservasList";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
  },
  typography: {
    marginBottom: theme.spacing(10),
  },
}));

const Reservas = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h3" className={classes.typography}>
        Mis reservas
      </Typography>
      <ReservasList />
    </Container>
  );
};
export default Reservas;
