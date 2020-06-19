import React from "react";
import { Container, Typography, Grid, makeStyles } from "@material-ui/core";
import CardItem from "./components/CardItem";
import jsonfavoritos from "./jsonfavoritos";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
  },
  typography: {
    marginBottom: theme.spacing(10),
  },
}));

export default function Favoritos() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h3" className={classes.typography}>
        Mis Favoritos
      </Typography>
      <Grid container spacing={2}>
        {jsonfavoritos.map((favorito, index) => (
          <Grid item xs={12} md={4} lg={4} key={index}>
            <CardItem favorito={favorito} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
