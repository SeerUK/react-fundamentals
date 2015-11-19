import React from "react";
import AddNote from "./AddNote";
import NotesList from "./NotesList";

class Notes extends React.Component {
    static propTypes = {
        username: React.PropTypes.string.isRequired,
        notes: React.PropTypes.array.isRequired,
        addNote: React.PropTypes.func.isRequired,
        deleteNote: React.PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <h3>Notes for {this.props.username}</h3>

                <AddNote username={this.props.username} addNote={this.props.addNote} />
                <NotesList notes={this.props.notes} deleteNote={this.props.deleteNote} />
            </div>
        );
    }
}

export default Notes;
