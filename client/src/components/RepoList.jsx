// jshint esversion:6
import React from 'react';

const RepoList = (props) => (
  
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <ul>
    {props.repos.map((repo, index) => {
      return <li key={index}>
      		 <p>Owner: {repo.owner}</p>
      		 <p>Name: {repo.name}</p>
      		 <p>Description: {repo.description}</p>
      		 <p>Fork Count: {repo.forkCount}</p>
      		 </li>
    })}
    </ul>
  </div>
)


export default RepoList;