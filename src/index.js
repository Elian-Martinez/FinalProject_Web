import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import firebase from "firebase/app"
import "firebase/auth"

import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

const routing = (
<Router>
    <div>
        <Route path="/" component={App} />
        <Route path="firebase.auth().signInWithRedirect(provider);" component={Login} />
        <Route path="/signup" component={SignUp} />
    </div>
</Router>);
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();