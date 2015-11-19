"use strict";

var React = require("react");
var ReactFireMixin = require("reactfire");
var Firebase = require("firebase");

var Repos = require("./Github/Repos");
var UserProfile = require("./Github/UserProfile");
var Notes = require("./Notes/Notes");

var helpers = require("./utils/helpers");

var Profile = React.createClass({
    mixins: [ ReactFireMixin ],
    getInitialState: function() {
        return {
            bio: {},
            notes: [],
            repos: []
        }
    },
    init: function() {
        var that = this;
        var username = this.props.params.username;

        this.childRef = this.baseRef.child(username);

        this.bindAsArray(this.childRef, "notes");

        helpers.getGithubInfo(username)
            .then(function(data) {
                that.setState({
                    bio: data.bio,
                    repos: data.repos
                })
            });
    },
    componentDidMount: function() {
        this.baseRef = new Firebase("https://sweltering-inferno-8790.firebaseio.com");
        this.init();
    },
    componentDidUpdate: function(oldProps) {
        var oldUsername = oldProps.params.username;
        var newUsername = this.props.params.username;

        if (oldUsername !== newUsername) {
            this.childRef.off();
            this.unbind("notes");
            this.init();
        }
    },
    componentWillUnmount: function() {
        this.baseRef.off();
        this.childRef.off();
    },
    handleAddNote: function(note) {
        this.childRef.push(note);
    },
    handleDeleteNote: function(note) {
        var noteRef = this.childRef.child(note[".key"]);

        noteRef.remove();
        noteRef.off();
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
                        deleteNote={this.handleDeleteNote}
                    />
                </div>
            </div>
        );
    }
});

module.exports = Profile;
