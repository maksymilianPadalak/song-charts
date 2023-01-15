import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

interface Props {
  mostPopularWords: Record<string, number>;
}

const MainChart: React.FC<Props> = ({ mostPopularWords }) => {
  const examplaryData = [mostPopularWords];
  return (
    <ResponsiveBar
      data={examplaryData}
      keys={Object.keys(examplaryData[0])}
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      innerPadding={10}
      tooltip={({ label }) => (
        <div className={'bg-light p-2'}>
          <h3>{label.split(' ').slice(0, 1)}</h3>
        </div>
      )}
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
        legend: 'words',
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
    />
  );
};

export default MainChart;
