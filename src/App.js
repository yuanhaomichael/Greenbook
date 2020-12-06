import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import IndexPage from "./components/auth-layouts/pages";
import Challenge from "./components/Challenge";
import CreateChallenge from "./components/CreateChallenge";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ViewChallenge from "./components/ViewChallenge";
import Layout from "./components/Layout";

import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
// import { Auth } from 'aws-amplify';

class App extends Component {
  render() {
    return (
      <div>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/challenges" component={Challenge} />
            <Route exact path="/create" component={CreateChallenge} />
            <Route exact path="/view" component={ViewChallenge} />
            <Route exact path="/profile/:username" component={Profile} />
            <Route exact path="/sidebar" component={Layout} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
