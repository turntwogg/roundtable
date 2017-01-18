import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import Games from './Games';
import MainNav from './MainNav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
          <h2>RoundTable</h2>
          <h3>Your Digital Card Game specialists</h3>
          <MainNav />
        </div>
        {this.props.children || <Games />}
      </div>
    );
  }
}

export default App;
