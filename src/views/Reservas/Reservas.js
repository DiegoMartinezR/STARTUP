import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ReservasList from "views/Reservas/components/ReservasList";

const Reservas = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4">Mis reservas</Typography>
      <ReservasList />
    </Container>
  );
};
export default Reservas;
