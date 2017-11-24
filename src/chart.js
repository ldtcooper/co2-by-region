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
        <AreaChart width={1200} height={600} data={this.data}>
          <XAxis dataKey="year" scale="time">
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
