import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

interface Props {
  data?: any;
}

const examplaryData = [
  {
    'hot dog': 80,
    burger: 40,
    sandwich: 83,
    kebab: 166,
    fries: 197,
    donut: 94,
  },
];

const MainChart: React.FC<Props> = ({ data = examplaryData }) => (
  <ResponsiveBar
    data={data}
    keys={Object.keys(data[0])}
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    innerPadding={10}
    groupMode='grouped'
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
    borderColor={{ theme: 'background' }}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legendPosition: 'middle',
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'food',
      legendPosition: 'middle',
      legendOffset: -40,
    }}
    labelSkipWidth={8}
    labelTextColor={{
      from: 'color',
      modifiers: [['darker', 1.8]],
    }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    motionConfig='wobbly'
    role='application'
    ariaLabel='Nivo bar chart demo'
    barAriaLabel={function (e) {
      return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue;
    }}
  />
);

export default MainChart;
