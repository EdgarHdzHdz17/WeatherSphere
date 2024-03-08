import NavbarComponent from "./components/Navbar";
import HumidityComponent from "./components/Humidity";
import PressureComponent from "./components/Pressure";
import TempMaxComponent from "./components/TempMax";
import TempMinComponent from "./components/TempMin";
import CardDataComponent from "./CardData";
import { TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

function App() {
  const [country, setCountry] = useState("Mexico");
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&lang=en&units=metric&appid=b7d168b73bbc7bc71ae6fba71bc38f0d`
      );
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCountry = () => {
    fetchData();
  };

  const nameCountry = data ? data.name : "Loading";
  const descriptionCountry = data ? data.weather[0].description : "Loading";
  const latCountry = data ? data.coord.lat : "Loading";
  const lonCountry = data ? data.coord.lon : "Loading";
  const tempMaxCountry = data ? data.main.temp_max : "Loading";
  const tempMinCountry = data ? data.main.temp_min : "Loading";
  const pressureCountry = data ? data.main.pressure : "Loading";
  const humidityCountry = data ? data.main.humidity : "Loading";

  return (
    <>
      <div className="grid min-h-screen min-w-screen bg-[url('./assets/Wallpaper.jpg')] bg-cover bg-center bg-no-repeat">
        <NavbarComponent></NavbarComponent>
        <div className="items-center justify-around flex flex-col">
          <div className="max-sm:mb-3 w-[60%] flex flex-row justify-center items-center">
            <TextInput
              type="text"
              placeholder="Country"
              className="w-[60%]"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <FaSearch
              className="text-4xl text-white ml-3"
              onClick={handleCountry}
            />
          </div>
          <CardDataComponent
            nameData={nameCountry}
            descriptionData={descriptionCountry}
            latData={latCountry}
            lonData={lonCountry}
          ></CardDataComponent>
        </div>
        <div className="md:flex md:flex-row md:justify-around md:items-center max-sm:items-center sm:flex sm:flex-row max-sm:grid max-sm:grid-cols-2 max-sm:mx-5 max-sm:mt-5 lg:mx-5">
          <HumidityComponent humidityData={humidityCountry}></HumidityComponent>
          <PressureComponent pressureData={pressureCountry}></PressureComponent>
          <TempMaxComponent tempMaxData={tempMaxCountry}></TempMaxComponent>
          <TempMinComponent tempMinData={tempMinCountry}></TempMinComponent>
        </div>
      </div>
    </>
  );
}

export default App;
