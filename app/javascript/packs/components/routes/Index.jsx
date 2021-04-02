import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../Home.jsx';
import Apartments from '../apartments/Apartments.jsx';
import Navbar from '../Navbar.jsx'

export default (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/apartments" exact component={Apartments} />
      </Switch>
    </div>
  </Router>
);
