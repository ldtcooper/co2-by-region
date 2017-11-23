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

  propsList() {
      const props = [
        {
          region: "Sub-Saharan Africa",
          stroke: ,
          fill:
        },
        {
          region: "Latin America & Caribbean",
          stroke: ,
          fill:
        },
        {
          region: "East Asia & Pacific",
          stroke: ,
          fill:
        },
        {
          region: "Europe & Central Asia",
          stroke: ,
          fill:
        },
        {
          region: "Middle East & North Africa",
          stroke: ,
          fill:
        },
        {
          region: "North America",
          stroke: ,
          fill:
        },
        {
          region: "South Asia",
          stroke: ,
          fill:
        }
      ];
    }

  render() {
    return(
      //<ResponsiveContainer>
        <AreaChart width={1200} height={600} data={this.data}>
          <XAxis dataKey="year" scale="time">
            <Label value="Year" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis label={{ value: 'CO2 Emissions\n(Metric Tons per Capita)', angle: -90, position: 'insideLeft' }}/>
          <CartesianGrid strokeDashArray = "3 3"/>
        </AreaChart>
      //</ResponsiveContainer>
    );
  }
}

export default Chart;
