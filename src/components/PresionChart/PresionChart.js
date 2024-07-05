import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const PresionChart = () => {
  const dataPresion = {
    labels: Array.from({ length: 3500 }, (_, i) => i), // Labels simuladas
    datasets: [
      {
        label: "Presión (mBar|hPa)",
        data: Array.from({ length: 3500 }, () => Math.random() * (998 - 996) + 996), // Datos simulados
        borderColor: "black",
        fill: false,
        pointRadius: 0, // Eliminar puntos
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
            autoSkip: false, // Habilitar autoSkip para evitar la superposición
            maxTicksLimit: 8, // Limitar el número máximo de etiquetas en el eje X
            callback: function(value, index) {
              if (value % 500 === 0) {
                return value;
              }
              return '';
            },
        },
      },
      y: {
        min: 990,
        max: 1010,
        ticks: {
            stepSize: 5,
          },
        title: {
          display: true,
          text: "Presión (mBar|hPa)",
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <Line data={dataPresion} options={options} />
    </div>
  );
        
};

export default PresionChart;
