import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Star from '@material-ui/icons/Star';
import Exit from '@material-ui/icons/ExitToApp';
import Person from '@material-ui/icons/Person';
import Map from '@material-ui/icons/Room'
import Domain from '@material-ui/icons/Domain';
import Coment from '@material-ui/icons/Comment';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
    <ListSubheader inset>Principal</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <Map />
      </ListItemIcon>
      <ListItemText primary="Buscar Anuncio" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Domain />
      </ListItemIcon>
      <ListItemText primary="Mis Reservas" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Coment />
      </ListItemIcon>
      <ListItemText primary="Mis Comentarios" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Star />
      </ListItemIcon>
      <ListItemText primary="Mis Favoritos" />
    </ListItem>
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