import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LogIn } from './LogIn/LogIn';
import { LogedIn } from './LogedIn/LogedIn';


export default class App extends React.Component {

  render() {
      return (
          <Router>
              <Switch>
                  <Route exact path='/' component={LogIn} />

                  <Route path='/logIn'
                      component={LogIn} />
                
                 <Route path='/logedIn'
                      component={LogedIn} />

                  <Route path='*'
                      component={LogIn} />
              </Switch>
          </Router>
      );
  }
}
