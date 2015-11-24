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

import * as ProfileActions from "../actions/profile-actions";
import ComponentGroup from "./component-group-component";
import Firebase from "firebase";
import GithubGateway from "../services/github-gateway-service";
import LoadingIndicator from "./loading-indicator-component";
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
        bio: React.PropTypes.object.isRequired,
        isLoading: React.PropTypes.bool.isRequired,
        repos: React.PropTypes.array.isRequired,
    };

    componentWillMount() {
        this.props.dispatch(ProfileActions.loadProfile(this.props.params.username));
    }

    componentWillUnmount() {
        this.props.dispatch(ProfileActions.unloadProfile());
    }

    componentDidUpdate(oldProps) {
        var oldUsername = oldProps.params.username;
        var newUsername = this.props.params.username;

        if (oldUsername !== newUsername) {
            this.props.dispatch(ProfileActions.unloadProfile());
            this.props.dispatch(ProfileActions.loadProfile(newUsername));
        }
    }

    render() {
        var username = this.props.params.username;

        return (
            <div className="row">
                {this.props.isLoading &&
                    <div className="col-md-12">
                        <LoadingIndicator />
                    </div>
                }

                {!this.props.isLoading &&
                    <ComponentGroup>
                        <div className="col-md-4">
                            <UserProfile bio={this.props.bio} />
                        </div>

                        <div className="col-md-4">
                            <Repos repos={this.props.repos} />
                        </div>

                        <div className="col-md-4">
                            <Notes username={username} />
                        </div>
                    </ComponentGroup>
                }
            </div>
        );
    }
}

export default connect((state) => {
    return {
        bio: state.profile.bio,
        isLoading: state.profile.isLoading,
        repos: state.profile.repos
    };
})(Profile);
