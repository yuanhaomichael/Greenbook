import logo from './logo.svg';
import './App.css';

import Amplify, { API } from 'aws-amplify';
import AWS from 'aws-sdk';

import {
    withAuthenticator, AmplifySignOut
} from "@aws-amplify/ui-react";
import { Switch, Redirect, Route, BrowserRouter as Router } from 'react-router-dom'
// import { Auth } from 'aws-amplify';

function Test() {

    function submitPost(e) {
        const docClient = new AWS.DynamoDB.DocumentClient();
        const table = "posts";
    }

    return (
        <div className="test">
            <form onSubmit={submitPost}>
                <div className="descriptionBox">
                    <textarea maxLength="300" rows="5" cols="60" name="description" placeholder="description"/>
                </div>
            </form>
            <AmplifySignOut/>
        </div>
    );
}

export default Test;
