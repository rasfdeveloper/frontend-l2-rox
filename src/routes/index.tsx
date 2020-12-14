import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainContent from '../pages/MainContent';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={MainContent} />
  </Switch>
);

export default Routes;