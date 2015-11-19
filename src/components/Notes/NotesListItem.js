import React from "react";

class NotesListItem extends React.Component {
    static propTypes: {
        note: React.PropTypes.object.isRequired,
        deleteNote: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    handleDelete = () => {
        this.props.deleteNote(this.props.note);
    };

    render() {
        return (
            <li className="list-group-item">
                <span>{this.props.note.value}</span>
                <button className="btn btn-danger btn-xs pull-right" onClick={this.handleDelete}>
                    &#x2717;
                </button>
            </li>
        );
    }
}

export default NotesListItem;
