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

import AppStore from "../stores/app-store";
import axios from "axios";
import config from "../config/config";

var reqConfig = {
    headers: { "Authorization": `Basic ${config.github.authorization_token}` }
};

/**
 * Github Gateway
 *
 * @author Elliot Wright <elliot@elliotwright.co>
 */
export default class GithubGateway {
    static fetchByUsername(username) {
        return axios.all([
            GithubGateway.fetchReposByUsername(username),
            GithubGateway.fetchBioByUsername(username)
        ])
            .then(axios.spread((repos, bio) => {
                return {
                    repos: repos.data,
                    bio: bio.data
                }
            }));
    }

    static fetchReposByUsername(username) {
        return axios.get(`https://api.github.com/users/${username}/repos`, reqConfig);
    }

    static fetchBioByUsername(username) {
        return axios.get(`https://api.github.com/users/${username}`, reqConfig);
    }
}
