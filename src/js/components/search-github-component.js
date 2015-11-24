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

import history from "../utils/history";
import React from "react";
import * as SearchGithubActions from "../actions/search-github-actions";
import { connect } from "react-redux";

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

        if (!username.trim().length) {
            return;
        }

        this.props.dispatch(SearchGithubActions.searchByUsername(username));
        this.refs.username.value = "";
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
