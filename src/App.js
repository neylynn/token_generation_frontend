import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormPage from './FormPage';
import TokenPage from './TokenPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FormPage} />
        <Route path="/token" component={TokenPage} />
      </Switch>
    </Router>
  );
}

export default App;