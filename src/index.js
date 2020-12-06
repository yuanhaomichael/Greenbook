import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import initialize from "./assets/js/main.js";
import "./index.css";
import "./assets/css/style.css";
import "./assets/css/customize.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import registerServiceWorker from "./registerServiceWorker";

import Amplify from "aws-amplify";
import config from "./aws-exports";

Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
initialize();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
