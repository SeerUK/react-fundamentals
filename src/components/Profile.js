"use strict";

var React = require("react");
var ReactFireMixin = require("reactfire");
var Firebase = require("firebase");

var Repos = require("./Github/Repos");
var UserProfile = require("./Github/UserProfile");
var Notes = require("./Notes/Notes");

var Profile = React.createClass({
    mixins: [ ReactFireMixin ],
    getInitialState: function() {
        return {
            bio: { name: "Elliot" },
            notes: [],
            repos: [ 1, 2, 3 ]
        }
    },
    componentDidMount: function() {
        this.baseRef = new Firebase("https://sweltering-inferno-8790.firebaseio.com");
        this.childRef = this.baseRef.child(this.props.params.username);

        this.bindAsArray(this.childRef, "notes");
    },
    componentWillUnmount: function() {
        this.baseRef.off();
        this.childRef.off();
    },
    handleAddNote: function(note) {
        this.childRef.push(note);
    },
    render: function() {
        var username = this.props.params.username;

        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={username} bio={this.state.bio} />
                </div>

                <div className="col-md-4">
                    <Repos username={username} repos={this.state.repos} />
                </div>

                <div className="col-md-4">
                    <Notes
                        username={username}
                        notes={this.state.notes}
                        addNote={this.handleAddNote}
                    />
                </div>
            </div>
        );
    }
});

module.exports = Profile;
