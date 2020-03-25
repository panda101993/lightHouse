import React from 'react';
import './App.css';
import Login from './screens/Login'
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
        <Route exact path='/' component={Login}></Route>
      </Switch>
    </Router>


  );
}

export default App;
