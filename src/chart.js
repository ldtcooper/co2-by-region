import React, {Component} from 'react';
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Label
} from 'recharts';
import Areas from './area.js';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
  }

  render() {
    return(
      //<ResponsiveContainer>
        <AreaChart width={1200} height={600} data={this.data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey="year" scale="time" minTickGap={2}>
            <Label value="Year" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis>
            <Label value="Y"/>
          </YAxis>
          <CartesianGrid strokeDashArray = "3 3"/>
          <Areas />
        </AreaChart>
      //</ResponsiveContainer>
    );
  }
}

export default Chart;
