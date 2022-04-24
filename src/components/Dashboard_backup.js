import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export const Dashboard = () => {
  return (
    <div>
      <Line
        datasetIdKey='id'
        data={{
          labels: ['Jun', 'Jul', 'Aug'],
          datasets: [
            {
              id: 1,
              label: '',
              data: [5, 6, 7],
            },
            {
              id: 2,
              label: '',
              data: [3, 2, 1],
            },
          ],
        }}
      />
    </div>
  )
};
