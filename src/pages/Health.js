import React, { useState, useEffect } from "react";

function Health() {
  const [data, setData] = useState(null);

  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  function verificarEstado(apiResponse) {
    // Parseamos la respuesta de la API (que se asume es un string JSON)
    let parsedData;
    try {
      parsedData = JSON.parse(apiResponse);
    } catch (error) {
      return "Error al parsear la respuesta de la API";
    }

    // Verificamos si el campo "status" es true
    if (parsedData && parsedData.status === true) {
      return "activo";
    } else {
      return "inactivo";
    }
  }

  useEffect(() => {
    fetch("http://pulmoc-pulmo-vydtfrp1m0lg-2105162279.us-east-1.elb.amazonaws.com/api/health", requestOptions)
      .then((response) => response.text())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <h1>Estado de salud del API</h1>
      <p>El API está {data ? verificarEstado(data) : "cargando..."}</p>
    </div>
  );
}

export default Health;
