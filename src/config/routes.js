import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import Main from "../components/Main";
import Home from "../components/Home";
import Profile from "../components/Profile";
import history from "../components/utils/history";

// Routing Configuration
export default (
    <Router history={history}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="profile/:username" component={Profile} />
        </Route>
    </Router>
);
