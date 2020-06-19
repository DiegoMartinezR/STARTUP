import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 300,
  },
  cardContent: {
    minHeight: 100,
  },
});

export default function CardItem({ favorito }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
        image={favorito.img}
        title={favorito.description}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h5">
          {favorito.description}
        </Typography>
        {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" startIcon={<MonetizationOnIcon />}>
          {favorito.precio}
        </Button>
      </CardActions>
    </Card>
  );
}
