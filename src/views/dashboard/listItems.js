import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Star from "@material-ui/icons/Star";
import Exit from "@material-ui/icons/ExitToApp";
import Person from "@material-ui/icons/Person";
import Map from "@material-ui/icons/Room";
import Domain from "@material-ui/icons/Domain";
import Coment from "@material-ui/icons/Comment";

const paths = [
  {
    title: "Buscar Anuncio",
    icon: <Map />,
    path: "",
  },
  {
    title: "Mis Reservas",
    icon: <Domain />,
    path: "/reservas",
  },
  {
    title: "Mis Comentarios",
    icon: <Coment />,
    path: "/comentarios",
  },
  {
    title: "Mis Favoritos",
    icon: <Star />,
    path: "/favoritos",
  },
];

export const mainListItems = (
  <div>
    <ListSubheader inset>Principal</ListSubheader>
    {paths.map((path, index) => (
      <div key={index} onClick={() => (window.location.href = path.path)}>
        <ListItem button>
          <ListItemIcon>{path.icon}</ListItemIcon>
          <ListItemText primary={path.title} />
        </ListItem>
      </div>
    ))}
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Cuenta</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <Person />
      </ListItemIcon>
      <ListItemText primary="Mi Perfil" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Exit />
      </ListItemIcon>
      <ListItemText primary="Cerrar Sesión" />
    </ListItem>
  </div>
);
