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

import axios from "axios";
import config from "../config/config";

var reqConfig = {
    headers: { "Authorization": `Basic ${config.github.authorization_token}` }
};

function getRepos(username) {
    return axios.get(`https://api.github.com/users/${username}/repos`, reqConfig);
}

function getUserInfo(username) {
    return axios.get(`https://api.github.com/users/${username}`, reqConfig);
}

var Helpers = {
    getGithubInfo(username) {
        return axios.all([ getRepos(username), getUserInfo(username) ])
            .then(axios.spread((repos, bio) => {
                return {
                    repos: repos.data,
                    bio: bio.data
                }
            }));
    }
};

export default Helpers;
