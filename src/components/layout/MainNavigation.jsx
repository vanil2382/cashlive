import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>BNK Group</div>
      <nav>
        <ul>
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to="/newmeetup">Insights</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/actions">
              Actions
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
         <li>
          <p style={{ fontSize: '15px', color: 'white', margin: '2rem'}}> loggedin as Anil Vydyam</p>
          </li>
          <li>
          <p style={{ fontSize: '15px', color: 'white', margin: '2rem'}}> CashLive Demo</p>
  </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
