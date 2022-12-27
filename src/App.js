// import { Route, Switch } from "react-router-dom";

// import { Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./App.css";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./pages/Sidebar";
import ContactPage from "./pages/Contact";
import ActionPage from "./pages/Action";
import SupportPage from "./pages/Support";
import AccountsPage from "./pages/Accounts";
import AboutPage from "./pages/About";

function App() {

  return (
    <><div>
      <select>
        <option value="fruit">Fruit</option>
        <option value="vegetable">Vegetable</option>
        <option value="meat">Meat</option>
      </select>
    </div><Router>
        <div>
          <MainNavigation />
          <Sidebar />

          <Route path="/" exact>
            {/* <AllMeetupsPage /> */}
            <Dashboard />
            <Sidebar />
          </Route>
          <Route path="/dashboard" exact>
            {/* <AllMeetupsPage /> */}
            <Dashboard />
            <Sidebar />
          </Route>
          <Route path="/accounts" exact>
            {/* <AllMeetupsPage /> */}
            <AccountsPage />
            <Sidebar />
          </Route>

          <Route path="/favorites">
            <FavoritesPage />
            <Sidebar />
          </Route>
          <Route path="/support">
            <SupportPage />
            <Sidebar />
          </Route>
          <Route path="/about">
            <AboutPage />
            <Sidebar />
          </Route>
          <Route path="/contact">
            <ContactPage />
            <Sidebar />
          </Route>
          <Route path="/actions">
            <ActionPage />
            <Sidebar />
          </Route>
          <Route path="/newmeetup">
            <NewMeetupPage />
            <Sidebar />
          </Route>
        </div>
      </Router></>
  );
}

export default App;
