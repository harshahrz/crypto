import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData && historicalData.prices) {
      historicalData.prices.forEach((item) => {
        dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px', margin: '0' }}>
      <div style={{ width: '800px', margin: '0 auto' }}>
        <Chart
          chartType='LineChart'
          data={data}
          height="400px"
          options={{ legend: { position: 'bottom' } }}
          legendToggle
        />
      </div>
    </div>
  );
};

export default LineChart;
