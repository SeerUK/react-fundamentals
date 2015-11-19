import React from "react";
import { IndexLink } from "react-router";
import SearchGithub from "./SearchGithub";

class Main extends React.Component {
    render() {
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <IndexLink to="/" className="navbar-brand">React Fundamentals</IndexLink>
                        </div>

                        <div className="collapse navbar-collapse">
                            <SearchGithub />
                        </div>
                    </div>
                </nav>

                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main;
