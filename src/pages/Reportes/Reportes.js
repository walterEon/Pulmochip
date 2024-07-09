import React, { useEffect, useState } from "react";
import PresionChart from "../../components/PresionChart/PresionChart.js";
import TemperaturaChart from "../../components/TemperaturaChart/TemperaturaChart.js";
import HumedadChart from "../../components/HumedadChart/HumedadChart.js";
import './Reportes.css';

function Reportes({ isSidebarOpen }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setError(new Error('No token found'));
        return;
      }

      try {
        const response = await fetch('http://pulmoc-pulmo-vydtfrp1m0lg-2105162279.us-east-1.elb.amazonaws.com/api/measurements', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
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
    <div className={`reportes-page`}>
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

