import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Razones para alquilar en ForRent</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Cercanía a tu Institución
                <br />
               
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Con ForRent puedes alojarte cerca a tu universidad, instituto o
                  algún centro de formación profesional.
                </p>
              </CardBody>
            
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
               Mayor tiempo para estudiar
                <br />
               
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Aprovecha todo tu tiempo en realizar cosas productivas y olvidate
                  del tiempo perdido en viajes de transporte.
                </p>
              </CardBody>
             
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
               Ahorro
                <br />
               
              </h4>
              <CardBody>
                <p className={classes.description}>
                Vivir con otras personas te ayudara a reducir tus gastos mensuales 
                y también aminorar tareas del departamento.
                </p>
              </CardBody>
            
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
