import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Category from '../Pages/Category';
import Group from '../Pages/GroupDetails';
import AddGroup from '../Pages/AddGroup';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/category/:id/:page?" component={Category} />
    <Route path="/group/:id" component={Group} />
    <Route path="/new-group/" component={AddGroup} />
  </Switch>
);
export default Routes;
