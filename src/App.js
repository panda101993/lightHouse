import React from 'react';
import './App.css';
import Navigation from './navigation/Navigation';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
  Switch,
} from 'react-router-dom'
import CreateWebpageInitialSignupProcess from './screens/create_webpage(initial_signup_process)/CreateWebpageInitialSignupProcess';
function App() {
  return (
    <div >
   {/* <Navigation/>  */}
    <Router>
      <Route exact path="/" component={CreateWebpageInitialSignupProcess}></Route>
    </Router>
    </div>
  );
}

export default App;



