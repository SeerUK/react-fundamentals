"use strict";

var React = require("react");
var History = require("react-router").History;

var SearchGithub = React.createClass({
    mixins: [ History ],
    handleSubmit: function(e) {
        e.preventDefault();

        var username = this.refs.username.value;

        if (!username.length) {
            return;
        }

        this.refs.username.value = "";
        this.history.pushState(null, "profile/" + username);
    },
    render: function() {
        return (
            <form className="navbar-form navbar-right" role="search" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" ref="username" placeholder="Search..." />
                </div>
                &nbsp;
                <button type="submit" className="btn btn-default">
                    Search Github
                </button>
            </form>
        );
    }
});

module.exports = SearchGithub;
