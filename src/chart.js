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
          region: "South Asia",
          stroke: "#381A1C",
          fill: "#381A1C"
        },
        {
          region: "Sub-Saharan Africa",
          stroke: "#563547",
          fill: "#563547"
        },
        {
          region: "Latin America & Caribbean",
          stroke: "#5C5C78",
          fill: "#5C5C78"
        },
        {
          region: "East Asia & Pacific",
          stroke: "#46889B",
          fill: "#46889B"
        },
        {
          region: "Middle East & North Africa",
          stroke: "#3DB3A1",
          fill: "#3DB3A1"
        },
        {
          region: "Europe & Central Asia",
          stroke: "#7FD98D",
          fill: "#7FD98D"
        },
        {
          region: "North America",
          stroke: "#E2F573",
          fill: "#E2F573"
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
