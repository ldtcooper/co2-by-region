import React from 'react';
import { Area } from 'recharts';

const AreaComponent = (props) => {
  return(
    <Area type='monotone'
       dataKey={props.region}
       stackId="1"
       stroke={props.stroke}
       fill={props.fill}
    />
  );
};

const propVals = [
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

const Areas = () => {
  return( propVals.map( (el) => ( <AreaComponent props={el}/>)));
};

export default Areas;
