import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Category from '../Pages/Category';
import Group from '../Pages/GroupDetails';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/category/:id/:page?" component={Category} />
    <Route path="/group/:id" component={Group} />
  </Switch>
);
export default Routes;
