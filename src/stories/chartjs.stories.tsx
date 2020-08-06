import React from 'react';
import barVerticalData from './charts/chartsjs/BarVertical/data.json';
import barHorizontal from './charts/chartsjs/BarHorizontal/data.json';
import pieData from './charts/chartsjs/Pie/data.json';

import { Bar, Pie, HorizontalBar } from 'react-chartjs-2';

export default { title: 'chartjs charts' };

function click(e: any) {
  console.log(e);
}

export const BarVertical = () => (
  <Bar
    data={barVerticalData}
    onElementsClick={click}
  />
);
export const BarHorizontal = () => (
  <HorizontalBar
    data={barHorizontal}
    onElementsClick={click}
  />
);
export const PieChart = () => (
  <Pie
    data={pieData}
    width={100}
    height={50}
    onElementsClick={click}
  />
);
