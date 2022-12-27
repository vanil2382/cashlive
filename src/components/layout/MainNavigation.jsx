import { useContext } from "react";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from '../../pages/Modal';
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

const popupWindow = () => {
  console.log();
 // window.open('http://www.example.com', '_blank', 'width=400,height=400,location=no,toolbar=no');
 window.open('TextMessage.html', 'messageWindow', 'width=400,height=400');
}

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  const [displayModal, setDisplayModal] = useState(false);

  const handleSelect = () => {
    setDisplayModal(true);
  }

  
  return (
<header className={classes.header}>
     <div className={classes.logo}>BNK Group</div>
      <nav>
        <ul>
          <li>
              <select onChange={popupWindow}>
              <option value="bnkbaas">Select Subsidiary</option>
              <option value="bnkbaas">+ BNK BAAS</option>
              <option value="bnkpaas">+ BNK PAAS</option>
              <option value="bnkcaas">+ BNK CAAS</option>
              <option value="bnksaas">+ BNK SAAS</option>
              
            </select>
          </li>
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
            <p style={{ fontSize: '15px', color: 'white', margin: '2rem' }}> loggedin as Anil Vydyam</p>
          </li>
          <li>
            <p style={{ fontSize: '15px', color: 'white', margin: '2rem' }}> CashLive Demo</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
