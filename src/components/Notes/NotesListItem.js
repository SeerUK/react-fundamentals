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
 * Notes List Item Component
 *
 * @author Elliot Wright <elliot@elliotwright.co>
 */
class NotesListItem extends React.Component {
    static propTypes: {
        note: React.PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
    }

    handleDelete = () => {
        this.props.dispatch(NotesActions.removeNote(this.props.note));
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

export default connect()(NotesListItem);
