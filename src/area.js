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

export default AreaComponent;
