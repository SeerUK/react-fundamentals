"use strict";

var React = require("react");

var NotesListItem = require("./NotesListItem");

var NotesList = React.createClass({
    propTypes: {
        notes: React.PropTypes.array.isRequired,
        deleteNote: React.PropTypes.func.isRequired
    },
    render: function() {
        var that = this;

        return (
            <ul className="list-group">
                { this.props.notes.map(function(note, index) {
                    return <NotesListItem key={index} deleteNote={that.props.deleteNote} note={note} />;
                }) }
            </ul>
        );
    }
});

module.exports = NotesList;
