import React from 'react';
import barVerticalSpec from './charts/vegaLite/BarVertical/spec.json';
import barVerticalData from './charts/vegaLite/BarVertical/data.json';
import barHorizontalSpec from './charts/vegaLite/BarHorizontal/spec.json';
import barHorizontalData from './charts/vegaLite/BarHorizontal/data.json';
import pieData from './charts/vegaLite/Pie/data.json';
import pieSpec from './charts/vegaLite/Pie/spec.json';
import { VegaLite } from 'react-vega';

export default { title: 'Vega-lite charts' };

export const BarVertical = () => (
  <VegaLite
    spec={barVerticalSpec}
    
    data={barVerticalData}
  ></VegaLite>
);
export const BarHorizontal = () => (
  <VegaLite
    spec={barHorizontalSpec}
    data={barHorizontalData}
    
  ></VegaLite>
);
export const Pie = () => <VegaLite spec={pieSpec} data={pieData}></VegaLite>;

