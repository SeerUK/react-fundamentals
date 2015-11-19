"use strict";

var axios = require("axios");
var config = {
    headers: { "Authorization": "" }
};

function getRepos(username) {
    return axios.get("https://api.github.com/users/" + username + "/repos", config);
}

function getUserInfo(username) {
    return axios.get("https://api.github.com/users/" + username, config);
}

var helpers = {
    getGithubInfo: function(username) {
        return axios.all([ getRepos(username), getUserInfo(username) ])
            .then(axios.spread(function(repos, bio) {
                return {
                    repos: repos.data,
                    bio: bio.data
                }
            }));
    }
};

module.exports = helpers;
