/**
 * This file is part of the react-fundamentals package.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from "react";
import Firebase from "firebase";
import Repos from "./github/repos-component";
import UserProfile from "./github/user-profile-component";
import Notes from "./notes/notes-component";
import helpers from "../utils/helpers";

/**
 * Profile Component
 *
 * @author Elliot Wright <elliot@elliotwright.co>
 */
class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bio: {},
            notes: [],
            repos: []
        };
    }

    init() {
        var username = this.props.params.username;
        //var notes = [];

        //this.baseRef = new Firebase("https://sweltering-inferno-8790.firebaseio.com");
        //this.childRef = this.baseRef.child(username);
        //
        //this.childRef.on("child_added", (child) => {
        //    notes.push({
        //        key: child.key(),
        //        value: child.val()
        //    });
        //
        //    this.setState({
        //        notes: notes
        //    });
        //});
        //
        //this.childRef.on("child_removed", (child) => {
        //    var notes = this.state.notes;
        //    var index = notes.findIndex(function(note) {
        //        if (note.key === child.key()) {
        //            return true;
        //        }
        //    });
        //
        //    notes.splice(index, 1);
        //
        //    this.setState({
        //        notes: notes
        //    });
        //});

        helpers.getGithubInfo(username)
            .then((data) => {
                this.setState({
                    bio: data.bio,
                    repos: data.repos
                })
            });
    }

    componentDidMount() {
        this.init();
    }

    componentDidUpdate(oldProps) {
        var oldUsername = oldProps.params.username;
        var newUsername = this.props.params.username;

        if (oldUsername !== newUsername) {
            this.init();
        }
    }

    componentWillUnmount() {
        //this.baseRef.off();
        //this.childRef.off();
    }

    handleAddNote = (note) => {
        //this.childRef.push(note);
    };

    handleDeleteNote = (note) => {
        //var noteRef = this.childRef.child(note.key);
        //
        //noteRef.remove();
        //noteRef.off();
    };

    render() {
        var username = this.props.params.username;

        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile bio={this.state.bio} />
                </div>

                <div className="col-md-4">
                    <Repos repos={this.state.repos} />
                </div>

                <div className="col-md-4">
                    <Notes username={username} />
                </div>
            </div>
        );
    }
}

export default Profile;
