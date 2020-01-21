import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Latest from './pages/Latest';
import MyList from './pages/MyList';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/latest" component={Latest} />
      <Route path="/my-list" component={MyList} />
    </Switch>
  );
}
