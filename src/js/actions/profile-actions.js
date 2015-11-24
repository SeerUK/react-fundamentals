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
import GithubGateway from "../services/github-gateway-service";
import history from "../utils/history";

export function loadProfile(username) {
    return (dispatch) => {
        dispatch({
            type: Constants.PROFILE_EVENT_LOADING
        });

        GithubGateway.fetchByUsername(username)
            .then((data) => {
                dispatch({
                    type: Constants.PROFILE_EVENT_LOADED,
                    profile: data
                });
            })
            .catch(() => {
                history.pushState(null, "/");
            });
    };
}

export function unloadProfile() {
    return {
        type: Constants.PROFILE_EVENT_UNLOAD
    };
}
