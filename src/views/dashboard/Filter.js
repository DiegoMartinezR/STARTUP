import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Steper from './Steper';
import Title from './Title';
import GridContainer from "components/Grid/GridContainer.js";
import FormControl from "@material-ui/core/FormControl";
import GridItem from "components/Grid/GridItem.js";
import Datetime from "react-datetime";
import	SteperMonth from './Stepermonth'
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import Divider from '@material-ui/core/Divider';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
    
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title >Tu Reservación</Title>
      
      <Typography  component="p" variant="h10" >
        Nro. de Personas
      </Typography>
      <Steper></Steper>
      
      
      <Typography  component="p" variant="h10" >
        Nro. de Meses
      </Typography>
      <SteperMonth></SteperMonth>
      

     
      <Typography  component="p" variant="h10" >
       Fecha de Ingreso
      </Typography>
      <TextField
        id="datetime-local"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
      />

      <br></br>
      <br></br>
        <InputLabel > Diego </InputLabel>
        <Divider />
                
             
      
    </React.Fragment>
  );
}