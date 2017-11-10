// jshint esversion:6
const request = require('request');
const config = require('../config.example.js');
const db = require('../database/index.js');

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      let repos = JSON.parse(body);
      repos.forEach(repo => {
        db.save(repo);
      });
    }
  });
};


module.exports.getReposByUsername = getReposByUsername;