import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import CardItem from "./components/CardItem";
import jsonfavoritos from "./jsonfavoritos";

export default function Favoritos() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4">Mis Favoritos</Typography>
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
