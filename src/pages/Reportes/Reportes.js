// import React, { useEffect, useState } from "react";
// import PresionChart from "../../components/PresionChart/PresionChart.js";
// import TemperaturaChart from "../../components/TemperaturaChart/TemperaturaChart.js";
// import HumedadChart from "../../components/HumedadChart/HumedadChart.js";
// import './Reportes.css';

// function Reportes({ isSidebarOpen }) {
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const token = localStorage.getItem('token');

  //     if (!token) {
  //       setError(new Error('No token found'));
  //       return;
  //     }

  //     try {
  //       const response = await fetch('https://pulmochip.iotomato.com/api/measurements', {
  //         method: 'GET',
  //         headers: {
  //           'Authorization': `Bearer ${token}`,
  //           'Content-Type': 'application/json'
  //         }
  //       });

  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }

  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };

  //   fetchData();
//   }, []);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={`reportes-page`}>
//       <h2>Reportes</h2>
//       <h3>Presión (mBar|hPa)</h3>
//       <PresionChart />
//       <h3>Temperatura (°C)</h3>
//       <TemperaturaChart />
//       <h3>Humedad rel. (%HR)</h3>
//       <HumedadChart />
      // {data.map((item) => (
      //   <div key={item.sensorId} className="report-item">
      //     <p>Sensor ID: {item.sensorId}</p>
      //     {item.metadata && (item.metadata.pressure || item.metadata.pression) && (
      //       <p>Presión: {item.metadata.pressure || item.metadata.pression}</p>
      //     )}
      //   </div>
      // ))}
//     </div>
//   );
// }

// export default Reportes;

import React, { useEffect, useState } from "react";
import PresionChart from "../../components/PresionChart/PresionChart.js";
import TemperaturaChart from "../../components/TemperaturaChart/TemperaturaChart.js";
import HumedadChart from "../../components/HumedadChart/HumedadChart.js";
import './Reportes.css';

function Reportes({ isSidebarOpen }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [presionData, setPresionData] = useState([]);
  const [temperaturaData, setTemperaturaData] = useState([27]);
  const [humedadData, setHumedadData] = useState([]);
  const [presionLabels, setPresionLabels] = useState([]);
  const [tempHumedadLabels, setTempHumedadLabels] = useState([]);
  const [intervalId, setIntervalId] = useState(null);
  const [isRunning, setIsRunning] = useState(true);

  const generateTemperature = (prevValue) => {
    const change = Math.random() < 0.1 ? (Math.random() * 10 - 5) : (Math.random() * 2 - 1);
    const newValue = prevValue + change;
    return Math.min(Math.max(newValue, 26), 32); 
  };

  useEffect(() => {

    const fetchData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setError(new Error('No token found'));
        return;
      }

      try {
        const response = await fetch('https://pulmochip.iotomato.com/api/measurements', {
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
        console.log("result:" +result)
        setData(result);
        console.log("data: "+data)
      } catch (error) {
        setError(error);
      }
    };

    fetchData();

    const id = setInterval(() => {
      setPresionData(prevData => {
        const newData = [...(prevData || []), Math.random() * (998 - 996) + 996];
        return newData.length > 3600 ? newData.slice(1) : newData;
      });
      setTemperaturaData(prevData => {
        const newData = [...(prevData || []), generateTemperature(prevData[prevData.length - 1] || 26)];
        return newData.length > 145 ? newData.slice(1) : newData;
      });
      setHumedadData(prevData => {
        const newData = [...(prevData || []), Math.random() * (95 - 80) + 80];
        return newData.length > 145 ? newData.slice(1) : newData;
      });
      setPresionLabels(prevLabels => {
        const newLabels = [...(prevLabels || []), prevLabels.length];
        return newLabels.length > 3600 ? newLabels.slice(1) : newLabels;
      });
      setTempHumedadLabels(prevLabels => {
        const newLabels = [...(prevLabels || []), prevLabels.length];
        return newLabels.length > 145 ? newLabels.slice(1) : newLabels;
      });
    }, 100);

    setIntervalId(id);

    return () => clearInterval(id);

    
  }, []);

  const handleToggle = () => {
    if (isRunning) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const id = setInterval(() => {
        setPresionData(prevData => {
          const newData = [...(prevData || []), Math.random() * (998 - 996) + 996];
          return newData.length > 3600 ? newData.slice(1) : newData;
        });
        setTemperaturaData(prevData => {
          const newData = [...(prevData || []), generateTemperature(prevData[prevData.length - 1] || 26)];
          return newData.length > 145 ? newData.slice(1) : newData;
        });
        setHumedadData(prevData => {
          const newData = [...(prevData || []), Math.random() * (95 - 80) + 80];
          return newData.length > 145 ? newData.slice(1) : newData;
        });
        setPresionLabels(prevLabels => {
          const newLabels = [...(prevLabels || []), prevLabels.length];
          return newLabels.length > 3600 ? newLabels.slice(1) : newLabels;
        });
        setTempHumedadLabels(prevLabels => {
          const newLabels = [...(prevLabels || []), prevLabels.length];
          return newLabels.length > 145 ? newLabels.slice(1) : newLabels;
        });
      }, 100);
      setIntervalId(id);
    }
    setIsRunning(!isRunning);
  };

  return (
    <div className={`reportes-page`}>
      <h2>Reportes</h2>
      <div className="button-container">
        <button onClick={handleToggle}>{isRunning ? "Detener" : "Reanudar"}</button>
      </div>
      {/* {data ? (
      data.map((item) => (
        <div key={item.sensorId} className="respirator status">
          <h3>Estado de la máscara: {item.status}</h3>
        </div>
      ))
    ) : (
      <p>Cargando datos...</p>
    )} */}

      <h3>Presión (mBar|hPa)</h3>
      <PresionChart data={presionData} labels={presionLabels} />
      <h3>Temperatura (°C)</h3>
      <TemperaturaChart data={temperaturaData} labels={tempHumedadLabels} />
      <h3>Humedad rel. (%HR)</h3>
      <HumedadChart data={humedadData} labels={tempHumedadLabels} />
    </div>
  );
}

export default Reportes;




