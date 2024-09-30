// import { DualAxes } from '@ant-design/plots';
// import React from 'react';
//
// const Chart = () => {
//   const data = [
//     { year: '1991', value: 3, count: 10 },
//     { year: '1992', value: 4, count: 4 },
//     { year: '1993', value: 3.5, count: 5 },
//     { year: '1994', value: 5, count: 5 },
//     { year: '1995', value: 4.9, count: 4.9 },
//     { year: '1996', value: 6, count: 35 },
//     { year: '1997', value: 7, count: 7 },
//     { year: '1998', value: 9, count: 1 },
//     { year: '1999', value: 13, count: 20 },
//   ];
//
//   const config = {
//     data,
//     xField: 'year',
//     legend: true,
//     children: [
//       {
//         type: 'line',
//         yField: 'value',
//         style: {
//           stroke: '#5B8FF9',
//           lineWidth: 2,
//         },
//         axis: {
//           y: {
//             title: 'value',
//             style: { titleFill: '#5B8FF9' },
//           },
//         },
//       },
//       {
//         type: 'line',
//         yField: 'count',
//         style: {
//           stroke: '#5AD8A6',
//           lineWidth: 2,
//         },
//         axis: {
//           y: {
//             position: 'right',
//             title: 'count',
//             style: { titleFill: '#5AD8A6' },
//           },
//         },
//       },
//     ],
//   };
//   return <DualAxes {...config} />;
// };
//
// // Export Chart as the default export
// export default Chart;

import React, { PureComponent } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Chart extends PureComponent {
  static demoUrl =
    'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952';

  render() {
    return (
      <div>
        <p>hi</p>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
