import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './containers/ToDo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDo />
      </div>
    );
  }
}

export default App;
