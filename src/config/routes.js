"use strict";

var React = require("react");
var Router = require("react-router").Router;
var Route = require("react-router").Route;
var IndexRoute = require("react-router").IndexRoute;
var createHistory = require("history").createHistory;
var useBaseName = require("history").useBasename;

// Components
var Main = require("../components/Main");
var Home = require("../components/Home");

// Set up base URL
const history = useBaseName(createHistory)({
    basename: "/"
});

// Routing Configuration
module.exports = (
    <Router history={history}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="/foo" component={Home} />
        </Route>
    </Router>
);
