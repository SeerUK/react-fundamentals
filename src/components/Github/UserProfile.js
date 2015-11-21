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

/**
 * User Profile
 *
 * @author Elliot Wright <elliot@elliotwright.co>
 */
class UserProfile extends React.Component {
    static propTypes: {
        bio: React.PropTypes.object.isRequired
    };

    render() {
        return (
            <div>
                <h3>User Profile</h3>
                <ul className="list-group">
                    {!!this.props.bio.avatar_url && <li className="list-group-item"><img src={this.props.bio.avatar_url} className="img-rounded img-responsive"/></li>}
                    {!!this.props.bio.name && <li className="list-group-item">Name: {this.props.bio.name}</li>}
                    {!!this.props.bio.login && <li className="list-group-item">Username: {this.props.bio.login}</li>}
                    {!!this.props.bio.email && <li className="list-group-item">Email: {this.props.bio.email}</li>}
                    {!!this.props.bio.location && <li className="list-group-item">Location: {this.props.bio.location}</li>}
                    {!!this.props.bio.company && <li className="list-group-item">Company: {this.props.bio.company}</li>}
                    {!!this.props.bio.followers && <li className="list-group-item">Followers: {this.props.bio.followers}</li>}
                    {!!this.props.bio.following && <li className="list-group-item">Following: {this.props.bio.following}</li>}
                    {!!this.props.bio.public_repos && <li className="list-group-item">Public Repos: {this.props.bio.public_repos}</li>}
                    {!!this.props.bio.blog && <li className="list-group-item">Blog: <a href={this.props.bio.blog}> {this.props.bio.blog}</a></li>}
                </ul>
            </div>
        );
    }
}

export default UserProfile;
