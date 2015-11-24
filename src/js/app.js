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

require("../scss/app.scss");

import AppStore from "./stores/app-store";
import history from "./utils/history";
import React from "react";
import Router from "react-router";
import routes from "./config/resources/routes";
import { Provider } from "react-redux";
import { render } from "react-dom";

render((
    <Provider store={AppStore} key="provider">
        <Router history={history}>
            {routes}
        </Router>
    </Provider>
), document.getElementById("app"));

