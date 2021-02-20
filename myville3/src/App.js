import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Homepage from './components/Homepage.js';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       projects: []
    }
  }
  
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Homepage></Homepage>
      </div>
    )
  }
}

export default App

