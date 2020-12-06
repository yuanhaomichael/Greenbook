import logo from './logo.svg';
import './App.css';

import {
    withAuthenticator, AmplifySignOut
} from "@aws-amplify/ui-react";
import { Switch, Redirect, Route, BrowserRouter as Router } from 'react-router-dom'
// import { Auth } from 'aws-amplify';

function Home() {
    return (
        <div className="home">
           <h1>Home</h1>
            <AmplifySignOut/>
        </div>
    );
}

export default Home;
