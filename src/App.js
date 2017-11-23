import React, { Component } from 'react';
import './App.css';
import Chart from './chart.js';
import data from './parsed_data.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>CO2 Emissions by Region</h1>
        <Chart data={data}/>
      </div>
    );
  }
}

export default App;
