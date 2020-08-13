import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import NavBar from "./Components/NavBar/NavBar";
import FrontPageView from './Views/FrontPageView';
import "./index.css";


ReactDOM.render(
    <HashRouter>
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={FrontPageView} />
            </Switch>
        </div>
    </HashRouter>
    , (document.getElementById('root')));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

