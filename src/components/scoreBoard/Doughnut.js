import { Doughnut } from 'react-chartjs-2';

const DoughnutComponent = ({score, total}) => {
    const data = {
        labels: [],
        datasets: [{
          label: 'Score chart',
          data: [score, total-score],
          backgroundColor: [
            '#28C8AB',
            '#F3364C'
          ],
          hoverOffset: 4
        }]
      };
    return (
        <div>
            <Doughnut 
             data={data}
             options={{ maintainAspectRatio: false }}
            />
        </div>
    );
};

export default DoughnutComponent;
