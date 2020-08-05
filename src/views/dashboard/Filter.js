import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import InputAdornment from "@material-ui/core/InputAdornment";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default function Deposits() {
  const [state, setState] = React.useState({
    age: "",
    pais: "",
    depart: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Selecciona lo siguiente:</Title>

      <Typography component="p" variant="h10">
        Instituto o Universidad
      </Typography>

      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />

      <br></br>

      <Typography component="p" variant="h10">
        Distritos encontrados
      </Typography>

      <NativeSelect
        value={state.age}
        onChange={handleChange}
        name="age"
        className={classes.selectEmpty}
        inputProps={{ "aria-label": "age" }}
      >
        <option value={35}>Todos</option>
        <option value={10}>Ate</option>
        <option value={20}>Lima</option>
        <option value={30}>Los Olivos</option>
      </NativeSelect>

      <br></br>

      <Typography component="p" variant="h10">
        Tipo de Alojamiento
      </Typography>

      <NativeSelect
        value={state.pais}
        onChange={handleChange}
        name="pais"
        className={classes.selectEmpty}
        inputProps={{ "aria-label": "pais" }}
      >
        <option value={15}>Todos</option>
        <option value={40}>Habitación privada</option>
        <option value={50}>Habitación de hospedaje</option>
        <option value={60}>Habitación compartida</option>
        <option value={70}>Departamento entero</option>
      </NativeSelect>
      <br></br>

      <Button variant="contained" color="primary">
        Buscar
      </Button>

      <br></br>
      <br></br>
      <InputLabel> Además ordena por: </InputLabel>
      <Divider />
      <br></br>
      <NativeSelect
        value={state.depart}
        onChange={handleChange}
        name="depart"
        className={classes.selectEmpty}
        inputProps={{ "aria-label": "depart" }}
      >
        <option value={25}>Ninguno</option>
        <option value={80}>Más destacado</option>
        <option value={90}>Más comentado</option>
        <option value={100}>Más antiguo</option>
        <option value={110}>Más reciente</option>
      </NativeSelect>

      <br></br>

      <Typography component="p" variant="h10">
        Precio límite
      </Typography>
      <PrettoSlider
        min={0}
        max={3000}
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={500}
      />
    </React.Fragment>
  );
}
