"use strict";

var React = require("react");
var IndexLink = require("react-router").IndexLink;

var SearchGithub = require("./SearchGithub");

var Main = React.createClass({
    render: function() {
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <IndexLink to="/" className="navbar-brand">React Fundamentals</IndexLink>
                        </div>

                        <div className="collapse navbar-collapse">
                            <SearchGithub />
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
