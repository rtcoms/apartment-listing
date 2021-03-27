import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../Home.jsx';

export default (<Router>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/apartments" exact component={Home} />
  </Switch>
</Router>);