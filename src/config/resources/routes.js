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
import { Router, Route, IndexRoute } from "react-router";
import Main from "../../components/main-component";
import Home from "../../components/home-component";
import Profile from "../../components/profile-component";
import history from "../../utils/history";

export default (
    <Router history={history}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="profile/:username" component={Profile} />
        </Route>
    </Router>
);
