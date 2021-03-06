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
import NotesListItem from "./notes-list-item-component";

/**
 * Notes List Component
 *
 * @author Elliot Wright <elliot@elliotwright.co>
 */
class NotesList extends React.Component {
    static propTypes = {
        notes: React.PropTypes.array.isRequired
    };

    render() {
        return (
            <ul className="list-group">
                { this.props.notes.map((note, index) => {
                    return <NotesListItem key={index} note={note} />;
                }) }
            </ul>
        );
    }
}

export default NotesList;
