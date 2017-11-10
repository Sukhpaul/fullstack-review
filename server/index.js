// jshint esversion:6
const express = require('express');
const github = require('../helpers/github');
const bodyparser = require('body-parser');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyparser.json());

app.post('/repos', function (req, res) {
  console.log('Hello');
  console.log(req.body.username);
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  
  github.getReposByUsername(req.body.username);

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

