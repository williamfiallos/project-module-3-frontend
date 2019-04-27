import React, { Component } from 'react';
import './App.css';

import { Switch, NavLink, Route } from 'react-router-dom';

import Signup from './components/user-pages/Signup';
import Login from './components/user-pages/Login'

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentUser: null, // to update state when there is a user logged in, update to true.
    }
  }

  syncCurrentUser(userInfo) {
    this.setState({ currentUser: userInfo }) // update the state of currentUser with userInfo
  }

  render() {
    return (
      <div>
          <div>
            <NavLink to="/signup"> Sign Up </NavLink>
            <NavLink to="/login"> Log In </NavLink>
          </div>
          
          <div>
            <Switch>
                <Route 
                    path="/signup"
                    render={ () => ( 
                        <Signup 
                        currentUser = { this.state.currentUser }
                        onUserChange = { userInfo => this.syncCurrentUser(userInfo) }
                        />
                    )}
                />
                <Route 
                    path="/login"
                    render= { () => (
                        <Login 
                        currentUser = { this.state.currentUser }
                        onUserChange = { userInfo => this.syncCurrentUser(userInfo) }
                        />
                    )}
                />
            </Switch>
          </div>
      </div>
    )
  }

}

export default App;
