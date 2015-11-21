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

import * as Constants from "../app-constants";
import NotesGateway from "../services/notes-gateway-service";

export function initialiseNotes(username) {
    const notesGateway = new NotesGateway(username);

    return {
        type: Constants.NOTES_INITIALISE,
        notesGateway
    };
}

export function uninitialiseNotes() {
    return (dispatch, getState) => {
        getState().notes.notesGateway.destroy();

        dispatch({
            type: Constants.NOTES_UNINITIALISE
        });
    };
}

export function noteAdded(note) {
    return {
        type: Constants.NOTES_EVENT_NOTE_ADDED,
        note
    };
}

export function noteRemoved(note) {
    return {
        type: Constants.NOTES_EVENT_NOTE_REMOVED,
        note
    };
}

export function addNote(note) {
    return (dispatch, getState) => {
        dispatch({
            type: Constants.NOTES_PROCESS_NOTE_ADDING
        });

        getState().notes.notesGateway.add(note, () => {
            dispatch({
                type: Constants.NOTES_PROCESS_NOTE_ADDED
            });
        });
    };
}

export function removeNote(note) {
    return (dispatch, getState) => {
        dispatch({
            type: Constants.NOTES_PROCESS_NOTE_REMOVING
        });

        getState().notes.notesGateway.remove(note, () => {
            dispatch({
                type: Constants.NOTES_PROCESS_NOTE_REMOVED
            });
        });
    };
}
