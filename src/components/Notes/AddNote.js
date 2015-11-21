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
import { connect } from "react-redux";
import * as NotesActions from "../../actions/notes-actions";

/**
 * Add Note Component
 *
 * @author Elliot Wright <elliot@elliotwright.co>
 */
class AddNote extends React.Component {
    static propTypes = {
        username: React.PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let note = this.refs.note.value.trim();

        if (note !== "") {
            this.refs.note.value = "";
            this.props.dispatch(NotesActions.addNote({ value: note }));
        }
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

export default connect()(AddNote);
