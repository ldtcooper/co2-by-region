import React, {Component} from 'react';
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Label,
  Area
} from 'recharts';

const Chart = (props) => {
  return(
    //<ResponsiveContainer>
      <AreaChart width={1200} height={600} data={props.data}
        margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey="year" scale="time" minTickGap={2}>
          <Label value="Year" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis />
        <CartesianGrid strokeDashArray = "3 3"/>
        <Area type="monotone" dataKey="South Asia" stroke="#381A1C" fill="#381A1C" stackId="1"/>
        <Area type="monotone" dataKey="Sub-Saharan Africa" stroke="#563547" fill="#563547" stackId="1"/>
        <Area type="monotone" dataKey="Latin America & Caribbean" stroke="#5C5C78" fill="#5C5C78" stackId="1"/>
        <Area type="monotone" dataKey="East Asia & Pacific" stroke="#46889B" fill="#46889B" stackId="1"/>
        <Area type="monotone" dataKey="Middle East & North Africa" stroke="#3DB3A1" fill="#3DB3A1" stackId="1"/>
        <Area type="monotone" dataKey="Europe & Central Asia" stroke="#7FD98D" fill="#7FD98D" stackId="1"/>
        <Area type="monotone" dataKey="North America" stroke="#E2F573" fill="#E2F573" stackId="1"/>
      </AreaChart>
    //</ResponsiveContainer>
  );
};


export default Chart;
