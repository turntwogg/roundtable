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
        <header className="App-header">
          <Link to="/" className="App-logo-link">
            <img src={logo}className="App-logo" alt="logo" />
            <span>RoundTable</span>
          </Link>
          <div className="layout-spacer" />
          <MainNav />
        </header>
        <main className="App-main">
          {this.props.children || <Games />}
        </main>
      </div>
    );
  }
}

export default App;
