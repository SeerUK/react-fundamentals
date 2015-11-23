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

const prefix = [ "%cDispatchLogger", "color: #CE9B1A; font-weight: bold", "::" ];

/**
 * Dispatch Logger Middleware
 *
 * @author Elliot Wright <elliot@elliotwright.co>
 * @returns {Function}
 */
export default function({ getState }) {
    return (next) => (action) => {
        next(action);

        if (typeof action !== "function") {
            console.info(...prefix, `Action with type '${action.type}' dispatched:`, action, "New state:", getState());
        }
    }
}
