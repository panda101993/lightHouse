import React from 'react';
import './App.css';
import Login from './screens/authentication/Login'
import  Signup_User from "./screens/authentication/Signup_User"
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
        {/* <Route path="/Signup" component={Signup_User} /> */}
      </Switch>
    </Router>


  );
}

export default App;
