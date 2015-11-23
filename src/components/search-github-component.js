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
import { connect } from "react-redux";
import history from "../utils/history";

/**
 * Search Github Component
 *
 * @author Elliot Wright <elliot@elliotwright.co>
 */
class SearchGithub extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        var username = this.refs.username.value;

        if (!username.length) {
            return;
        }

        this.refs.username.value = "";

        history.pushState(null, "profile/" + username);
    };

    render() {
        return (
            <form className="navbar-form navbar-right" role="search" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" ref="username" placeholder="Search..." />
                </div>
                &nbsp;
                <button type="submit" className="btn btn-default">
                    Search Github
                </button>
            </form>
        );
    }
}

export default connect()(SearchGithub);
