import React, { useState, useEffect } from "react";

const WeatherData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=Mexico&lang=es&units=metric&appid=b7d168b73bbc7bc71ae6fba71bc38f0d"
        );
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const nameData = data ? data.name : "Loading";
  const descriptionData = data ? data.weather[0].description : "Loading";
  const latData = data ? data.coord.lat : "Loading";
  const lonData = data ? data.coord.lon : "Loading";

  return { nameData, descriptionData, latData, lonData };
};

export default WeatherData;
