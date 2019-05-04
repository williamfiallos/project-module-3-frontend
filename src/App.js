import React, { Component } from "react";
import "./App.css";

import { Switch, NavLink, Route } from "react-router-dom";

import Signup from "./components/user-pages/Signup";
import Login from "./components/user-pages/Login";
import PostAd from "./components/post-ad/PostAd";
import Dashboard from './components/dashboard/Dashboard';
import AllCars from './components/Posts/AllCars';
import CarDetails from './components/Posts/CarDetails'
import AllHouses from "./components/Posts/AllHouses";
import HouseDetails from "./components/Posts/HouseDetails";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null // to update state when there is a user logged in, update to true.
    };
  }

  syncCurrentUser(userInfo) {
    this.setState({ currentUser: userInfo }); // update the state of currentUser with userInfo
  }

  render() {
    return (
      <div>
        <div>
          {this.state.currentUser ? (
            <span>
              <h1>Craigslist (insert logo here)</h1>
              <button>My account</button>
              <NavLink to="/postad">
                  <button>Post an Ad</button>
              </NavLink>
            </span>
          ) : (
            <span>
              <h1>Craigstlist (insert Logo)</h1>
              <NavLink to="/signup"> Sign Up </NavLink>
              <NavLink to="/login"> Log In </NavLink>
            </span>
          )}
        </div>

        <div>
          <Switch>
            <Route
              path="/signup"
              render={() => (
                <Signup
                  currentUser={this.state.currentUser}
                  onUserChange={userInfo => this.syncCurrentUser(userInfo)}
                />
              )}
            />
            <Route
              path="/login"
              render={() => (
                <Login
                  currentUser={this.state.currentUser}
                  onUserChange={userInfo => this.syncCurrentUser(userInfo)}
                />
              )}
            />

            <Route
              path="/postad"
              render={() => (
                <PostAd
                  currentUser={this.state.currentUser}
                  // onUserChange={userInfo => this.syncCurrentUser(userInfo)}
                />

              )}
            />

            <Route
            path="/forsale/cars"
            render={() => (
              <AllCars />
            )}
            />
          
            <Route
            path="/cars/:carid"
            component = {
              CarDetails
            }
            />

            <Route 
            path="/foresale/housing"
            render={() => (
              <AllHouses />
            )}
            />
            <Route 
            path="/housing/:houseid"
            component = {
              HouseDetails
            }
            />

          <Dashboard />
          </Switch>


        </div>
      </div>
    );
  }
}

export default App;
