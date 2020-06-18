import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Personadd from "@material-ui/icons/PersonAdd";
import Chat from "@material-ui/icons/Chat";
import Map from "@material-ui/icons/Room";
import Apartment from "@material-ui/icons/Apartment";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}> Alquilar con ForRent en 3 pasos</h2>
          <h5 className={classes.description}>
          Vive la experiencia de compartir un departamento o casa con otras personas y 
          evita la extensa distancia entre tu casa y tu centro de educación profesional.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Registrate / Ingresa"
              description="Registrate en la aplicación o página web. Ingresa tus datos y conéctate"
              icon={Personadd}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Ubica un lugar disponible"
              description="Verifica si existe un lugar disponible cerca de tu centro de Estudios"
              icon={Map}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Reserva tu habitación"
              description="Selecciona la cantidad de personas que rentaran, el rango de fecha y paga online"
              icon={Apartment}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>







  );
}
