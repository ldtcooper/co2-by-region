import React, {Component} from 'react';
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Label
} from 'recharts';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
  }

  render() {
    return(
      //<ResponsiveContainer>
        <AreaChart width={1200} height={600} data={this.data}>
          <XAxis dataKey="year">
            <Label value="Year" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis label={"CO2 Emissions\n(Metric tons per capita)"}/>
          <CartesianGrid strokeDashArray = "3 3"/>
        </AreaChart>
      //</ResponsiveContainer>
    );
  }
}

export default Chart;
