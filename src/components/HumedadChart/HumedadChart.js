// import React from "react";
// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

// const HumedadChart = () => {
//   const dataHumedad = {
//     labels: Array.from({ length: 150 }, (_, i) => i),
//     datasets: [
//       {
//         label: "Humedad rel. (%HR)",
//         data: Array.from({ length: 150 }, () => Math.random() * (95 - 80) + 80),
//         borderColor: "#4986c0",
//         fill: false,
//         pointRadius: 0, 
//         tension: 0.4,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: "Tiempo",
//         },
//         ticks: {
//             autoSkip: false, // Habilitar autoSkip para evitar la superposición
//             maxTicksLimit: 8, // Limitar el número máximo de etiquetas en el eje X
//             callback: function(value, index) {
//               if (value % 20 === 0) {
//                 return value;
//               }
//               return '';
//             },
//         },
//       },
//       y: {
//         min: 50,
//         max: 100,
//         ticks: {
//             stepSize: 10,
//           },
//         title: {
//           display: true,
//           text: "Humedad rel. (%HR)",
//         },
//       },
//     },
//     responsive: true,
//     maintainAspectRatio: false,
//   };

//   return (
//     <div style={{ width: '100%', height: '300px' }}>
//       <Line data={dataHumedad} options={options} />
//     </div>
//   );
// };

// export default HumedadChart;

import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const HumedadChart = ({ data, labels }) => {
  const dataHumedad = {
    labels: labels,
    datasets: [
      {
        label: "Humedad rel. (%HR)",
        data: data,
        borderColor: "#4986c0",
        fill: false,
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Tiempo",
        },
        ticks: {
          autoSkip: false,
          maxTicksLimit: 8,
          callback: function(value, index) {
            if (value % 20 === 0) {
              return value;
            }
            return '';
          },
        },
      },
      y: {
        min: 50,
        max: 100,
        ticks: {
          stepSize: 10,
        },
        title: {
          display: true,
          text: "Humedad rel. (%HR)",
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <Line data={dataHumedad} options={options} />
    </div>
  );
};

export default HumedadChart;

