import React from 'react';
import './App.css';
import Login from './screens/customer/authentication/Login'
import  Signup from "./screens/customer/authentication/Signup"
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
  Switch,
} from 'react-router-dom'

import { createBrowserHistory } from 'history';

var history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/Signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
