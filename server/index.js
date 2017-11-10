// jshint esversion:6
const express = require('express');
const github = require('../helpers/github');
const bodyparser = require('body-parser');
const db = require('../database/index.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyparser.json());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  
  github.getReposByUsername(req.body.username);

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.find()
    .then(repos => {
      console.log('--dfdfdfd----', repos, 'breh');
      res.send(repos);
    })
    .catch(() => {
      console.log('Repos not found');
    });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

