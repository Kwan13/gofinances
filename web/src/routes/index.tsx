import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

// pages
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import AddTransaction from '../pages/AddTransaction';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/signup" component={SignUp} />
      <Route path="/add" component={AddTransaction} isPrivate />
    </Switch>
  );
};

export default Routes;
