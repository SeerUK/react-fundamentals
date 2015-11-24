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
    isLoading: true,
    bio: {},
    repos: []
};

/**
 * Profile Reducer
 *
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */
export default function profileReducer(state = defaultState, action) {
    switch (action.type) {
        case Constants.PROFILE_EVENT_LOADING:
            return {
                ...state,
                isLoading: true
            };

        case Constants.PROFILE_EVENT_LOADED:
            return {
                ...state,
                isLoading: false,
                bio: action.profile.bio,
                repos: action.profile.repos
            };

        case Constants.PROFILE_EVENT_UNLOAD:
            return {
                ...defaultState
            };

        default:
            return state;
    }
}
