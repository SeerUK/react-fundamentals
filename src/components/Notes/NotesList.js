"use strict";

var React = require("react");

var NotesList = React.createClass({
    render: function() {
        return (
            <ul className="list-group">
                {this.props.notes.map(function(note, index) {
                    return (
                        <li className="list-group-item" key={index}>
                            {note[".value"]}
                        </li>
                    );
                })}
            </ul>
        );
    }
});

module.exports = NotesList;
