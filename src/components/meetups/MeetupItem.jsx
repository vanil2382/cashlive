import { useContext } from "react";
import { useState, useEffect } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";
import "../../pages/CommentBox.css"

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
      console.log("toggleFavStatusHandler=True");
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        description: props.description,

      });
      console.log("toggleFavStatusHandler=false");
    }
  }

  return (

 <body>{props.description}</body>
  );
}

export default MeetupItem;
