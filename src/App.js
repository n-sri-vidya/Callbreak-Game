import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink,Routes } from 'react-router-dom';

import axios from 'axios';

import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';
import signUp from './components/signUp';
import './components/Game.css';
import Game from './components/Game';


import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <div className="App1">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path='/signUp' component={signUp} />
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/Game" component={Game} />
            </Switch>
          </div>
        
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;