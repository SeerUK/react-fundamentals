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

import { applyMiddleware, combineReducers, createStore } from "redux";
import dispatchLogMiddleware from "../middleware/dispatch-log-middleware";
import thunkMiddleware from "../middleware/thunk-middleware";
import * as reducers from "../reducers/reducers";

const buildStore = applyMiddleware(dispatchLogMiddleware, thunkMiddleware)(createStore);

/**
 * Build Application Store
 *
 * @author Elliot Wright <elliot@elliotwright.co>
 */
export default class AppStoreFactory {
    static build(initialState) {
        return buildStore(combineReducers({
            notes: reducers.notesReducer,
            profile: reducers.profileReducer,
            searchGithub: reducers.searchGithubReducer
        }), initialState);
    }
}
