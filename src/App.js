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
import ActionPage from "./pages/Actions";
import SupportPage from "./pages/Support";
import AccountsPage from "./pages/Accounts";
import AboutPage from "./pages/About";
import AdminPage from "./pages/Admin";
import InvoicesPage from "./pages/Invoices";
import PaymentsPage from "./pages/Payments";
import CommentBox from "./pages/CommentBox";


function App() {

  return (
  
    <Router>
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
          <AllMeetupsPage />
           {/* <SupportPage /> */}
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
          <Route path="/admin">
            <AdminPage />
            <Sidebar />
          </Route>
          <Route path="/invoices">
            <InvoicesPage />
            <Sidebar />
          </Route>
          <Route path="/payments">
            <PaymentsPage />
            <Sidebar />
          </Route>
          <Route path="/commentbox">
          <NewMeetupPage />
            <Sidebar />
          </Route>
        </div>
      </Router>
  );
}

export default App;
