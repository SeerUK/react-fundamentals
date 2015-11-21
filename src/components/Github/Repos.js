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
 * Repos Component
 *
 * @author Elliot Wright <elliot@elliotwright.co>
 */
class Repos extends React.Component {
    static propTypes: {
        repos: React.PropTypes.array.isRequired
    };

    render() {
        return (
            <div>
                <h3>User Repos</h3>
                <ul className="list-group">
                    {this.props.repos.map((repo, index) => {
                        return (
                            <li className="list-group-item" key={index}>
                                {repo.html_url && <h4><a href={repo.html_url} target="_blank">{repo.name}</a></h4>}
                                {repo.description && <p>{repo.description}</p>}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Repos;
