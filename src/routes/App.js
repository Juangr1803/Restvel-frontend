import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import Home from '@pages/Home';

import '../styles/global.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
