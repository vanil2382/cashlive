import { useContext } from "react";
import { useState, useEffect } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";

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
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
      console.log("toggleFavStatusHandler=false");
    }
  }

  return (
     <table>
      <tr>
      <li className={classes.item}>
      {/* <div className={classes.content}> */}
        <td>{props.title}</td>
        <td>{props.address}</td>
        <td>{props.description}</td>
             </li>
      </tr>
       </table>

  );
}

export default MeetupItem;
