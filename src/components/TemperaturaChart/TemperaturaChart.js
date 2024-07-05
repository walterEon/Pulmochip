import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const TemperaturaChart = () => {
  const dataTemperatura = {
    labels: Array.from({ length: 150 }, (_, i) => i),
    datasets: [
      {
        label: "Temperatura (°C)",
        data: Array.from({ length: 150 }, () => Math.random() * (32 - 26) + 26),
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
            autoSkip: false, // Habilitar autoSkip para evitar la superposición
            maxTicksLimit: 8, // Limitar el número máximo de etiquetas en el eje X
            callback: function(value, index) {
              if (value % 20 === 0) {
                return value;
              }
              return '';
            },
        },
      },
      y: {
        min: 20,
        max: 40,
        ticks: {
            stepSize: 5,
          },
        title: {
          display: true,
          text: "Temperatura (°C)",
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
  <div style={{ width: '100%', height: '300px' }}>
    <Line data={dataTemperatura} options={options} />
    </div>
  );
};

export default TemperaturaChart;
