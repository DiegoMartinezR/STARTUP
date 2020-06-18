import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import jsoncomentarios from "./jsoncomentarios";
import ComentarioItem from "./components/ComentarioItem";

export default function Comentarios() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4">Comentarios de la Pagina</Typography>
      <Grid container spacing={2}>
        {jsoncomentarios.map((comentario, index) => (
          <Grid item xs={12} md={4} lg={4} key={index}>
            <ComentarioItem comentario={comentario} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
