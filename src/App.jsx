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
      <div className="grid grid-rows-[10%,35%,55%] min-h-screen min-w-screen bg-[url('./assets/Wallpaper.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="">
          <NavbarComponent></NavbarComponent>
        </div>
        <div className="items-center flex flex-col">
          <div className="w-[60%] flex flex-row justify-center items-center my-5 ">
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
        <div className="grid gap-4 mx-5 max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 max-sm:my-5 sm:my-5">
          <div className="flex items-center justify-center">
            <HumidityComponent
              humidityData={humidityCountry}
            ></HumidityComponent>
          </div>
          <div className="flex items-center justify-center">
            <PressureComponent
              pressureData={pressureCountry}
            ></PressureComponent>
          </div>
          <div className="flex items-center justify-center">
            <TempMaxComponent tempMaxData={tempMaxCountry}></TempMaxComponent>
          </div>
          <div className="flex items-center justify-center">
            <TempMinComponent tempMinData={tempMinCountry}></TempMinComponent>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
