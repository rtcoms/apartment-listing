import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../Home.jsx';
import Apartments from '../Apartments.jsx';

export default (<Router>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/apartments" exact component={Apartments} />
  </Switch>
</Router>);
