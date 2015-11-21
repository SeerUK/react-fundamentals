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

import Firebase from "firebase";
import AppStore from "../stores/app-store";
import * as NotesActions from "../actions/notes-actions";

/**
 * Notes Gateway
 *
 * @author Elliot Wright <elliot@elliotwright.co>
 */
export default class NotesGateway {
    /**
     * Constructor
     *
     * @param {string} username
     * @returns void
     */
    constructor(username) {
        this.ref = new Firebase(`https://sweltering-inferno-8790.firebaseio.com/${username}`);

        bindEvents(this.ref);
    }

    /**
     * Destructor
     *
     * @returns void
     */
    destroy() {
        this.ref.off();
    }

    /**
     * Add a note
     *
     * @param {object} note
     * @param {function} cb
     * @returns void
     */
    add(note, cb) {
        this.ref.push(note.value, () => {
            if (typeof cb === "function") {
                cb();
            }
        });
    }

    /**
     * Remove a note
     *
     * @param {object} note
     * @param {function} cb
     * @returns void
     */
    remove(note, cb) {
        var noteRef = this.ref.child(note.key);

        noteRef.remove(() => {
            noteRef.off();

            if (typeof cb === "function") {
                cb();
            }
        });
    }
}

function bindEvents(ref) {
    ref.on("value", (dataSnapshot) => {
        let values = dataSnapshot.val();

        console.debug(values);
        console.debug(Object.keys(values).map((key) => {
            let value = values[key];

            return {
                key: key,
                value: value
            };
        }));
    });

    ref.on("child_added", (child) => {
        AppStore.dispatch(NotesActions.noteAdded({
            key: child.key(),
            value: child.val()
        }));
    });

    ref.on("child_removed", (child) => {
        AppStore.dispatch(NotesActions.noteRemoved({
            key: child.key(),
            value: child.val()
        }));
    });
}
