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

import React from "react";
import Router from "react-router";
import routes from "./config/resources/routes";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppStore from "./stores/app-store";

render((
    <Provider store={AppStore} key="provider">
        {routes}
    </Provider>
), document.getElementById("app"));

