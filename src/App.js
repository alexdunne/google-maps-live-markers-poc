import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";

import AuthRoute from "./components/AuthRoute";

class App extends Component {
  state = {
    loggedIn: false
  };

  render() {
    return (
      <Router>
        <div className="fill-parent">
          <AuthRoute
            exact
            path="/"
            loggedIn={this.state.loggedIn}
            component={Dashboard}
          />
          <Route
            path="/login"
            render={props => (
              <Login
                {...props}
                onSubmit={() => this.setState({ loggedIn: true })}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
