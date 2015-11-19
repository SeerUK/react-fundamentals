import React from "react";

class AddNote extends React.Component {
    static propTypes = {
        username: React.PropTypes.string.isRequired,
        addNote: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let note = this.refs.note.value;

        this.refs.note.value = "";
        this.props.addNote(note);
    };

    render() {
        return (
            <form>
                <div className="form-group">
                    <div className="input-group">
                        <input type="text" className="form-control" ref="note" placeholder="New note..." />

                        <span className="input-group-btn">
                            <button className="btn btn-default" type="submit" onClick={this.handleSubmit}>
                                Add
                            </button>
                        </span>
                    </div>
                </div>
            </form>
        );
    }
}

export default AddNote;
