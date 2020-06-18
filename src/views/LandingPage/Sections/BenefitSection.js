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
import Fast from "@material-ui/icons/Speed";

const useStyles = makeStyles(styles);

export default function BenefitSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}> Te ofrecemos...</h2>
          <h5 className={classes.description}>
          Entre los beneficios que ofrecemos están.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
      <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Alquiler rápido"
              description="En 3 simples pasos, puedes encontrar una habitación o departamento y reservar 
              desde tu dispositivo electrónico"
              icon={Fast}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Usuarios Verificados"
              description="Todos nuestros arrendadores y estudiantes son validados con sus respectivos datos.
                            "
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Transparencia" 
              description="Ofrecemos seguridad y confiabilidad a nuestros usuarios con total transparencia"
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>

      </div>
    

  );
}
