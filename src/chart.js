import React, {Component} from 'react';
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer
} from 'recharts';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
  }

  render() {
    return(
      <ResponsiveContainer>
        <AreaChart data={this.data}>
          <XAxis dataKey="year"/>
          <CartesianGrid strokeDashArray = "3 3"/>
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default Chart;
