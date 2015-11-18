"use strict";

var React = require("react");

var AddNote = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        addNote: React.PropTypes.func.isRequired
    },
    handleSubmit: function(e) {
        e.preventDefault();

        var note = this.refs.note.value;

        this.refs.note.value = "";
        this.props.addNote(note);
    },
    render: function() {
        return (
            <form className="input-group">
                <input type="text" className="form-control" ref="note" placeholder="Add new note" />
                <span className="input-group-btn">
                    <button className="btn btn-default" type="submit" onClick={this.handleSubmit}>
                        Submit
                    </button>
                </span>
            </form>
        );
    }
});

module.exports = AddNote;
