// import { Route, Switch } from "react-router-dom";

// import { Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <Router>
      <div>
        <MainNavigation />
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
        <Route path="/newmeetup">
          <NewMeetupPage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
