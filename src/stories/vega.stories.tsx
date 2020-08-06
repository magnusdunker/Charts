import React from 'react';
import barVerticalSpec from './charts/vega/BarVertical/spec.json';
import barVerticalData from './charts/vega/BarVertical/data.json';
import pieData from './charts/vega/Pie/data.json';
import pieSpec from './charts/vega/Pie/spec.json';



import { Vega } from 'react-vega';

export default { title: 'Vega charts' };

function handleHover(...args: any) {
  console.log(args);
}
function click(...args: any) {
  console.log(args);
}

export const BarVertical = () => (
  <Vega
    spec={barVerticalSpec}
    data={barVerticalData}
    signalListeners={{
      tooltip: handleHover,
      click: click,
    }}
  ></Vega>
);

export const Pie = () => <Vega spec={pieSpec} data={pieData}></Vega>;

