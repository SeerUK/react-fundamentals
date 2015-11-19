import React from "react";
import history from "./utils/history";

class SearchGithub extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        var username = this.refs.username.value;

        if (!username.length) {
            return;
        }

        this.refs.username.value = "";

        history.pushState(null, "profile/" + username);
    };

    render() {
        return (
            <form className="navbar-form navbar-right" role="search" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" ref="username" placeholder="Search..." />
                </div>
                &nbsp;
                <button type="submit" className="btn btn-default">
                    Search Github
                </button>
            </form>
        );
    }
}

export default SearchGithub;
