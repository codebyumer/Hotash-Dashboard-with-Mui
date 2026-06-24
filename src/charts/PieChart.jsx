import { Chart } from 'react-google-charts';

const data = [
  ['Task', 'Hours per Day'],
  ['Work', 11],
  ['Eat', 2],
  ['Commute', 2],
  ['Watch TV', 2],
  ['Sleep', 7],
];

const options = {
  title: 'My Daily Activities',
  pieHole: 0.4,
  legend: {
    position: 'bottom',
  },
  chartArea: {
    width: '90%',
    height: '75%',
  },
  colors: [
    'rgb(53, 138, 148)',
    'rgb(37, 11, 165)',
    'rgb(40, 34, 70)',
    '#f39f2a',
    '#188310',
  ],
};

export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
  );
}
