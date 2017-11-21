import React, {Component} from 'react';
import data from '/data.js';
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis
} from 'recharts';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
  }

  render() {
    return(
      <AreaChart>
        <CartesianGrid strokeDashArray = "3 3"/>
      </AreaChart>
    );
  }
}
