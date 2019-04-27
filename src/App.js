import React, { Component } from 'react';
import './App.css';

import { Switch, NavLink, Route } from 'react-router-dom';

import Signup from './components/user-pages/Signup';

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
        <Signup 
        currentUser = { this.state.currentUser }
        onUserChange = { userInfo => this.syncCurrentUser(userInfo) }
        />
      </div>
    )
  }

}

export default App;
