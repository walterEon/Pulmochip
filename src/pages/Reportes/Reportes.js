import React, { useEffect, useState } from "react";
import PresionChart from "../../components/PresionChart/PresionChart.js";
import TemperaturaChart from "../../components/TemperaturaChart/TemperaturaChart.js";
import HumedadChart from "../../components/HumedadChart/HumedadChart.js";
import './Reportes.css';

function Reportes() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    
//     const myHeaders = new Headers();
//     myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJpYXQiOjE3MjAxOTcyNzAsImV4cCI6MTcyMDIwMDg3MH0.B6Uaa811XQ-a8o2mKg6XzM5CBRgONwgC8bH4C-MaKpk");

// const requestOptions = {
//   method: "GET",
//   headers: myHeaders,
//   redirect: "follow"
// };

// fetch("http://pulmoc-pulmo-vydtfrp1m0lg-2105162279.us-east-1.elb.amazonaws.com/api/measurements", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

    const fetchData = async () => {
      try {
        const response = await fetch('http://pulmoc-pulmo-vydtfrp1m0lg-2105162279.us-east-1.elb.amazonaws.com/api/measurements', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJpYXQiOjE3MjAyMTgzMDAsImV4cCI6MTcyMDIyMTkwMH0.GKbGbATPcaeNXOVJBU31l-MvDaYxwyUnzkrioYTeaI0`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="reportes-page">
      <h2>Reportes</h2>
      <h3>Presión (mBar|hPa)</h3>
      <PresionChart />
      <h3>Temperatura (°C)</h3>
      <TemperaturaChart />
      <h3>Humedad rel. (%HR)</h3>
      <HumedadChart />
      {data.map((item) => (
        <div key={item.sensorId} className="report-item">
          <p>Sensor ID: {item.sensorId}</p>
          {item.metadata && (item.metadata.pressure || item.metadata.pression) && (
            <p>Presión: {item.metadata.pressure || item.metadata.pression}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Reportes;
