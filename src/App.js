import React from 'react';
import './App.css';
import Login from './screens/customer/authentication/Login'
import  Signup from "./screens/customer/authentication/Signup"
import ForgotPassword from "./screens/customer/authentication/Forgotpassword"
import ForgotPasswordOtp from "./screens/customer/authentication/ForgotpasswordOtp"
import ResetPassword from "./screens/customer/authentication/Resetpassword"
import SignupOtp from "./screens/customer/authentication/SignupOtp"
import  LoginRetailer from "./screens/Retailer/authentication/Login"
import SignupRetailer from "./screens/Retailer/authentication/Signup"
import Mywishlist from "./screens/customer/settings/Mywishlist"
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
        <Route path="/" component={SignupRetailer} />
        <Route path="/Signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
