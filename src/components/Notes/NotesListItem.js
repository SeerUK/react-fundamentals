"use strict";

var React = require("react");

var NotesListItem = React.createClass({
    propTypes: {
        note: React.PropTypes.object.isRequired,
        deleteNote: React.PropTypes.func.isRequired
    },
    handleDelete: function() {
        this.props.deleteNote(this.props.note);
    },
    render: function() {
        return (
            <li className="list-group-item">
                <span>{this.props.note[".value"]}</span>
                <button className="btn btn-danger btn-xs pull-right" onClick={this.handleDelete}>
                    &#x2717;
                </button>
            </li>
        );
    }
});

module.exports = NotesListItem;
