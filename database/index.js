// jshint esversion:6
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
mongoose.Promise = global.Promise;

let repoSchema = mongoose.Schema({
  id: Number,
  owner: String,
  avatar: String,
  name: String,
  description: String,
  forkCount: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let repoInfo = {
    id: repo.id,
    owner: repo.full_name,
    avatar: repo.owner.avatar_url,
    name: repo.name,
    description: repo.description,
    forkCount: repo.forks
  };

  let newRepo = new Repo(repoInfo);

  newRepo.save()
      .then(() => {
        console.log('repo was saved');
      })
      .catch(() => {
        console.log('repo was not saved');
      });
};

let find = () => {
  console.log('Finding top 25 repos');
  return Repo.find().sort({forkCount: -1}).limit(25)
      .then((repos) => {
        console.log('Top 25 repos found');
        return repos;
      })
      .catch(() => {
        console.log('repos not found');
      });
};


module.exports.save = save;
module.exports.find = find;