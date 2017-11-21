import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './chart.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>CO2 Emissions by Region</h1>
        <Chart />
      </div>
    );
  }
}

export default App;
