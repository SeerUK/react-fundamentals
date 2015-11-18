"use strict";

var React = require("react");
var Link = require("react-router").Link;

var Main = React.createClass({
    render: function() {
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <Link to="/" className="navbar-brand">React Fundamentals</Link>
                        </div>
                    </div>
                </nav>

                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = Main;
