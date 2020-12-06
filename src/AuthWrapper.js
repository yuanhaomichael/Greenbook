import React, { useState} from "react";
import Main from './components/authentication/layout/Main';
import MainApp from './MainApp';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import IndexPage from "./components/auth-layouts/pages";

import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Authenticator } from "aws-amplify-react";

// import { Auth } from 'aws-amplify';

const AuthWrapper = (props) => {
    const [userName, setUserName] = useState("");
    return (
        <div>
            <Main authState={props.authState} updateUsername={setUserName} onStateChange={props.onStateChange} />
            <MainApp authState={props.authState} onStateChange={props.onStateChange} />
        </div>
    );
}

export default AuthWrapper;