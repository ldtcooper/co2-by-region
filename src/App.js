import React, { Component } from 'react';
import './App.css';
import Chart from './chart.js';
import data from './parsed_data.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>CO2 Emissions by Region</h1>
        <div className = 'chart-div'>
          <Chart data={data}/>
        </div>
      </div>
    );
  }
}

export default App;
