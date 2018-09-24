import React, { Component } from 'react';
import logo from './logo.svg';
import Classes from'./App.css';

class App extends Component {
  render() {
    return (
      <div className={Classes.App}>
        <header className={Classes["App-header"]}>
          <img src={logo} className={Classes["App-logo"]} alt="logo" />
          <h1 className={Classes["App-title"]}>Welcome to React</h1>
        </header>
        <p className={Classes["App-intro"]}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
