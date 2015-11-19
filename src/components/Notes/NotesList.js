import React from "react";
import NotesListItem from "./NotesListItem";

class NotesList extends React.Component {
    static propTypes = {
        notes: React.PropTypes.array.isRequired,
        deleteNote: React.PropTypes.func.isRequired
    };

    render() {
        return (
            <ul className="list-group">
                { this.props.notes.map((note, index) => {
                    return <NotesListItem key={index} deleteNote={this.props.deleteNote} note={note} />;
                }) }
            </ul>
        );
    }
}

export default NotesList;
