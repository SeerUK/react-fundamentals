import axios from "axios";

var config = {
    headers: { "Authorization": "" }
};

function getRepos(username) {
    return axios.get(`https://api.github.com/users/${username}/repos`, config);
}

function getUserInfo(username) {
    return axios.get(`https://api.github.com/users/${username}`, config);
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
