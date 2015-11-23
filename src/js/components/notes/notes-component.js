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

import * as NotesActions from "../../actions/notes-actions";
import AddNote from "./add-note-component";
import ComponentGroup from "../component-group-component";
import LoadingIndicator from "../loading-indicator-component";
import NotesList from "./notes-list-component";
import React from "react";
import { connect } from "react-redux";

/**
 * Notes Component
 *
 * @author Elliot Wright <elliot@elliotwright.co>
 */
class Notes extends React.Component {
    static propTypes = {
        isSyncing: React.PropTypes.bool.isRequired,
        notes: React.PropTypes.array.isRequired,
        username: React.PropTypes.string.isRequired
    };

    componentWillUpdate(newProps) {
        if (this.props.username !== newProps.username) {
            this.props.dispatch(NotesActions.uninitialiseNotes());
            this.props.dispatch(NotesActions.initialiseNotes(newProps.username));
        }
    }

    componentWillMount() {
        this.props.dispatch(NotesActions.initialiseNotes(this.props.username));
    }

    componentWillUnmount() {
        this.props.dispatch(NotesActions.uninitialiseNotes());
    }

    render() {
        return (
            <div>
                <h3>Notes for {this.props.username}</h3>

                {this.props.isSyncing &&
                    <LoadingIndicator />
                }

                {!this.props.isSyncing && (
                    <ComponentGroup>
                        <AddNote username={this.props.username} />
                        <NotesList notes={this.props.notes} />
                    </ComponentGroup>
                )}
            </div>
        );
    }
}

export default connect((state) => {
    return {
        isSyncing: state.notes.isSyncing,
        notes: state.notes.notes
    };
})(Notes);
