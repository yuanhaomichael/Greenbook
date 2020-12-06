import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import IndexPage from "./components/auth-layouts/pages";
import Home from "./components/Home";
import Challenge from "./components/Challenge";
import CreateChallenge from "./components/CreateChallenge";
import ViewChallenge from "./components/ViewChallenge";
import Profile from "./components/Profile";
import Layout from "./components/Layout";
import React from "react";

const MainApp = (props) => {
    if (props.authState === 'signedIn') {
        return (
            <>
                <Router basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <Route exact path="/" component={IndexPage}/>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/challenges" component={Challenge}/>
                        <Route exact path="/create" component={CreateChallenge}/>
                        <Route exact path="/view" component={ViewChallenge}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route exact path="/sidebar" component={Layout}/>
                    </Switch>
                </Router>
            </>);
    } else {
        return null;
    }
}

export default MainApp;