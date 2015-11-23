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

import Firebase from "firebase";
import GithubGateway from "../services/github-gateway-service";
import Notes from "./notes/notes-component";
import React from "react";
import Repos from "./github/repos-component";
import UserProfile from "./github/user-profile-component";
import { connect } from "react-redux";

/**
 * Profile Component
 *
 * @author Elliot Wright <elliot@elliotwright.co>
 */
class Profile extends React.Component {
    static propTypes = {
        state: React.PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            bio: {},
            repos: []
        };
    }

    init() {
        var username = this.props.params.username;

        this.githubGateway = new GithubGateway();
        this.githubGateway.fetchByUsername(username)
            .then((data) => {
                this.setState({
                    bio: data.bio,
                    repos: data.repos
                })
            });
    }

    componentWillMount() {
        //this.props.dispatch()
    }

    componentDidMount() {
        this.init();
    }

    componentDidUpdate(oldProps) {
        var oldUsername = oldProps.params.username;
        var newUsername = this.props.params.username;

        if (oldUsername !== newUsername) {
            this.init();
        }
    }

    render() {
        var username = this.props.params.username;

        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile bio={this.state.bio} />
                </div>

                <div className="col-md-4">
                    <Repos repos={this.state.repos} />
                </div>

                <div className="col-md-4">
                    <Notes username={username} />
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        bio: {}, //state.profile.bio,
        repos: [] //state.profile.repos
    };
})(Profile);
