import React from 'react';
import './App.css';
import LandingPage from './containers/LandingPage';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './containers/Header';

const baseName = process.env.APP_BASE_NAME || '';

function App() {
  return (
    <Router basename={baseName}>
      <Header />
      <div className="app">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
