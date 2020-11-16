import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import AddTransaction from '../pages/AddTransaction';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/add" component={AddTransaction} />
    </Switch>
  );
};

export default Routes;
