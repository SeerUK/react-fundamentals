"use strict";

var React = require("react");
var Link = require("react-router").Link;

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <div>Hello world!</div>
                <Link to="/foo">Go to foo</Link>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = Main;
