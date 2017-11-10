// jshint esversion:6
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { 
      repos: []
    };

  }

  search (term) {
    console.log(`${term} was searched`);
    // send post request to /repos
    
    fetch('/repos', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: term
      })
    });
  }

  componentDidMount() {
    console.log('i mounted');

    fetch('/repos', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(data => {
        console.log('something came', data);
        return data.json();
      })
      .then(data => {
        console.log('-------repos---', data);
        this.setState({repos: data});
        console.log('Retrived repos');
        console.log(this.state.repos);
      })
      .catch(() => {
        console.log('did not get repos');
      });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));