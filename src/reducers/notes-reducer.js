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

const defaultState = {
    isSyncing: false,
    notes: [],
    notesGateway: null
};

/**
 * Notes Reducer
 *
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */
export default function notesReducer(state = defaultState, action) {
    switch (action.type) {
        case Constants.NOTES_INITIALISE:
            return {
                ...state,
                notesGateway: action.notesGateway
            };

        case Constants.NOTES_UNINITIALISE:
            return {
                notes: [],
                notesGateway: null
            };

        case Constants.NOTES_EVENT_SYNCING:
            return {
                ...state,
                isSyncing: true
            };

        case Constants.NOTES_EVENT_SYNCED:
            return {
                ...state,
                isSyncing: false,
                notes: action.notes
            };

        case Constants.NOTES_PROCESS_NOTE_ADDING:
        case Constants.NOTES_PROCESS_NOTE_ADDED:
        case Constants.NOTES_PROCESS_NOTE_REMOVING:
        case Constants.NOTES_PROCESS_NOTE_REMOVED:
        default:
            return state;
    }
};
