import React from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import NotFound from './components/NotFound';
import {ProtectedRoute } from './protected.route'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default  App;
