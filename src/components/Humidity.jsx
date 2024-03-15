import { Card } from "flowbite-react";
import humidityIcon from "../assets/images/humidity.png";

function HumidityComponent(props) {
  return (
    <Card className="bg-transparent max-sm:h-[80%] max-sm:w-[90%] sm:h-[95%] md:h-[60%] lg:h-[60%] lg:w-[70%] border-transparent">
      <img
        className="lg:w-[70%] lg:ml-10 object-cover"
        src={humidityIcon}
        alt="Imagen"
      />
      <h5 className="text-white text-lg font-bold max-sm:text-xs">
        Humidity: {props.humidityData} %
      </h5>
    </Card>
  );
}

export default HumidityComponent;
