"use strict";

var routes = require("./config/routes");
var render = require("react-dom").render;

render(routes, document.getElementById("app"));
